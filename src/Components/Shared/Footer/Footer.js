import React from 'react';

const Footer = () => {
    return (
            <div className='text-center bg-gray-700 text-white pt-4'>
                <div className='py-2'>
                    <h2 className='text-2xl '>BabySitter Ground</h2>
                    <p>12 Robinson Court, Inkster</p>
                    <p>mi - 48141</p>
                    <p>United States</p>
                </div>
                <div className='bg-gray-900 py-2'>
                    <p>Copyright {new Date().getFullYear()} &copy; All rights reserved</p>
                </div>
            </div>
    );
};

export default Footer;