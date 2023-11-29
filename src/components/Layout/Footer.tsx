import React from 'react'
import FooterLogo from '../../assets/image/logo.png'
import FaceBook from '../../assets/image/facebook.svg'
import Instagram from '../../assets/image/instagram.svg'
import XMark from '../../assets/image/x.svg'
import Netflix from '../../assets/image/netflix.svg'

const Footer = () => {
    return (
        <>
            <footer className=''>
                <main className='container mx-auto footer_section'>
                    <section className='footer_logo_section'>
                        <img src={FooterLogo} alt='Footer-log' />
                        <p className='mt-20'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas tempora itaque modi, hic quibusdam corrupti ab vitae quae veritatis. Doloremque itaque placeat veritatis aliquid veniam soluta repudiandae possimus quaerat impedit.
                        </p>
                    </section>
                    <section className='footer_quick_links'>
                        <h3>Quick Link</h3>
                        <ul className='mt-40'>
                            {[0, 2, 3, 4, 3, 4].map((item: number) => <li key={item} className='mt-20'>
                                Quick links
                            </li>)}
                        </ul>
                    </section>
                    <section className='footer_quick_links'>
                        <h3>Category Link</h3>
                        <ul className='mt-40'>
                            {[0, 2, 3, 4, 3, 4].map((item: number) => <li key={item} className='mt-20'>
                                Quick links
                            </li>)}
                        </ul>
                    </section>
                    <section className='footer_react_us'>
                        <h3>Contact Us</h3>
                        <p className='mt-40'>United Kingdom	West Berkshire 35-39 London St</p>
                        <p className='mt-10'>0118 958 3555 </p>
                        <p className='mt-10'>starwar@gmail.com</p>
                        <div className='soical_links mt-20'>
                            <img src={FaceBook} alt='Facebook' />
                            <img src={Instagram} alt='Instagram' />
                            <img src={XMark} alt='XMark' />
                            <img src={Netflix} alt='Netflix' />
                        </div>
                    </section>
                </main>
                <div className='copy_right mt-30'>
                    All rights reserved © 2023
                </div>
            </footer>
        </>
    )
}

export default Footer