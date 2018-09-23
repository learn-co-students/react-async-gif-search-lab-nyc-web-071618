import React from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

class GifListContainer extends React.Component{

  state = {
    gifs :[],
  }

  fetchUrl = (query = 'power ranger') => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
      }
    )
  }

  componentDidMount(){
    this.fetchUrl()
  }


  render(){
    return(
      <div>
        <GifSearch fetchUrl={this.fetchUrl} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

}

export default GifListContainer
