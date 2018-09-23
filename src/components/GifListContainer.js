import React,{Component} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

class GifListContainer extends React.Component{

    state={
        gifUrls:[]
    }

    fetchGifs = (userInput) => {
        const fetchURL=`http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=dc6zaTOxFJmzC&rating=g`
        fetch(fetchURL).
        then(res=>res.json()).
        then(data=>{
            const urls = [];
            for(let i=0;i<3;i++){
                urls.push(data.data[i].images.original.url)
            } ;
            this.setState({
                gifUrls:urls
            })
        })
    }

    render(){
        return(
            <div>
                <GifList gifUrls={this.state.gifUrls}/>
                <GifSearch fetchGifs={this.fetchGifs}/>
            </div>
        )
    }

}

export default GifListContainer