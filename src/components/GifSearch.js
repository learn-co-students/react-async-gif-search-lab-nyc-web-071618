import React from 'react'

class GifSearch extends React.Component {

  state = {
    query: ""
  }

  handleSubmit =(event) =>{
    event.preventDefault()
    this.props.fetchUrl(this.state.query)
  }

  render(){
    console.log(this.props)
  return(
    <div>
      <form onSubmit ={this.handleSubmit} >
        <input type='text' value={this.state.query} onChange={event =>{this.setState({query: event.target.value})}}/>
      </form>
    </div>
    )
  }
}

export default GifSearch
