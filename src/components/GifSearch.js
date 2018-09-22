
import React from 'react'

function GifSearch(props){
  return (
    <div>
      <h3>Enter a Search Keyword</h3>
      <input type="text" onChange={props.onSearchChange}/><br/>
      <button onClick={props.onClickSearch }>Search</button>
    </div>
  )
}

export default GifSearch
