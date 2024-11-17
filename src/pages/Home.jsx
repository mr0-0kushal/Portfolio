import React from 'react'
import gsap from 'gsap'
import { useEffect , useRef } from 'react';

const Home = () => {
    const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, { x: 200, duration: 1 });
  }, []);

  return (
    <div className='flex items-center h-full absolute'>
    <div 
        id="box1" 
        className='bg-red-400 w-[100px] h-[100px] text-center font-bold items-center justify-center flex rounded-xl relative left-[-800px]'
        ref={boxRef}
        >
      Hello
    </div>
    </div>
  )
}

export default Home
