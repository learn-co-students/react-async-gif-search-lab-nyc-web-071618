import React, { Component } from 'react'

class GifList extends React.Component{
    constructor(props){
        super(props)
    }


    


    render(){
       console.log()
        return(
            <div>
                {this.props.gifUrls.map((url)=><img src={url}/>) }
            </div>
        )
    }
}

export default GifList