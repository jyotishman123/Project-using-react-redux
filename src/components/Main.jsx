import React from 'react';
import Leftnav from './Leftnav';
import MiddleComp from './MiddleComp';
import Rightnav from './Rightnav';
import Bottomheading from './Bottomheading';
import ImageGallary from './ImageGallary';

export default function Main() {
  return (
    <> 
    <div className='d-flex  flex-column  flex-xl-row justify-content-around  align-items-center align-items-xl-start m-auto flex-wrap border p-3'>
    <Leftnav/>
    <MiddleComp/>
    <Rightnav/>
    </div>
    <div className='border-top border-bottom m-5 p-2'></div>
     <div className='m-5'>
     <Bottomheading/>
     <ImageGallary/>
     </div>
    </>
  )
}
