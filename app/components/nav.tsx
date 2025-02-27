"use client"
//test
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { navLinks } from '../types/types'
import Link from 'next/link'
import Image from 'next/image'
import Dark from '@/public/dark.ico'
import { Menu, X } from 'lucide-react'

function Nav({ links }: navLinks) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <motion.header 
            initial={{opacity: 0, y: -100 }}
            animate={{opacity: 1, y: 0 }}
            transition={{ duration: 1.5, type:"spring", delay: 1 }}
            className='w-full fixed px-2 flex items-center justify-center top-2 z-50 bg-opacity-75'
        >
            <nav className='w-full md:w-[850px] bg-accent-50 flex items-center justify-between p-2 shadow-2xl'>
                <Link className='cursor-default text-3xl font-semibold size-10' href={"/"}>
                    <Image src={Dark} alt="Logo" className='h-full w-full rounded-full'/>
                </Link>
                <div className='hidden md:flex gap-3'>
                    {links.map((link, idx) => 
                        <a className='font-semibold text-text-800 hover:duration-100' key={idx} href={link.href}>{link.name}</a>
                    )}
                </div>
                <button className='md:hidden' onClick={toggleMenu}>
                    <Menu />
                </button>
            </nav>
            <AnimatePresence>
                {menuOpen && (
                    <motion.div 
                        initial={{opacity: 0, x: 100 }}
                        animate={{opacity: 1, x: 0 }}
                        exit={{opacity: 0, x: 100 }}
                        transition={{ duration: .5, type:"spring", delay: .5 }}
                        className='md:hidden absolute -top-2 right-0 h-[1200px] w-[70%] bg-primary flex flex-col items-center text-text-50 p-2 shadow-lg'>
                            <X onClick={toggleMenu}/>
                        {links.map((link, idx) => 
                            <a className='text-zinc-50 hover:text-zinc-500 duration-100 p-2' key={idx} href={link.href}>{link.name}</a>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}

export default Nav