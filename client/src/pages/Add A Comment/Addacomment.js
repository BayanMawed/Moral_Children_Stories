
import React from 'react'
import Page from '../../Components/header_navbar_without_search.js'
import Comment from '../../Components/comment_form.js'
export default () =>
<Page title="Add Your Comment" mainClassName="addyourcomment" headerImage="images/happyfamily.png">
    <h2>Add A Comment</h2>
    <h4> We like to improve our website continuesly, so we are interested in your opinion in our website.<br/>Add your comment down please .</h4> 
    <div className="row">
        <div className="column">
        <br/>
        <Comment/> 
        </div>
         <div className="column">
         <div className="addacomment">
            </div>
 
    </div> 
    </div> 
 </Page>