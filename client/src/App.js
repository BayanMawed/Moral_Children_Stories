import React, { Component } from 'react';
import './App.css'
import Home from './pages/Home/Home'
import StoryPage from './Components/story_Dbpage.js'
import Pageparts from './Components/category_Dbpage'
import Addacomment from './pages/Add A Comment/Addacomment'
import Addastory from './pages/Add A Story/Addastory'
import Ouraim from './pages/Our Aim/Our Aim'
import Contactus from './pages/Contact Us/Contact Us'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home}/>
          <Route path="/home/:search?" component={Home}/>    
          <Route path="/story/:title" component={StoryPage}/>
          <Route path="/Category/:name" component={Pageparts}/> 
          {/* <Route path="/Category/Bravery" component={Pageparts}/>
          <Route path="/Category/Cooperation" component={Pageparts}/>
          <Route path="/Category/Generosity" component={Pageparts}/>
          <Route path="/Category/Humility" component={Pageparts}/>
          <Route path="/Category/Obedience" component={Pageparts}/>
          <Route path="/Category/Respect" component={Pageparts}/>
          <Route path="/Category/Sharing" component={Pageparts}/>
          <Route path="/Category/Tolerance" component={Pageparts}/> */}
          <Route path="/Addacomment" component={Addacomment}/>
          <Route path="/Addastory" component={Addastory}/>
          <Route path="/Our Aim" component={Ouraim}/>
          <Route path="/Contact Us" component={Contactus}/>
          <h4> Have A Happy Time With Our Stories</h4> 
        </div>
      </Router>
    );
  }
}

export default App;
