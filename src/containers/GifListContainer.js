import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  state = {
    gifs: [1,2,3]
  }

handleSubmit = (event) => {
  console.log('submit')
  event.preventDefault()
  const searchParams = event.target.elements.search.value;
  fetch(`http://api.giphy.com/v1/gifs/search?q=${searchParams}&api_key=dc6zaTOxFJmzC&rating=g`)
  .then(response => response.json())
  .then(data => this.setState({
    gifs: [data.data[0].images.original,
       data.data[1].images.original,
       data.data[2].images.original
     ]
  }))
}


// fetch(`http://api.giphy.com/v1/gifs/search?q=${searchParams}&api_key=dc6zaTOxFJmzC&rating=g`)
// .then(response => response.json())
// .then(data => this.setState({
//   gifs: [data.data[0].images.original,
//   data.data[1].images.original,
//   data.data[2].images.original
// ]
// })
  render() {
    return(
      <div>
      <GifSearch handleSubmit={this.handleSubmit} />
      <GifList search={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer
