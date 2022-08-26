import React from "react";
import './Post.css';

const icons = {
    like: require('../../../../reacttttt/src/Post/img/love.png'),
    comments: require('../../../../reacttttt/src/Post/img/free-icon-repost-5685277.png'),
    retweet: require('../../../../reacttttt/src/Post/img/free-icon-bubble-chat-5167069.png'),
    share: require('../../../../reacttttt/src/Post/img/download.png'),
    dot: require('../../../../reacttttt/src/Post/img/ellipsis.png'),
    accept: require('../../../../reacttttt/src/Post/img/free-icon-checkmark-outline-54346.png'),
};

const Post = ({author, content, image, date }) => {
    return (
        <div class="container">
            <div class="post">
                <div class="head">
                    <img class="photo" src={author.photo} alt="author" />
                    <div class="headText">
                        <p class="nameAuthor">{author.name}</p>
                        <img class="ico" src={icons.accept} alt="icons_accept" />
                        <span class="nickname">{author.nickname}</span>
                        <img class="dot" src={icons.dot} alt="icons_dot" />
                        <span class="date">{date}</span>
                    </div>
                    <span class="text">{content}</span>
                </div>
                <div class="main">
                    <img class="contentImage" src={image} alt="content" />
                </div>
                <div class="footer">
                 <span class="like">
                    <img class="like" src={icons.like} alt="icons_like" />
                    1111
                 </span>
                    <span class="comments">
                    <img class="comments" src={icons.comments} alt="icons_comments" />
                    34222
                 </span>
                    <span class="retwit">
                    <img class="retwit" src={icons.retweet} alt="icons_retweet" />
                    789333
                 </span>
                    <span class="share">
                    <img class="share" src={icons.share} alt="icons_share" />
                    2344444
                 </span>
                </div>
            </div>
        </div>
    );
}

export default Post;