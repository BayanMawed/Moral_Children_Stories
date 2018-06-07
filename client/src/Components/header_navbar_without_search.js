import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

const Page = ({title,mainClassName,headerImage,children,onChange,search}) =>
    <div className={mainClassName}>
        <Helmet>
            <title>{title} |Moral Children's Stories</title>
            <html className={mainClassName+'-page'}/>
        </Helmet>
        <h1>MORAL <br />  CHILDREN'S <br />  STORIES</h1>
        <div className="header" style={{backgroundImage:`url("/`+headerImage+`")`}}></div>
        <div className="navbar">
            <Link to="/" id="b">Home</Link>
            <div className="dropdown">
                <button className="dropbtn">Values Stories
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                <Link to="/Category/Bravery" id="b">Bravery Stories</Link>
                <Link to="/Category/Cooperation" id="b">Cooperation Stories</Link>
                <Link to="/Category/Generosity" id="b">Generosity Stories</Link>
                <Link to="/Category/Humility" id="b">Humility Stories</Link>
                <Link to="/Category/Obedience" id="b">Obedience Stories</Link>
                <Link to="/Category/Respect" id="b">Respect Stories</Link>
                <Link to="/Category/Sharing" id="b">Sharing Stories</Link>
                <Link to="/Category/Tolerance" id="b">Tolerance Stories</Link>
                </div> 
             </div>
            <Link to="/Addacomment" id="b">Add A Comment</Link> 
            <Link to="/Addastory" id="b">Add A Story</Link>
            <Link to="/Our Aim" id="b">Our Aim</Link>
            <Link to="/Contact Us" id="b">Contact Us</Link>
            {/* <form >
                <input type="text" placeholder="Search..." className="searchbar" value={search} onChange={onChange}/>
               
            </form>
             */}
        </div>
            
        <div className="main">
            {children}
        </div>
    </div>

export default Page