import React from 'react'

export default function Bookmark({bookmark}) {
    const {title} = bookmark;
  return (
    <div>
      
      <h3 className='bg-gray-200 my-5 p-5 rounded-xl text-center text-lg'>{title}</h3>
    </div>
  )
}
