import React from 'react'

export default function CtaSection() {
  return (
    <>
        <div>
            <section id='cta' className='bg-brightRed'>
            <div className='container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0'>
                {/* heading */}
                <h2 className='text-5xl font-bold leading-tight text-white md:text-4xl md:max-w-xl md:text-left'> Simplyfy how your team works today!</h2>
                <a
                    href="#"
                    class="p-3 px-6 pt-2 text-brightRed bg-white shadow-2xl rounded-full baseline hover:bg-gray-600"
                    >Get Started</a>
            </div>
            </section>
        </div>
    </>
  )
}
