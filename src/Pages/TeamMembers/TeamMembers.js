import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Member from '../../Components/Member/Member';
import { loadTeamMembers } from '../../redux/slices/teamMemberSlice';

const TeamMembers = () => {
    const dispatch = useDispatch();
    const allMembers = useSelector(state => (state.teamMembers.members[0]));
    
    useEffect(()=>{
        dispatch(loadTeamMembers())
    },[])
    return (
        <div className='container mx-auto text-center '>
            <h2 className='text-2xl font-bold my-6'>Our Team Members</h2>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    allMembers?.map(member=><Member member={member} key={member._id}></Member>)
                }
            </div>
        </div>
    );
};

export default TeamMembers;

