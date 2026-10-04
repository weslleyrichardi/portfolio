import InfinityList from '../../../components/InfinityList';
import bg1ection2 from '../../../assets/section_2/bg1-section2.png';
import '../../../styles/global.css';

export default function AboutMe() {
    return (
        <section 
            className="w-full min-h-124 bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-between py-4" 
            style={{ backgroundImage: `url(${bg1ection2})` }}
        >
            <InfinityList />
            
            <div className='flex flex-row justify-between items px-22 select-none'>
                <div className='flex flex-col gap-4'>
                    <div className='w-43.75 h-15 p-4 bg-[#321961] rounded-[28px] [box-shadow:inset_1px_1px_1px_0px_#E2E8F0,1px_1px_1px_0px_#E2E8F0] flex items-center gap-4 hover:scale-104'> <div className='w-4 h-4 gold-gradient rounded-full'></div> <p className='text-[18px] font-bold'>About me</p></div>
                    <div className='flex flex-col gap-4 w-6'>
                        <a href="https://linkedin.com/in/weslley-richard" target='_blank' rel='noopener noreferrer'><button className='gold-button hover:scale-104'><img src="/logos/gold-linkedin.svg" alt="logo-linkedin" className='w-6'/></button></a>
                        <a href="https://github.com/weslleyrichardi" target='_blank' rel='noopener noreferrer'><button className='gold-button hover:scale-104'><img src="/logos/gold-github.svg" alt="logo-linkedin" className='w-6'/></button></a>
                        <a href="https://www.instagram.com/eu.richardi/" target='_blank' rel='noopener noreferrer'><button className='gold-button hover:scale-104'><img src="/logos/gold-instagram.svg" alt="logo-linkedin" className='w-6'/></button></a>
                    </div>
                </div>
                <div className='max-w-202 w-full text-left flex items-center text-[42px] font-bold! font-[Arial] relative'>
                    <span className='text-[220px] font-[Arial] absolute -left-28 -top-15'>“</span>
                    <p>Eu sou <span className='purple-gradient-text'>web designer</span> e desenvolvedor <br/><span className='purple-gradient-text'>full-stack</span> com experiência em <span className='purple-gradient-text'>projetos</span><br/> com <span className='purple-gradient-text'>IA</span> e serviços <span className='purple-gradient-text'>no-code</span>.</p>
                    <span className='text-[220px] font-[Arial] absolute right-38 top-28'>”</span>

                </div>
            </div>
            
            <InfinityList direction="right" />
        </section>
    );
}
