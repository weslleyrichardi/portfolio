'use client'
import gsap from 'gsap';
import { useGSAP } from "@gsap/react"
import { ScrollTrigger, SplitText } from "gsap/all";
import '../../../styles/Projects.css';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Projects() {
    useGSAP(() => {
        let split = SplitText.create("#split", {type: "chars", autoSplit: true})
        let matchMedia = gsap.matchMedia();

        matchMedia.add({
                isMobile: "(max-width: 767px)", // Tailwind: sm
                isTablet: "(min-width: 768px)", // Tailwind: md
                isDesktop: "(min-width: 1024px)" // Tailwind: lg

            }, (context) => {
                let {isDesktop} = context.conditions;

                if (isDesktop) {
                    gsap.from(split.chars, {
                        scrollTrigger: {
                            start: "top center-=-150px",
                            end: "bottom center-=-100px",
                            toggleActions: "play play reverse reverse",
                            trigger: '#split',
                            scrub: 1
                        },
                        duration: 1, 
                        markers: true,
                        y: 100,
                        autoAlpha: 0, 
                        stagger: 0.05,
                    })
                } else {
                    gsap.from(split.chars, {
                        scrollTrigger: {
                            start: "top ",
                            end: "center ",
                            toggleActions: "play play reverse reverse",
                            scrub: 1,
                            stagger: 0.05
                        },
                        duration: 1,
                        y: 100,
                        autoAlpha: 0,
                        stagger: 0.05 
                    })
                }
            }
        )
    })
    
    return (
        <section className="mt-10">
            <h1 id='split' className='text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 z-10'>Projects</h1>
            <div className="flex flex-row">
                <div className='w-[65%]'>
                    <div className='sticky-effect'>
                        <div className='project-box'>
                            <div className='box-image-projects bg-blue-900 relative rounded-2xl overflow-hidden'>
                                <img src="/ise2025.org-1.png" alt="Image 1 from ise2025.org web site" className='w-200 h-130 mt-auto rounded-2xl'/>
                                <img src="/ise2025.org-2.png" alt="Image 2 from ise2025.org web site" className='w-[35%] absolute right-26 -bottom-12 rotate-16 rounded-2xl'/>
                            </div>
                        </div>
                    </div>
                    <div className='sticky-effect'>
                        <div className='project-box'>
                            <div className='box-image-projects bg-purple-800 relative rounded-2xl overflow-hidden'>
                                <img src="/ise2025.org-1.png" alt="Image 1 from ise2025.org web site" className='w-200 h-130 mt-auto rounded-2xl'/>
                                <img src="/ise2025.org-2.png" alt="Image 2 from ise2025.org web site" className='w-[35%] absolute right-26 -bottom-12 rotate-16 rounded-2xl'/>
                            </div>
                        </div>
                    </div>  
                    <div className='sticky-effect'>
                        <div className='project-box'>
                            <div className='box-image-projects bg-gray-900 relative rounded-2xl overflow-hidden'>
                                <img src="/ise2025.org-1.png" alt="Image 1 from ise2025.org web site" className='w-200 h-130 mt-auto rounded-2xl'/>
                                <img src="/ise2025.org-2.png" alt="Image 2 from ise2025.org web site" className='w-[35%] absolute right-26 -bottom-12 rotate-16 rounded-2xl'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[35%]'>
                    <div className='sticky-effect'>
                        <div className="project-card">
                            <h2>Título</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem aliquid numquam tempora ducimus, doloremque recusandae illum et unde maiores odio. Suscipit quae dolorum cum, assumenda beatae tempora vero distinctio illo?</p>
                            <a href="https://twitch.tv/euRichas" target='_blank' className='italic text-blue-200 hover:text-blue-400 cursor-pointer underline z-50'>link de acesso</a>
                            <p>Tecnologias</p>
                            <div className='flex justify-between w-full'>
                                <img src="https://placehold.co/110x110/png" alt="Tecnologia 1" className='rounded-4xl'/>
                                <img src="https://placehold.co/110x110/png" alt="Tecnologia 2" className='rounded-4xl'/>
                                <img src="https://placehold.co/110x110/png" alt="Tecnologia 3" className='rounded-4xl'/>
                                <img src="https://placehold.co/110x110/png" alt="Tecnologia 4" className='rounded-4xl'/>
                            </div>
                        </div>
                    </div>
                    <div className='sticky-effect'>
                        <div className="project-card">
                            <h2>Título</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem aliquid numquam tempora ducimus, doloremque recusandae illum et unde maiores odio. Suscipit quae dolorum cum, assumenda beatae tempora vero distinctio illo?</p>
                            <a href="https://twitch.tv/euRichas" target='_blank' className='italic text-blue-200 hover:text-blue-400 cursor-pointer underline z-50'>link de acesso</a>
                            <p>Tecnologias</p>
                            <div className='flex justify-between w-full'>
                                <img src="https://placehold.co/110x110/png" alt="Tecnologia 1" className='rounded-4xl'/>
                                <img src="https://placehold.co/110x110/png" alt="Tecnologia 2" className='rounded-4xl'/>
                                <img src="https://placehold.co/110x110/png" alt="Tecnologia 3" className='rounded-4xl'/>
                                <img src="https://placehold.co/110x110/png" alt="Tecnologia 4" className='rounded-4xl'/>
                            </div>
                        </div>
                    </div>
                    <div className='sticky-effect'>
                        <div className="project-card">
                            <h2>Título</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem aliquid numquam tempora ducimus, doloremque recusandae illum et unde maiores odio. Suscipit quae dolorum cum, assumenda beatae tempora vero distinctio illo?</p>
                            <a href="https://twitch.tv/euRichas" target='_blank' className='italic text-blue-200 hover:text-blue-400 cursor-pointer underline z-50'>link de acesso</a>
                            <p>Tecnologias</p>
                            <div className='flex justify-between w-full'>
                                <img src="https://placehold.co/110x110/png" alt="Tecnologia 1" className='rounded-4xl'/>
                                <img src="https://placehold.co/110x110/png" alt="Tecnologia 2" className='rounded-4xl'/>
                                <img src="https://placehold.co/110x110/png" alt="Tecnologia 3" className='rounded-4xl'/>
                                <img src="https://placehold.co/110x110/png" alt="Tecnologia 4" className='rounded-4xl'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="min-h-lvh mt-16">x</div>
        </section>
    )

}