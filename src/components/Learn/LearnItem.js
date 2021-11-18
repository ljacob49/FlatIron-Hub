import React from "react";

function LearnItem ({learnItem}) {
    return(
    <div class="container">
        <div class="blog-post">
            <div class="blog-post_img">
                <img src={learnItem.image} alt="hey"/>
            </div>
            <div class="blog-post_info">
                <div class="blog-post_date">
                    <span>{learnItem.postername}</span>
                    <span>Nov 12 2021</span>
                </div>
                <h1 class="blog-post_title">{learnItem.name}</h1>
                <p class="blog-post_text">{learnItem.description}</p>
                <a href="learnItem.URL" class="blog-post_cta">Read More</a>
            </div>
        </div>
    </div>
    )
}

export default LearnItem;
