import React from 'react'

class GifSearch extends React.Component {
  render() {
    return(
      <form onSubmit={this.props.handleSubmit}>
      <input name="search" type='text' placeholder='look for something'></input>
      <button type='submit'>GifSearch</button>
      </form>
    )
  }
}
export default GifSearch
