import React from 'react'
import { Link } from 'react-router-dom'

const story = ({title,image}) => 
<div className="column">
    <div className="content">
        <div className="storyimg" style={{backgroundImage:`url(/`+image+`)`}}></div>
        <h5>{title}</h5>
        <Link to={`/story/`+title} id="c">Read</Link>
    </div>
</div>

export default story