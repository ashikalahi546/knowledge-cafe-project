import { useEffect } from "react";
import { useState } from "react"
import Blog from "../Blog";


export default function Blogs({handleAddToBookMark,handleAddtoReadingTime}) {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
  return (
    <div>
      
      <h2 className="text-2xl my-5">Blogs : {blogs.length} </h2>
   <div className="flex flex-col gap-10">
   {
        blogs.map(blog => <Blog blog={blog} handleAddToBookMark={handleAddToBookMark} key={blog.id} handleAddtoReadingTime={handleAddtoReadingTime}></Blog>)
      }
   </div>
    </div>
  )
}
