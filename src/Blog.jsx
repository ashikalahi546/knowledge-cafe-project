import { FaBookmark } from "react-icons/fa";

export default function Blog({ blog,handleAddToBookMark,handleAddtoReadingTime }) {
  const {id, title, cover, author_img, posted_date, reading_time, author,hashtags } = blog;
  return (
    <div className="w-2/3 space-y-3">
     
      <img className="w-[900px] h-96 rounded-xl" src={cover} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img className="size-14 rounded-full" src={author_img} alt="" />
          <div>
            <h3>{posted_date}</h3>
            <h4>{author}</h4>
          </div>
        </div>
        <div className='flex gap-3'>
        
          <h4>{reading_time} min read</h4>
          <button onClick={()=>handleAddToBookMark(blog)} 
          className="text-red-600"><FaBookmark></FaBookmark></button>

        </div>
      </div>
      <h3 className="text-3xl ">{title}</h3>
      <p >
        {
hashtags.map((hash,e) => <span key={e}>#{hash}

</span>)
        }
      </p>
      <div>
        <button  onClick={()=>handleAddtoReadingTime(id,reading_time)}
         className="text-blue-500 underline font-medium">Mark as Read</button>
      </div>
    </div>
  );
}
