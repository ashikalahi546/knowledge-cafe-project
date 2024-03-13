import Bookmark from "./Bookmark";


export default function Bookmarks({bookmarks,readingTime}) {

  return (
    <div className="w-1/3">
        <h2 className="text-center my-5 text-xl bg-gray-200 p-5 rounded-lg">Spent time on read : {readingTime} </h2>
    <div className="bg-gray-100 p-5 h-96   rounded-xl">
  <h3 className="text-center text-2xl font-medium">Bookmarked Blogs : {bookmarks.length}</h3>    
  {
   bookmarks.map((bookmark,e) => <Bookmark bookmark={bookmark} key={e} ></Bookmark>) 
  }
    </div>
    </div>
  )
}
