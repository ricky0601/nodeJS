const axios = require('axios');

const makeRequest = async () => {
  const options = {
    method: 'POST',
    url: 'https://chatgpt-42.p.rapidapi.com/geminipro',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '4fd38d99a4msh99a967594d10815p1c2b65jsn2ad399dcef24',
      'X-RapidAPI-Host': 'chatgpt-42.p.rapidapi.com'
    },
    data: {
      messages: [
        {
          role: 'user',
          content: '사진을 주면 분석 해줄 수 있어?'
        }
      ],
      web_access: false
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

// Call the asynchronous function
makeRequest();
