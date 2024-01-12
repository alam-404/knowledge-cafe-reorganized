import React, { useEffect, useState } from 'react';

import TimeSpend from '../TimeSpend/TimeSpend';
import Bookmarks from '../Bookmarks/Bookmarks';
import Blog from "../Blog/Blog";

import "./MainContainer.css"

import { getData, preloadData, setData } from '../../utils/database';

const MainContainer = () => {

    // pre set data to local storage 
    useEffect(()=>{
        // store total read time
        preloadData('time_read', 0);
        // store bookmarks
        preloadData('bookmarks','[]');
    },[])

    // Load blogs data
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, [])

    // count up read time
    const [readTime, setReadTime]= useState(getData('time_read'));
    const markAsRead = (time) => {
        const oldData = getData('time_read');
        let newData = oldData + time;
        setData('time_read', newData);
        setReadTime(newData);
    }

    // add bookmark
    const [bookmarks, setBookmarks] = useState(getData('bookmarks'));
    const bookmarkHandler = (id)=>{
        const oldData = getData('bookmarks');
        if (!oldData.includes(id)){
            let newData = [...oldData];
            newData.push(id);
            setData('bookmarks', newData);
            setBookmarks(newData);
        }
    }

    return (
        <>
            <section className='blogs-section'>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} readBtnHandler={markAsRead} bookmarkHandler={bookmarkHandler}></Blog>)
                }
            </section>
            <section className='bookmarks-section'>
                <div>
                    <TimeSpend readTime={readTime}></TimeSpend>
                </div>
                <div className='bookmarks-container'>
                    <Bookmarks bookmarks={bookmarks} blogs={blogs}></Bookmarks>
                </div>
            </section>
        </>
    );
};

export default MainContainer;