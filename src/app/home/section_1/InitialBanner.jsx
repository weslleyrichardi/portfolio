'user client'
import { useGSAP } from '@gsap/react';
import GradientText from '../../../components/GradientText.jsx';
import InfinityLIst from '../../../components/InfinityList.jsx';
import bg1Section1 from '../../../assets/section_1/bg1-section1.png';
import bg2Section1 from '../../../assets/section_1/bg2-section1.png';
import frontendImg from '../../../assets/section_1/image-front-end-day.svg';


export default function InitialBanner() {
    useGSAP(
    );

    return (
        <section className='min-h-lvh min-w-full bg-cover bg-no-repeat bg-top relative overflow-hidden select-none' style={{backgroundImage: `url(${bg1Section1})`}}>
            <div id='name-efect'>
                <h1 className='text-[148px] changa-one-regular absolute top-16 left-[50%] transform translate-x-[-50%] w-full z-1 [word-spacing:128px] '>Weslley Richard</h1>
                <div className='min-h-lvh min-w-full bg-cover bg-no-repeat bg-top overflow-hidden absolute z-2' style={{backgroundImage: `url(${bg2Section1})`}}></div>
                <h1 className='text-[148px] changa-one-regular text-transparent absolute top-16 left-[50%] transform translate-x-[-50%] w-full z-3 [-webkit-text-stroke:0.3px_#ffffff] [word-spacing:128px]'>Weslley  Richard</h1>
            </div>
            <div id='cards-inicial-banner'>
                <div className="w-58 h-30.75 bg-white/12 backdrop-blur-xl [box-shadow:inset_2px_2px_1px_1px_#ffffffA3,2px_4px_8px_#00000059] rounded-3xl overflow-hidde flex justify-center items-center absolute bottom-16 left-32 z-4">
                    <p className="text-[20px] font-bold absolute top-2.5 left-2.5">APOIE:</p>
                    <img src={frontendImg} alt="img" className="w-41 h-22"/>
                </div>
                <div className="py-6 px-16 bg-white/12 backdrop-blur-xl [box-shadow:inset_2px_2px_1px_1px_#ffffffA3,2px_4px_8px_#00000059] rounded-3xl overflow-hidde flex-col justify-center content-center absolute bottom-64 right-48 z-4">
                    <p className="text-[48px] leading-8 font-black mb-4">2+</p>
                    <p className="text-[20px] font-bold max-w-50">Years of industry experience</p>
                </div>
                <div className="py-8 px-10 bg-white/12 backdrop-blur-xl [box-shadow:inset_2px_2px_1px_1px_#ffffffA3,2px_4px_8px_#00000059] rounded-3xl overflow-hidde flex-col justify-center content-center absolute bottom-16 right-32 z-4">
                    <p className="text-[48px] leading-8 font-black mb-4">10+</p>
                    <p className="text-[20px] font-bold max-w-50">Professional Projects</p>
                </div>
            </div>
        </section>      
    )
}