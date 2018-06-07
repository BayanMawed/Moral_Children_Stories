import React from 'react'


const video = ({title,writer,youtubeId}) =>
<div className="column">
    <div className="content">
        <div>
            <iframe width="100%" height="315"
            title={title}
            src={"https://www.youtube.com/embed/"+youtubeId} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
            </iframe>
        </div>
        <h5>{title}</h5>
        <p>{writer}</p>
    </div>
</div>

export default video