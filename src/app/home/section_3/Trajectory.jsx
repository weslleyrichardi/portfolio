import '../../../styles/global.css';

export default function Trajectory() {
    return (
        <section className="w-full min-h-svh bg-[#130A24] p-16 flex flex-col justify-center relative select-none">

            <h1 className='title text-center absolute top-16 left-[50%] translate-x-[-50%]'>MINHA TRAJETÓRIA</h1>

            <div class="relative max-w-5xl mx-auto w-full flex flex-col font-sans text-white">
  
                <div class="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full border-l-2 border-dashed border-white/30 md:block"></div> {/* Linha pontilhada */}

                <div class="relative flex flex-col md:grid md:grid-cols-2 md:gap-16 w-full mb-16">
                    <div class="flex flex-col md:text-right md:justify-center md:pr-16 pl-16 md:pl-0 order-2 md:order-1">
                        <h5 class="text-[40px] md:text-[50px] bbh-hegarty-regular leading-none mb-2">'14</h5>
                        <p class="font-[Arial] text-gray-300 text-sm md:text-base max-w-md md:ml-auto">I was accepted as a student at the IEA (Amazonas Institute of Education).</p>
                    </div>
                    
                    <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full border-2 border-dashed border-white bg-[#130A24] p-1 z-10 order-1 md:order-0">
                        <div class="w-full h-full bg-[#ff9f00] rounded-full"></div>
                    </div>
                    
                    <div class="hidden md:block order-3"></div>
                </div>

                <div class="relative flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 w-full mb-16">
                    <div class="hidden md:block"></div>
                    
                    <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full border-2 border-dashed border-white bg-[#130A24] p-1 z-10">
                        <div class="w-full h-full bg-[#676767] rounded-full"></div>
                    </div>

                    <div class="flex flex-col md:text-left md:justify-center md:pl-16 pl-16">
                        <h5 class="text-[40px] md:text-[50px] bbh-hegarty-regular leading-none mb-2">'15</h5>
                        <p class="font-[Arial] text-gray-300 text-sm md:text-base max-w-md">I started my career as a student in a computer networking technical course in Fortaleza.</p>
                    </div>
                </div>

                <div class="relative flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 w-full">
                    <div class="flex flex-col md:text-right md:justify-center md:pr-16 pl-16 md:pl-0 order-2 md:order-1">
                        <h5 class="text-[40px] md:text-[50px] bbh-hegarty-regular leading-none mb-2">'17</h5>
                        <p class="font-[Arial] text-gray-300 text-sm md:text-base max-w-md md:ml-auto">Software Manager for the Operation Dragon Social Project</p>
                    </div>
                    
                    <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full border-2 border-dashed border-white bg-[#130A24] p-1 z-10 order-1 md:order-0">
                        <div class="w-full h-full bg-[#ff9f00] rounded-full"></div>
                    </div>

                    <div class="hidden md:block order-3"></div>
                </div>
            </div>
        </section>
    )
} 