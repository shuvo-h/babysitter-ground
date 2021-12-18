import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HashLoader from 'react-spinners/HashLoader';
import Service from '../../Components/Services/Service/Service';
import { loadAllServices } from '../../redux/slices/serviceSlice';

const AllServices = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadAllServices())
    }, [])

    const services = useSelector(state=>(state.services.allService[0]))
    const servicesLoading = useSelector(state=>(state.services.loadingStatus))

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

export default AllServices;