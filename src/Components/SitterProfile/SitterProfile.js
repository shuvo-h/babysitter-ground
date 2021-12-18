import React from 'react';

const SitterProfile = ({sitter}) => {
    const {name, photoURL, extraInfo} = sitter;
    const {about, expected_salary, experience, working_time} = extraInfo || {}
    return (
        <div className='my-6 p-2 grid grid-cols-1 md:grid-cols-5 md:text-left shadow rounded-md'>
            <div className=''>
                <img className='block mx-auto rounded' src={photoURL} width="200px" height="200px" alt="" />
            </div>
            <div>
                <h3 className='font-semibold text-lg'>{name}</h3>
                <p className='font-bold text-xl text-purple-600'>${expected_salary}/hour</p>
                <p>{experience} years of experience</p>
                <p>I can care your baby from</p>
                <p className='font-bold'>{working_time}</p>
            </div>
            <div className='md:col-span-3'>
                <p className='font-bold text-lg'>About Me:</p>
                <p>{about}</p>
            </div>
        </div>
    );
};

export default SitterProfile;