import React from 'react'
import Pageparts from './category_page'
import { setTimeout } from 'timers';

export default class Page extends React.Component{
    state = {
        name:'',
        description: '',
        title:  '',
        headerImage: '',
        videosList:[],
        storiesList:[],
        error:false,
        loading:true
    }
    getOne(url){
        this.setState({name:url, loading:true})
        const path = 'http://localhost:3075/Category/'+url
        
        fetch(path)
            .then( response => response.json() )
            .then( json => {
                if(json.error){ 
                    this.setState({error:json.message, loading:false})
                    return;
                }
                const newState = {...json.data, loading:false}
                setTimeout(
                    ()=>
                    this.setState(newState)
                ,500)
            })
    }
    componentDidMount(){
        this.load()
    }
    componentDidUpdate(){
        this.load()
    }
    load(){
        const name = this.props.match.params.name
        if(name && this.state.name !== name){
            this.getOne(name)
        }
    }
    render(){
       
        if(this.state.error){
            return <div>{this.state.error}</div>
        }
        if(this.state.loading){
            return  <div className="imageloading" style={{backgroundImage:`url("/images/loading.gif")`}}></div>
        }
       
        return <Pageparts {...this.state}  />
    }
}
// render(){
    
//      if(this.state.error){
//          return <div>{this.state.error}</div>
//      }
//      return <Pageparts {...this.state} loading={this.state.loading} error={this.state.error}/>
//  }
// }
