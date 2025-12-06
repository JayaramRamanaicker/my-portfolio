import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='about' 
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>About Me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className='w-64 sm:w-80 rounded-3xl max-w-none'
        >
            <Image src={assets.user_image} alt='Jayaram R' className='w-full h-full rounded-3xl' />
        </motion.div>

        <div className='flex-1'>
            <p className='mb-10 max-w-2xl font-Ovo'>I am an enthusiastic Fullstack Developer currently pursuing my B.Tech in Agricultural Engineering. Alongside academics, I’ve worked on multiple real-world projects including appointment booking systems, dashboards, and business management applications.</p>

            <motion.ul 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
            >
                {infoList.map(({icon, iconDark, title, description}, index)=>(
                    <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'>
                        <Image src={icon} alt={title} className='w-7 mt-3' />
                        <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                        <p className='text-gray-600 text-sm'>{description}</p>
                    </li>
                ))}
            </motion.ul>

            <h4 className='my-6 text-gray-700 font-Ovo'>Languages & Tools</h4>
            
            <ul className='flex items-center gap-3 sm:gap-5'>
                {toolsData.map((tool, index)=>(
                    <motion.li 
                        whileHover={{ scale: 1.1 }}
                        className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer' 
                        key={index}
                    >
                        <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                    </motion.li>
                ))}
            </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default About