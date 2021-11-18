import React from "react";

function LearnItem ({learnItem}) {
    return(
    <div className="container">
        <div className="blog-post">
            <div className="blog-post_img">
                <img src={learnItem.image} alt="hey"/>
            </div>
            <div className="blog-post_info">
                <div className="blog-post_date">
                    <span>{learnItem.postername}</span>
                    <span>Nov 12 2021</span>
                </div>
                <h1 className="blog-post_title">{learnItem.name}</h1>
                <p className="blog-post_text">{learnItem.description}</p>
                <a href={learnItem.url} className="blog-post_cta" target="_blank" rel="noreferrer">Read More</a>
            </div>
        </div>
    </div>
    )
}

export default LearnItem;
