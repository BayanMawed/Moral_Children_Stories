import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

const Page = ({title,mainClassName,headerImage,children,onChange,search}) =>
    <div className={mainClassName}>
        <Helmet>
            <title>{title} |Stories That Matter</title>
            <html className={mainClassName+'-page'}/>
        </Helmet>
        <h1>Stories That Matter</h1>
        <div className="header" style={{backgroundImage:`url("/`+headerImage+`")`}}></div>
        <div className="navbar">
            <Link to="/" id="b">Home</Link>
            <div className="dropdown">
                <button className="dropbtn">Values Stories</button>
                <div className="dropdown-content">
                <Link to="/Category/Bravery" id="b1">Bravery Stories</Link>
                <Link to="/Category/Cooperation" id="b1">Cooperation Stories</Link>
                <Link to="/Category/Generosity" id="b1">Generosity Stories</Link>
                <Link to="/Category/Humility" id="b1">Humility Stories</Link>
                <Link to="/Category/Obedience" id="b1">Obedience Stories</Link>
                <Link to="/Category/Respect" id="b1">Respect Stories</Link>
                <Link to="/Category/Sharing" id="b1">Sharing Stories</Link>
                <Link to="/Category/Tolerance" id="b1">Tolerance Stories</Link>
                </div> 
             </div>
            <Link to="/Addacomment" id="b">Add A Comment</Link> 
            <Link to="/Addastory" id="b">Add A Story</Link>
            <Link to="/Our Aim" id="b">Our Aim</Link>
            <Link to="/Contact Us" id="b2">Contact Us</Link>
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