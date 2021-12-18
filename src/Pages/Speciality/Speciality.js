import React from 'react';
import Footer from "../../Components/Shared/Footer/Footer"
const Background="https://i.ibb.co/5YvGT0S/specility-banner.png"
const Speciality = () => {
    return (
        <div>
            <div className='h-fit'>
                <img className='w-screen h-96' src="https://i.ibb.co/5YvGT0S/specility-banner.png" alt="" />
            </div>
            <div className='container mx-auto'>
                <h2 className='text-3xl font-bold text-center my-6'>Why Will You Choose US? </h2>
                <div className='grid grid-cols-3 gap-6 my-4'>
                    <div className='flex items-center justify-end'>
                        <h3 className='font-bold text-lg'> <span className='text-4xl'>1.</span> Our Ground Buid History</h3>
                    </div>
                    <div className='col-span-2'>
                        <p>
                            In 1990, Crista Cron from America asked this question. She was aware that it was hard to find a babysitter or nanny who was good at their job. In those days, the internet was very early and there were no websites where you could do a search for someone who might be good at their job as a babysitter or nanny. So she decided to create Babysitter Service Hottingen on her own as a volunteer.
                        </p>
                        <p>
                            To her, as a mother, it was important to know that the nanny would do their job in a professional way. Crista Cron developed her own way of finding the right nanny and to make sure that they would be confident and loving. She personally interviewed all nannies during an introductory session. This is why our nannies are at the heart of care 4 kids. The quality of care 4 kids is shown in our success story going back many years and through references from hundreds of satisfied nannies and families.
                        </p>
                    </div>
                </div>
                <hr />
                <div className='grid grid-cols-3 gap-6 my-4'>
                    <div className='flex items-center justify-end'>
                        <h3 className='font-bold text-lg'> <span className='text-4xl'>2.</span> Our philosophy</h3>
                    </div>
                    <div className='col-span-2'>
                        <p>
                            Care 4 kids has a goal of finding each client and family and nanny a solution that meets everyone's needs. Our comprehensive service packages make it possible for fast, uncomplicated, and tailor-fit childcare when you need it. Thanks to our unique and very personal business model, our Nanny resource pool is constantly growing with nannies who are well trained, advised, and prepared. We enjoy an exceptional reputation (and) offer an attractive and versatile service. Our dedication to maintaining our reputation has remained unchanged since we were started long ago
                        </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Speciality;