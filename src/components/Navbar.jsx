import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { items } from '../assets/navData';

const Navbar = () => {
    const navItem = useRef([]);
    useEffect(() => {
        navItem.current.forEach((item) => {
            if (item) {
                gsap.to(item, { y: 200, duration: 0.5 });
            }
        });
    }, [])
    return (
        <div className='flex w-full items-center justify-evenly'>
            {
                items.map((item, index) => (
                    <div key={index} className='font-bold'>
                        <h1 className='hover:show hidden' >
                            {item.name}
                        </h1>
                        <svg
                            viewBox={item.view}
                            fill="currentColor"
                            height="2.5em"
                            width="3em"
                            className='relative top-[-200px]'
                            ref={(el) => {
                                navItem.current[index] = el;
                            }}
                        >
                            <path d={item.dPath} />
                        </svg>
                    </div>
                ))
            }
        </div>
    )
};

export default Navbar;