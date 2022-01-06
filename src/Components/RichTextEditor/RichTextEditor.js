import React, { useState } from 'react';
import draftToHtml from 'draftjs-to-html';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw} from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useNavigate } from 'react-router-dom';

const RichTextEditor = () => {
    const [blogInfo,setBlogInfo] = useState({title:""});
    const navigate = useNavigate()
    const onChange = (e) =>setBlogInfo({...blogInfo,[e.target.name]:e.target.value})

    // Editor state change 
    const editorState = EditorState.createEmpty();
    const [description, setDescription]= useState(editorState);
    const onEditorStateChange = editorState => setDescription(editorState);

    // save data to server 
    const [isError,setIsError] = useState(null);
    const addDetails = async(e) =>{
        console.log("sending data");
        try{
            e.preventDefault();
            e.persist();
            if (blogInfo.description.value.length < 50) {
                setIsError("Required minimum 50 words description");
                return;
            }
            fetch("http://localhost:5000/addBlog",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({title:blogInfo.title, description:blogInfo.description.value})
            })
            .then(res=>res.json())
            .then(data=>{
                if (data.insertedId) {
                    alert("Blog posted successfully!")
                }
            })
            // axios.post("http://localhost:5000/addArticle",{
            //     title: blogInfo.title,
            //     description: blogInfo.description.value
            // })
            // .then(res=>{
            //     console.log(res.data.insertedId);
            //     if (res.data.insertedId) {
            //         alert("Data saved successful");
            //         navigate("/");
            //     }
            // })
        }catch{}
    }


    return (
        <div>
            <h2>Write Your Blog Here</h2>
            <form onSubmit={addDetails}>
                <p>Title</p>
                <input value={blogInfo.title} onChange={onChange} type="text" name='title' placeholder='Write the blog title'/>

                <p>Description</p>
                <Editor
                    editorStyle={{border:"1px solid white", padding:"10px", margin:"10px"}}
                    editorState={description}
                    onEditorStateChange={onEditorStateChange}
                />
                <textarea  style={{display:'none'}} disabled ref={(val) => blogInfo.description = val} value={draftToHtml(convertToRaw(description.getCurrentContent())) }></textarea>
                {
                    isError && <p style={{color:"red"}}>{isError}</p>
                }
                    <button type="submit">Post blog</button>
            </form>
        </div>
    );
};

export default RichTextEditor;