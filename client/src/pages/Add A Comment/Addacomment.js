
import React from 'react'
import Page from '../../Components/header_navbar_without_search.js'
import Form from '../../Components/comment_form.js'
export default () =>
<Page title="Add Your Comment" mainClassName="addyourcomment" headerImage="images/happyfamily.png">
    <h1>Add A Comment</h1>
    <h2> We like to improve our website continuesly, so we are interested in your opinion in our website.<br/>Add your comment down please .</h2> 
    <div className="row">
        <div className="column">
        <br/>
        <Form/> 
        </div>
         <div className="column">
         <div className="img1">
            </div>
 
    </div> 
    </div> 
 </Page>
    