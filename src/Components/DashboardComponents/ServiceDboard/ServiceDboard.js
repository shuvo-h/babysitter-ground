import React from 'react';
import { updateDeleteSservice } from '../../../redux/slices/dashboardSlice';

const ServiceDboard = ({service, dispathch}) => {
    const {service_Price, service_img, service_str, service_title, _id} = service;
   
    const handleServiceDelete = (id) =>{
        fetch(`https://sheltered-temple-15299.herokuapp.com/service/${id}`,{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(data=>{
                if (data.deletedCount > 0) {
                    alert("Service is deleted successfully!");
                    dispathch(updateDeleteSservice(id))
                    window.location.reload();
                }
            })
    }
    return (
        <tr className='border-b border-black-500'>
            <td>{service_title}</td>
            <td>{service_Price}</td>
            <td>{service_str.slice(0,30)}......total:{service_str.split(" ").length} words</td>
            <td><img className='block mx-auto rounded' src={service_img} width="50px" height="50px" alt="" /></td>
            <td><button className='bg-red-400 rounded font-bold px-2 py-1 hover:text-red-900 text-white' onClick={()=>handleServiceDelete(_id)}>Delete</button></td>
        </tr>
    );
};

export default ServiceDboard;