

import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      search_word:"",
      images:[]
    }
  }

  onSearchChange = (event)=>{
    let word = event.target.value;
    this.setState(prevState=>{
      return {
        search_word : word
      }
    })
  }

  onClickSearch = (event)=>{
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.search_word}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(resp=>resp.json())
      .then(json=>{
        this.setState(prevState=>{
          return {
            images:json.data.map(d=>d.images.original.url)
          }
        })
      })
  }

  render(){
    return (
      <div className="container">
        <GifSearch onSearchChange={this.onSearchChange} onClickSearch={this.onClickSearch}/>
        <GifList images={this.state.images}/>
      </div>
    )
  }
}
