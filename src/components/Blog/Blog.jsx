// import React from 'react';
import { useState, useEffect } from "react";
import "./Blog.css"
import Author from "../Author/Author";

const Blog = (props) => {

    const {blog} = props;
    const markAsRead = props.readBtnHandler;
    const bookmarkHandler = props.bookmarkHandler;

    return (
        <div>
            <div className="blog">
                <div className="blog-image">
                    <img loading="lazy" src={blog.image}/>
                </div>
                <div className="author-section">
                    <Author blogData={blog} bookmarkHandler={bookmarkHandler}></Author>
                </div>
                <div className="blog-content-section">
                    <h5 className="blog-title">{blog.title}</h5>
                    <p className="blog-content">{blog.content.slice(0, 150)}... <a className="see-more" href="">see more</a></p>
                    <p className="hash-tags">{blog.hash_tags}</p>
                </div>
                <div>
                    <button className="mark-btn" onClick={()=>markAsRead(blog.time_to_read)}>Mark as read</button>
                </div>
                
            </div>
            <hr className="blog-end-line"/>
        </div>
    );
};

export default Blog;