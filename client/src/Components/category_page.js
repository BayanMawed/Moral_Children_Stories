import React from 'react'
import StoryComponent from './story'
import Video from './video'
import Page from './header_navbar_without_search.js'

const Pageparts= ({loading,error,title,name,description,storiesList,videosList,headerImage}) =>
    <Page title={title}  mainClassName="parts" headerImage={headerImage}>
        {/* {loading ?  <div className="imageloading" style={{backgroundImage:`url("/images/loading1.gif")`}}></div> : false } */}
        {/* <h1>{title}</h1> */}
        <h2>{name}</h2>
        <h4>{description}</h4>
        <div className="row">
            { storiesList.map( story => <StoryComponent key={story.title} {...story}/>)}
             {/* <h3> Video Stories</h3> */}
            { videosList.map( video => <Video key={video.youtubeId} {...video}/>)}
        </div>
    </Page>

export default Pageparts