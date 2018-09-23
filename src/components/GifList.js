import React, { Component } from 'react'

export default class GifList extends Component{

  renderList(){

  }

  render(){
    return(
      <ul>
        {this.props.gifs.map(function(gif){
          <li>
            gif
          </li>
        })}
      </ul>
    )
  }

}
