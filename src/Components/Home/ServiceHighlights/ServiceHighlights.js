import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAllService, loadAllServices } from '../../../redux/slices/serviceSlice';
import Service from '../../Services/Service/Service';

import HashLoader from 'react-spinners/HashLoader';


const ServiceHighlights = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadAllServices())
    }, [])

    const services = useSelector(state=>(state.services.allService[0]))
    const servicesLoading = useSelector(state=>(state.services.loadingStatus))
    const servicesLoadError = useSelector(state=>(state.services.rejectedMessage))
    
    if (servicesLoadError) {
        return <h1>{servicesLoadError}</h1>
    }
    
    return (
        <div className='container mx-auto my-6'>
            <h1 className='text-xl md:text-3xl text-center font-bold'>Best Babysitter and Nanny Service</h1>
            {
                servicesLoading ? <div className='w-2 h-2 mx-auto mt-16'>
                        <div className="sweet-loading ">
                            <HashLoader loading={servicesLoading} size='80' color='#559900'/>
                        </div>  
                    </div>
                :   <div className='grid grid-cols-3 gap-x-4 mt-6'>
                        {
                            services?.map(service=><Service service={service} key={service.service_id}></Service>)
                        }
                    </div>
            }
        </div>
    );
};

export default ServiceHighlights;