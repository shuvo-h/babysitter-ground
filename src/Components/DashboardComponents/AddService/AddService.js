import React, { useState } from 'react';

const ServInputStyle = 'border-2 border-yellow-400 md:w-72 lg:w-96 p-1 rounded';
const ServBtnStyle = "bg-blue-200 px-4 py-2 rounded font-bold text-blue-700 hover:bg-blue-300"


const AddService = () => {
    const [newServiceInfo,setNewServiceInfo] = useState();
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...newServiceInfo}
        newInfo[field] = value;
        setNewServiceInfo(newInfo);
    }
    const handleRegHandle = e =>{
        console.log(newServiceInfo);
        fetch("https://sheltered-temple-15299.herokuapp.com/services",{
            method:"POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(newServiceInfo)
        })
            .then(res=>res.json())
            .then(data=>{
                if (data.insertedId) {
                    alert("Service Added successfully.")
                }
            })

        e.preventDefault();
    }

    return (
        <div className='text-center'>
            <p className='py-4 font-bold text-2xl'>Write the details of a new service</p>
            <div className='p-2'>
                <form className='flex flex-col' onSubmit={handleRegHandle}> 
                    <div className='my-1'><input className={ServInputStyle} onBlur={handleOnBlur} type="text" id="service_title" name="service_title" placeholder='Service title' /></div>
                    <div className='my-1'><input className={ServInputStyle} onBlur={handleOnBlur} type="number" id="service_Price" name="service_Price" placeholder='Service Price'/></div>
                    <div className='my-1'><input className={ServInputStyle} onBlur={handleOnBlur} type="text" id="service_str" name="service_str" placeholder='Service description' /></div>
                    <div className='my-1'><input className={ServInputStyle} onBlur={handleOnBlur} type="text" id="service_img" name="service_img" placeholder="Service Photo url"  /></div>
                    <div className='my-1'><button className={ServBtnStyle} type="submit">Add Service</button></div>
                </form>
            </div>
        </div>
    );
};

export default AddService;