import React from 'react'
import { SectionWrapper } from '../hoc'
import { FaPhone,FaGithub,FaInstagram,FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

const Footer = () => {
    return (
        <motion.div
        variants={slideIn("left", "tween", 0.2, 0.5)} 
        className='flex justify-between bg-black-100 p-8 rounded-2xl'>
            <div className='flex flex-col w-[25vw]'>
                <div className='font-poppins text-white font-medium cursor-pointer text-[20px]'>Contact
                    Information
                </div>
                <div className='text-[16px] sm:block hidden text-secondary mt-2'>
                Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away.
                </div>
                <div className='mt-3 flex gap-2 items-center text-white'>
                <MdOutlineMailOutline /> <span> Email : devangsingh87262@gmail.com</span>
                </div>
                <div className='mt-3 flex gap-2 items-center text-white'>
                <FaPhone /> <span> Phone : +91 6387722120</span>
                </div>
            </div>
            <div className=' text-[30px] gap-3 flex w-[25vw] items-end justify-end'>
                <a href="https://www.linkedin.com/in/devang0812"><FaLinkedin /></a>
                <a href="https://github.com/Devang0812"><FaGithub /></a>
                <a href="https://x.com/DevangSing37661"><FaXTwitter /></a>
                <a href="https://www.instagram.com/devang0810"><FaInstagram /></a>

            </div>
        </motion.div>
    )
}

export default SectionWrapper(Footer, "")
