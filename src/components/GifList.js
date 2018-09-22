
import React from 'react'

function GifList(props){
  const renderImages=(images)=>{
    return images.map((img,idx)=>{
      return (
        <li key={idx}>
          <img src={img}/>
        </li>
      )
    })
  }
  return (
    <div>
      <ul>
        {renderImages(props.images)}
      </ul>
    </div>
  )
}

export default GifList
