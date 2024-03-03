import React, { useRef, useState } from "react";
//useRef == HTML DOM에 접근하게 해줌

const DiaryEditor = () => {

    const authorInput = useRef();   //MutableRefObject 는 html 요소 접근하게 해줌
    const contentInput = useRef();
    const [state, setState] = useState({
        author: "",
        content: "" ,
        emotion: 1,
    });

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value,
        })
    }
    
    const handleSubmit = ()=>{
        if(state.author.length < 1){    //작성자의 길이가 1글자 미만일때
            //focus
            authorInput.current.focus();    //Ref 객체는 현재 가르키는 값을 current로 불러오고 focus라는 기능을 사용
            return;
        }
        
        if(state.content.length < 5){    //본문의 길이가 5글자 미만일때
            //focus
            contentInput.current.focus(); 
            return;
        }
        alert("저장 성공");
    }

    return <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            <input ref={authorInput} name="author" value={state.author} onChange={handleChangeState}/>
        </div>
        <div>
            <textarea ref={contentInput} name="content" value={state.content} onChange={handleChangeState}/>
        </div>
        <div>오늘의 감정 점수 : 
            <select name="emotion" value={state.emotion} onChange={handleChangeState}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button onClick={handleSubmit}>일기 저장하기</button>
        </div>
    </div>;
};

export default DiaryEditor;