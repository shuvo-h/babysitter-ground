import React from 'react';
import { NavLink } from 'react-router-dom';

const WorkProcess = () => {
    return (
        <div className='container mx-auto text-center my-4'>
            <h2 className='font-bold text-3xl my-3'>5 Easy steps to Get a Sitter With Us</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-5'>
                <div className='shadow mx-1'>
                    <p className='text-xl'><span className='font-bold'>Step 1:</span> Select an sitters</p>
                    <img className='block mx-auto' src="https://i.ibb.co/HhxKtWh/select-sitter.png" width="200" alt="" />
                </div>
                <div className='shadow mx-1'>
                    <p className='text-xl'><span className='font-bold'>Step 2:</span> register and aggrement</p>
                    <img className='block mx-auto' src="https://i.ibb.co/p4s9QX5/agreement.png" width="200" alt="" />
                </div>
                <div className='shadow mx-1'>
                    <p className='text-xl'><span className='font-bold'>Step 3:</span> confirm payment</p>
                    <img className='block mx-auto' src="https://i.ibb.co/Lk5Mxwt/undraw-Credit-card-payments-re-qboh.png" width="200" alt="" />
                </div>
                <div className='shadow mx-1'>
                    <p className='text-xl'><span className='font-bold'>Step 4:</span> give baby</p>
                    <img className='block mx-auto' src="https://i.ibb.co/dB0xpQr/give-baby.png" width="200" alt="" />
                </div>
                <div className='shadow mx-1'>
                    <p className='text-xl'><span className='font-bold'>Step 5:</span> Observe through online</p>
                    <img className='block mx-auto' src="https://i.ibb.co/LJj00gc/on-Line-Trac.png" width="200" alt="" />
                </div>
            </div>
            <div className='my-6'>
                <NavLink className="bg-blue-200 px-3 py-1 rounded hover:bg-blue-400 font-bold" to="/registration">Get Sitter Now</NavLink>
            </div>
        </div>
    );
};

export default WorkProcess;