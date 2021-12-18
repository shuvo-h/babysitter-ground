import React from 'react';
import { updateDeleteSitter } from '../../../redux/slices/dashboardSlice';

const Sitter = ({sitter, dispathch}) => {
    const {email, name, payment, photoURL, _id} = sitter;
   
    const handleParentDelete = (id) =>{
        fetch(`http://localhost:5000/sitters/${id}`,{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(data=>{
                if (data.deletedCount > 0) {
                    alert("Parent is deleted successfully!");
                    dispathch(updateDeleteSitter(id))
                }
            })
    }
    return (
        <tr className='border-b border-black-500'>
            <td>{name}</td>
            <td>{email}</td>
            <td>{payment ? payment : "Pending"}</td>
            <td><img className='block mx-auto rounded' src={photoURL} width="50px" height="50px" alt="" /></td>
            <td><button className='bg-red-400 rounded font-bold px-2 py-1 hover:text-red-900 text-white' onClick={()=>handleParentDelete(_id)}>Delete</button></td>
        </tr>
    );
};

export default Sitter;