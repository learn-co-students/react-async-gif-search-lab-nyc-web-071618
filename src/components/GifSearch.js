import React, {Component} from 'react'

class GifSearch extends React.Component{
    constructor(props){
        super(props)
        this.state={
            input:''
        }
    }

   saveInput = (e) => {
       this.setState({
           input:e.target.value
       })
   }




    render(){
        return(
        <div>
            <input type='text'
                onChange={this.saveInput}/>
            <button onClick={()=>this.props.fetchGifs(this.state.input)}>Submit</button>
        </div>
        )
    }
}

export default GifSearch