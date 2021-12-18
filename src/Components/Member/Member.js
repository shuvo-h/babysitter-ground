import React from 'react';


const Member = ({member}) => {
    console.log(member);
    const {Email, member_img, mob, name, roll, text, working_exp} = member;
    return (
        <div className="border rounded-lg p-4 shadow-lg">
            <div className='flex justify-center'>
                <img className='rounded-full' src={member_img} width="250px" alt="" />
            </div>
            <div>
                <div>
                    <h3><b>Name: {name}</b></h3>
                    <p>Email: <i>{Email}</i></p>
                    <p>Phone: <i>{mob}</i></p>
                    <p>{working_exp} years in baby care</p>
                    <p>{roll}, BabySitter Ground </p>
                    <p>12 Robinson Court, Inkster mi - 48141</p>
                </div>
                <div className='text-left'>
                    <p><b>My Speech</b></p>
                    <p>{text}</p>
                </div>

            </div>
        </div>
    );
};

export default Member;