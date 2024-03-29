import { useState, useRef } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

// const dummyList = [
//   {
//     id:1,
//     author:"한동건",
//     content:"하이 1",
//     emotion: 1,
//     created_date: new Date().getTime(),
//   },
//   {
//     id:2,
//     author:"홍길동",
//     content:"하이 2",
//     emotion: 3,
//     created_date: new Date().getTime(),
//   },
//   {
//     id:3,
//     author:"아무개",
//     content:"하이 3",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },
// ]

function App(){

  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    }
    dataId.current += 1;
    setData ([newItem, ...data]);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? {...it, content:newContent} : it
      )
    );
  };

  const onRemove = (targetId) =>{ //삭제하기 기능
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it)=> it.id !== targetId);
    setData(newDiaryList);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data}/>
    </div>
  );
}

export default App;