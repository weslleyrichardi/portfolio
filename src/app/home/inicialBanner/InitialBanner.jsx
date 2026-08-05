import GradientText from '../../../components/GradientText';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


export default function InitialBanner() {
    useGSAP(
        gsap.to("#teste", {y: 2*100})
    );

    return (
        <section className='flex flex-col relative justify-center items-center min-h-lvh gap-4'>
            <div className='w-40 h-40  bg-amber-200' id='teste'>
                
            </div>
            <div className='w-40 h-40 absolute  bg-red-200'>

            </div>
        </section>      
    )
}