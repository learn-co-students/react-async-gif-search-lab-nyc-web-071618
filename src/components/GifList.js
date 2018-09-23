import React from 'react'

class GifList extends React.Component {


  render() {
    return(
    <ul>
      {(this.props.search) ? this.props.search.map((gif, idx) => {
        return <li key={idx}><img src={gif.url}/></li>
      }) : null}
    </ul>
    )
  }
}
export default GifList
