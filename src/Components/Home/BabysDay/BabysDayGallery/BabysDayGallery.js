import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBabysDay } from '../../../../redux/slices/babysDaySlice';
import HashLoader from 'react-spinners/HashLoader';
import BabyCarosoul from './BabyCarosoul';


const BabysDayGallery = () => {
        const dispatch = useDispatch();
        useEffect(()=>{
                dispatch(loadBabysDay())
        },[])
        const AllImagesLoading = useSelector((state)=>(state.babysDayOut.loadingStatus))
        const AllImgRejectedMsg = useSelector((state)=>(state.babysDayOut.rejectedMessage))
        if (AllImgRejectedMsg) {
                return <h1>{AllImgRejectedMsg}</h1>
        }

    return (
        <div className='container mx-auto my-12'>
            <h1 className='my-6 text-center text-3xl font-bold'>Our Bay's Day in Picture</h1>
            {
                    AllImagesLoading ? <div className='w-2 h-2 mx-auto mt-16'>
                                        <div className="sweet-loading ">
                                                <HashLoader loading={AllImagesLoading} size='80' color='#559900'/>
                                        </div>  
                                </div>
                        : <>
                                <div>
                                        <img className='float-left mr-4 mb-4' height="350px" width="350px" src="https://ochomeandfamily.com/wp-content/uploads/2019/12/OC-Home-Family_Difference-Between-a-Nanny-and-a-Babysitter-A-Guide_IMAGE1.jpeg" alt="" />
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, quidem modi iste error officia cumque, debitis culpa repellat aspernatur sunt laborum magni possimus nemo recusandae illo. Tenetur aspernatur modi sit at repudiandae, ipsa dolore harum unde impedit maiores quasi fugit asperiores delectus vel adipisci repellat omnis consequatur qui deleniti voluptas perferendis neque. Dolore harum voluptates in quia repudiandae aliquam doloribus aspernatur quis excepturi temporibus sequi sint voluptate ullam et doloremque, a adipisci modi, porro asperiores odio ad optio? Est amet, voluptates architecto animi, ipsum, rerum suscipit optio nostrum voluptatibus harum eius molestiae obcaecati! Quo quas consectetur perspiciatis rerum minus ipsa laboriosam aspernatur tenetur sapiente, dignissimos porro nihil ut praesentium velit. Ab, mollitia tempore odit delectus aperiam temporibus illum alias id modi ducimus iusto in numquam et ex, corrupti possimus nisi officia perferendis! Doloremque in quia nostrum cupiditate sed eligendi veniam assumenda eum? Repellat voluptate rem ad eveniet quos praesentium necessitatibus, odio soluta, non quaerat fugit vero modi tempore dolores. Quo officia eligendi quam ad error at id reiciendis temporibus libero dicta? Possimus incidunt ducimus voluptatem aliquid obcaecati laudantium consequatur officia! Qui a libero corrupti explicabo, repellendus fugiat cumque quae quod natus accusamus optio provident ex distinctio, maxime quas maiores reiciendis? Sed amet voluptas nostrum dolore ratione quod deleniti doloribus expedita iusto temporibus minus exercitationem provident recusandae, quasi voluptatibus quas iste distinctio necessitatibus quaerat ea, blanditiis commodi accusantium? Quisquam, qui omnis! Ipsa, aliquam vero. Quibusdam, sapiente iure! Ipsa omnis tempora dignissimos cumque rerum debitis sed, eligendi sunt maxime quam ipsam facilis suscipit molestias quibusdam similique nulla eaque culpa rem deleniti deserunt, totam temporibus. Modi inventore necessitatibus iusto saepe, illo voluptas ad voluptates quibusdam nobis dolorum nam temporibus sit nihil accusantium obcaecati recusandae voluptate porro dolores facere maiores repellendus vero aspernatur! Tenetur quasi illum asperiores molestias nihil nemo aliquid sapiente, ea alias?</p>
                                </div>
                                <div className='my-6'>
                                        <BabyCarosoul></BabyCarosoul>
                                </div>
                        
                        </>
            }
            
        </div>
    );
};

export default BabysDayGallery;