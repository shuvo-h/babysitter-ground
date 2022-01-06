import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/blogs")
        .then(res=>res.json())
        .then(data=>{
            const reverseData = data.reverse()
            setBlogs(reverseData)
        })
    },[])
    return (
        <div  style={{margin:"2% 10%"}}>
            <h2 style={{textAlign:"center", fontWeight:"700", fontSize:"30px"}}>Our Baby sitter blogs</h2>
            <button style={{margin:"auto", display:"block", marginBottom:"15px", marginTop:"8px"}}><NavLink to="/blogs/add" style={{backgroundColor:"rgba(0,0,225,0.4)", padding:"5px 12px", borderRadius:"6px"}}>+ Add Blog</NavLink></button>
            <div>
                {
                    blogs.map((blog,index) =><div className="post_list" key={index} style={{ marginBottom:"25px"}}>
                    <h2 style={{fontSize:"30px", fontWeight:"700"}}><span style={{color:"blue", border:"2px solid blue", width:"20px"}}>{index +1}</span>{blog.title}</h2>
                    <div className="post_description" dangerouslySetInnerHTML={{__html:blog.description}}></div>
                </div>)
                }
            </div>
        </div>
    );
};

export default Blogs;