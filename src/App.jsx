import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";
import Header from "./components/Header";

function App() {
  const [bookmarks, setBookmark] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddToBookMark = (blog) => {
    const newBookMark = [...bookmarks, blog];
    setBookmark(newBookMark);
  };

  const handleAddtoReadingTime = (time) => {
    // console.log(time + readingTime)
    // // // const newReadingTime = readingTime + time;
    // // // setReadingTime(newReadingTime)
    setReadingTime(readingTime + time);
  };

  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className="flex max-w-7xl mx-auto ">
        <Blogs
          handleAddToBookMark={handleAddToBookMark}
          handleAddtoReadingTime={handleAddtoReadingTime}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
