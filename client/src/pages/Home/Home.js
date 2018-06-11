import React from 'react'
import './Home.css'
import Page from '../../Components/header_navbar_with_search.js'
import { Link } from 'react-router-dom'

const create_value = (image,link,name,text) => 
{ return {
   image, 
   link, 
   name,
   text,
   key:link
    }
}

const values = [
  create_value('bravery.png','/Bravery', 'Bravery', 'Teach your child to be Brave by telling him/her the best stories and video stories about Bravery.'),
  create_value('cooperation.png','/Cooperation', 'Cooperation', 'Teach your child to be cooperative by telling him/her the best stories and video stories about Cooperation.'),
  create_value('generosity.png','/Generosity', 'Generosity', 'Teach your child to be  Generous by telling him/her the best stories and video stories about Generosity.'),
  create_value('humility.png','/Humility', 'Humility', 'Teach your child to be Humble by telling him/her the best stories and video stories about Humility.'),
  create_value('obedience.png','/Obedience', 'Obedience', 'Teach your child to be Obedient by telling him/her the best stories and video stories about Obedience.'),
  create_value('respect.png','/Respect', 'Respect', 'Teach your child to Respect others by telling him/her the best stories and video stories about Respect.'),
  create_value('sharing.png','/Sharing', 'Sharing', 'Teach your child to  share others by telling him/her the best stories and video stories about Sharing.'),
  create_value('tolerance.png','/Tolerance', 'Tolerance', 'Teach your child to be tolerant by telling him/her the best stories and video stories about Tolerance.'),
].map(
    (value) => {
      const { name } = value
      const key = [name].join(' ')
      value.key = key;
      value.id = key;
      return value
    })

const Value = ({ image, link, name, text }) => (
    <div className="column">
        <div className="content">
            <div className="img" style={{backgroundImage:`url("/images/home/${image}")`}}></div>
            <Link to={`Category/`+name} id="a">{name} Stories</Link>
            <h3>{name}</h3>
            <h3>{text}</h3>
        </div>
    </div>
)

// const renderValue = value => <Value {...value}/>

// // const search = (filter) => {
// //     const rendered = values.filter((value)=>value.name===filter).map(renderValue) 
//     if(!rendered.length){
//         return <div>No results for {filter}...</div>
//     }
//     return rendered
// }
//{match}
export class Home extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            search:''
        }
    }
    onChange = (evt) => {
        console.log(evt.target.value)
        this.setState({search:evt.target.value})
      }
      filterValues(){
        const search = this.state.search.trim();
        if(!search){ return values }
        const regex = new RegExp(search,'i');
        return values.filter(value => regex.test(value.key) )
      }
    
    render(){
        //const filter = this.props.match.params.search
        const filteredValues = this.filterValues()
        // console.log('dsfdsfsd',filter)
        return(

            <Page search={this.state.search} onChange={this.onChange} title="home" mainClassName="home" headerImage="images/happyfamily.png">
                <h4>Teaching your children moral values is the process by which you help them develop their moral compasses. The morals your children learn as kids will affect how they see the world and behave as adults. While it may seem impossible to explain the importance of honesty or compassion to a child, showing your children how good morals affect others by telling them stories can have a great influence on them. As a parent, it's your duty to teach morals to children to help transform them into functional adults in society.</h4>
                <h4> Do you want to teach your children values? Below, you will find stories to teach them about many values...</h4>
                <div className="row">
                {/* <h1>{filter}</h1> */}
                {  filteredValues.map(value => <Value {...value} /> )}
                </div>
            </Page>
            
        )
    }
    
}

export default Home