import React, { useEffect, useState } from 'react';

import "./Bookmarks.css"

const Bookmarks = (props) => {

    const bookmarks = props.bookmarks;
    const blogs = props.blogs;

    // get bookmarked blog
    const [bookmarkedBlog, setBookmarkedBlog] = useState([])
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
                <h3>Bookmarks: {!bookmarks ? 0 : bookmarks.length}</h3>
            </div>
            <hr className='bookmark-hr'/>
            <div className='bookmark-container'>
                {
                    bookmarkedBlog.map(title => <p className='bookmark-title'>{title}</p>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;