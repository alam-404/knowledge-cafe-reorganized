import React, { useEffect, useState } from 'react';

import Bookmark from '../Bookmark/Bookmark';

import "./Bookmarks.css"

const Bookmarks = (props) => {

    const bookmarks = props.bookmarks;
    const blogs = props.blogs;

    // set default length and get bookmarked blog
    const [length, setLength] = useState(0);
    const [bookmarkedBlog, setBookmarkedBlog] = useState([])
    useEffect(()=>{
        if(!bookmarks){
            setLength(0);
        }else{
            setLength(bookmarks.length);
        }
    }, [bookmarks])

    useEffect(()=>{
        if(bookmarks){
            // find bookmarked blog
            let foundBlogs = [...bookmarkedBlog];
            for (const id of bookmarks) {
                const foundBlog = blogs.find(blog => blog.id == id);
                if (foundBlog){
                    if (!foundBlogs.includes(foundBlog.title)){
                        foundBlogs.push(foundBlog.title);
                        setBookmarkedBlog(foundBlogs);
                    }
                }
            }
        }
    }, [blogs, bookmarks])

    return (
        <div>
            <div className="bookmark-counter">
                <h3>Bookmarks: {length}</h3>
            </div>
            <hr className='bookmark-hr'/>
            <div className='bookmark-container'>
                {
                    bookmarkedBlog.map(title => <Bookmark key={Math.random()} title={title}></Bookmark>)
                }
                {/* <Bookmark title={JSON.stringify(bookmarkedBlog)}></Bookmark> */}
            </div>
        </div>
    );
};

export default Bookmarks;