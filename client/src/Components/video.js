import React from 'react'


const video = ({title,name,writer,youtubeId}) =>
<div className="column">
    <div className="content">
        <div>
            <br/><br/><br/>
            <iframe width="100%" height="315"
            title={title}
            src={"https://www.youtube.com/embed/"+youtubeId} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
            </iframe>
        </div>
        <h3>{name}</h3>
        <p>{writer}</p>
    </div>
</div>

export default video