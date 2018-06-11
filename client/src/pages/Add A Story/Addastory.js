import React from 'react'
import './Addastory.css'
import Page from '../../Components/header_navbar_without_search.js'
import axios from 'axios';
import qs from 'qs';


export default class Test extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            message: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }


    async handleSubmit(e) {
        e.preventDefault()
        
        alert('Your story has been submitted Dear ' + this.state.name)
        
        const myData = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        console.log(myData)
        console.log(qs.stringify(myData))
        
        await axios.post('http://localhost:3001/api/form', qs.stringify(myData))
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error.response)
            })
            .then(
            this.setState({
                name: '',
                email: '',
                message: ''
            })
            )

    }


    render() {
        return (
            <Page title="Add a Story" mainClassName="add" headerImage="images/happyfamily.png">
                <h2>Add A Story</h2>
                <h4> If you have a new children's story about any value you like to share it with us, you can send it and we will publish it in our website</h4>
                <div className="row">
                    <div className="column">
                        <form onSubmit={this.handleSubmit}>
                            <label id="info">Full Name</label> <br />
                            <input type="text" placeholder="Name" id="info1" name='name' onChange={this.handleChange} value={this.state.name} /><br />

                            <label id="info">Your Email</label> <br />
                            <input type="text" placeholder="Email" id="info1" name='email' onChange={this.handleChange} value={this.state.email} /><br />

                            <label id="info">Your story</label> <br />
                            <textarea type="text" placeholder="Write your Story...." id="area" name='message' onChange={this.handleChange} value={this.state.message}></textarea><br /><br />
                            <input id="c" type='submit' value='Submit' />
                        </form>
                    </div>
                    <div className="column">
                        <div className="addastory">
                        </div>
                    </div>
                </div>
            </Page>
        )
    }
}