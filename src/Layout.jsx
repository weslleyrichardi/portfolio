'use client';
import { useRef } from 'react';
import { Outlet } from 'react-router-dom'; // Importante para renderizar as páginas filhas
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import './App.css';
import { Link } from 'react-router-dom';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Layout() {
   const nav = useRef();

   useGSAP(() => {
      const navScroll = gsap.to(nav?.current, {
         yPercent: -100,
         paused: true,
         duration: 0.3,
      })

      ScrollTrigger.create({
         trigger: nav?.current,
         start: 'top top',
         end: 'max',
         onUpdate: (self) => {
            if (self.direction === 1 && self.scroll() > 50) { 
               navScroll.play();
            } else {
               navScroll.reverse();
            }
         }
      })
   })

   return (
     <div>
         <nav className='w-full h-14 fixed bg-[#FD6009] flex justify-center items-center z-999' ref={nav}>
            <div className="absolute left-32 flex gap-4">
               <a href="https://docs.google.com/document/d/1C4JrhJQ_Pt73QeH6OIOH4x5Zs4_axbioqxyY7vI1r_E/edit?usp=sharing" target='_blank'>
                  <button
                     type="button"
                     className="text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br hover:scale-105 active:scale-95 shadow-md shadow-blue-500/50 font-medium rounded-lg text-sm px-4! py-2.5! text-center leading-5 transition-all duration-300"
                  >Currículo</button>
               </a>
                <Link to="/preview" replace>
                    <button
                        type="button"
                        className="text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br hover:scale-105 active:scale-95 shadow-md shadow-blue-500/50 font-medium rounded-lg text-sm px-4! py-2.5! text-center leading-5 transition-all duration-300"
                    >Preview portfolio</button>
                </Link>
            </div>
            
            <p className='font-bold text-white'>ESTE PROJETO ESTÁ EM ANDAMENTO - THIS PROJECT IS UNDER DEVELOPMENT</p>
         </nav>

         <main className="pt-14">
            <Outlet />
         </main>
     </div>
   )
}
