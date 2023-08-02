import React from 'react';
import test1 from '../assests/avatar-anisha.png'
import test2 from '../assests/avatar-ali.png';
import test3 from '../assests/avatar-richard.png';

export default function Testimonial() {
  return (
    <>
       <div>
        <section id='testimonial'>
            {/* container to heading and testimonial block */}
            <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
                <h2 className='text-4xl font-bold text-center'>What's diffrent about Manage?</h2>
                {/* <Testimonial */}
                <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
                    <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
                        <img src={test1} alt=''  className='w-16 -mt-14'/>
                        <h5 className='text-lg font-bold'>Anisha Li</h5>
                        <p className='text-sm text-darkGrayishBlue'> “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”</p>
                    </div>
                    <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
                        <img src={test2} alt=''  className='w-16 -mt-14'/>
                        <h5 className='text-lg font-bold'>Ali Bravo</h5>
                        <p className='text-sm text-darkGrayishBlue'>“We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”</p>
                    </div>
                    <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
                        <img src={test3} alt=''  className='w-16 -mt-14'/>
                        <h5 className='text-lg font-bold'>Richard Watts</h5>
                        <p className='text-sm text-darkGrayishBlue'>  “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”</p>
                    </div>
                </div>
                <div className='my-16'>
                <a
                    href="#"
                    class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
                    >Get Started</a>
                </div>
            </div>
        </section>
       </div> 
    </>
  )
}
