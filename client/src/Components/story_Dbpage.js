import React from 'react'
import StoryPage from './story_page'

export default class Page extends React.Component{
    state = {
        story:{
            title:'',
            description:'',
            image1:'',
            headerImage:'',
        },
        error:false,
        loading:true
    }
    getOne(url){

        const path = 'http://localhost:3075/story/'+url
        
        fetch(path)
            .then( response => response.json() )
            .then( json => {
                if(json.error){ 
                    this.setState({error:json.message, loading:false})
                    return;
                }
                const story = json.data[0]
                // const newState=this.setState({story, loading:false })
                const newState={story, loading:false }
                setTimeout(
                    ()=>
                    this.setState(newState)
                ,500)
            })
    }
                
    
    componentDidMount(){
        this.getOne(this.props.match.params.title)
    }
    render(){
        if(this.state.loading){
            return  <div className="imageloading" style={{backgroundImage:`url("/images/loading.gif")`}}></div>
        }
        if(this.state.error){
            return <div>{this.state.error}</div>
        }
        const story = this.state.story
        return <StoryPage {...story}/>
    }
}