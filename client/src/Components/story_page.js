import React from 'react'
import './story_page.css'
import Page from './header_navbar_without_search.js'
// import { Link } from 'react-router-dom'
import Form from './story_comment_form.js'

const StoryPage = ({loading,title,description,headerImage,image1,image2,image3}) =>
    <Page title={title}  mainClassName="storypage" headerImage={headerImage}>
        <h1 className="storyname">{title}</h1>  
        {/* {loading ?  <div className="imageloading" style={{backgroundImage:`url("/images/loading1.gif")`}}></div> : false } */}
        <div className="storyimage1" style={{backgroundImage:`url(/`+image1+`)`}}></div>        
        <div className="row">
            {/* <div className="column"> */}
            <div className="story">
                <h3>{description}</h3> 
                {/* </div> */}
            </div>
            {/* <div className="column"> */}
                {/* <div className="storyimage1" style={{backgroundImage:`url(images/`+image1+`)`}}></div>
                {/* <div className="storyimage2" style={{backgroundImage:`url(images/`+image2+`)`}}></div>
                <div className="storyimage3" style={{backgroundImage:`url(images/`+image3+`)`}}></div> */} 
            </div>
        {/* </div> */}
      <Form/>
    </Page>

export default StoryPage