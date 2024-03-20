import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useSpeechSynthesis } from 'react-speech-kit';

const genAI = new GoogleGenerativeAI('AIzaSyBhWxSAM1zuKSq9FNcMoc9vDCRXCix2QCE');

function fileToGenerativePart(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      resolve({
        inlineData: {
          data: reader.result.split(",")[1],
          mimeType: file.type,
        },
      });
    };
  });
}

async function run(setResult) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
  const prompt = "이 제품을 시각장애인이 알수 있게 alt 속성을 작성해줘";

  const imageInput = document.getElementById("imageInput");
  const files = imageInput.files;

  if (files.length > 0) {
    const imageParts = await Promise.all(Array.from(files).map(fileToGenerativePart));

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();
    setResult(text);
    console.log(text);
  } else {
    console.error("No files selected.");
  }
}

const App = () => {
  const { speak } = useSpeechSynthesis();
  const [result, setResult] = useState("");

  const handleRun = () => {
    run(setResult);
  };

  const handleSpeak = () => {
    speak({ text: result });
  };

  return (
    <div>
      <input type="file" id="imageInput" multiple />
      <button onClick={handleRun}>alt 생성</button>
      <button onClick={handleSpeak}>TTS 실행</button>
      <br/>
      <span className="result">{result}</span>
    </div>
  );
};

export default App;
