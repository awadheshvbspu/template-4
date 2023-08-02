import React from 'react'
import footerlogo from '../assests/logo-white.svg'
import facebook from '../assests/icon-facebook.svg';
import youtube from '../assests/icon-youtube.svg';
import twitter from '../assests/icon-twitter.svg';
import pinintrest from '../assests/icon-pinterest.svg';
import instagram from '../assests/icon-instagram.svg'

export default function Footer() {
    return (
        <>
            <div>
                <footer className='bg-veryDarkBlue'>
                    <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
                        <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
                        <div class="mx-auto my-6 text-center text-white md:hidden">
                                Copyright &copy; 2023, All Rights Reserved
                            </div>
                            <div>
                            <img src={footerlogo} alt='' className='h-8' />
                            </div>
                        </div>
                        <div className='flex justify-center space-x-4'>
                            <a href='#' >
                                <img src={facebook} className='h-8' alt='' />
                            </a>
                            <a href='#' >
                                <img src={youtube} className='h-8' alt='' />
                            </a>
                            <a href='#' >
                                <img src={twitter} className='h-8' alt='' />
                            </a>
                            <a href='#' >
                                <img src={pinintrest} className='h-8' alt='' />
                            </a>
                            <a href='#' >
                                <img src={instagram} className='h-8' alt='' />
                            </a>
                        </div>
                        <div class="flex justify-around space-x-32">
                            <div class="flex flex-col space-y-3 text-white">
                                <a href="#" class="hover:text-brightRed">Home</a>
                                <a href="#" class="hover:text-brightRed">Pricing</a>
                                <a href="#" class="hover:text-brightRed">Products</a>
                                <a href="#" class="hover:text-brightRed">About</a>
                            </div>
                            <div class="flex flex-col space-y-3 text-white">
                                <a href="#" class="hover:text-brightRed">Careers</a>
                                <a href="#" class="hover:text-brightRed">Community</a>
                                <a href="#" class="hover:text-brightRed">Privacy Policy</a>
                            </div>
                        </div>
                        <div class="flex flex-col justify-between">
                            <form>
                                <div class="flex space-x-3">
                                    <input
                                        type="text"
                                        class="flex-1 px-4 rounded-full focus:outline-none"
                                        placeholder="Updated in your inbox"
                                    />
                                    <button
                                        class="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
                                    >
                                        Go
                                    </button>
                                </div>
                            </form>
                            <div class="hidden text-white md:block">
                                Copyright &copy; 2023, All Rights Reserved
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
