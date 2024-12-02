import React from 'react'
import logo from "../assets/raviKumarLogo.webp"
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
const Navbar = () => {
    return (
        <>
            <nav className='flex item-center justify-between py-6'>
                <div className='flex flex-shrink-0 item-center'>
                    <a href="/" aria-label='Home'>
                        <img className='mx-2' width={50} height={33} src={logo} alt="Logo" />
                    </a>
                </div>
                <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                    <a href="https:/www.linkedin.com/in/your-linkedin-profile" target='_black' rel='noopener noreferrer' aria-label='LinkedIn'>
                        <FaLinkedin />
                    </a>
                    <a href="https:/www.github.com/in/your-github-profile" target='_black' rel='noopener noreferrer' aria-label='GitHub'>
                        <FaGithub />
                    </a>
                    <a href="https:/www.instagram.com/in/your-instagram-profile" target='_black' rel='noopener noreferrer' aria-label='Instagram'>
                        <FaInstagram />
                    </a>
                    <a href="https:/www.twitter.com/in/your-twitter-profile" target='_black' rel='noopener noreferrer' aria-label='Twitter'>
                        <FaTwitter />
                    </a>

                </div>
            </nav>
        </>
    )
}

export default Navbar
