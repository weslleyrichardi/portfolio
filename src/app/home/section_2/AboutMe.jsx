import InfinityList from '../../../components/InfinityList';
import bg1ection2 from '../../../assets/section_2/bg1-section2.png';

export default function AboutMe() {
    return (
        <section 
            className="w-full min-h-124 bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-between py-4" 
            style={{ backgroundImage: `url(${bg1ection2})` }}
        >
            <InfinityList />
            
            <div className='flx justify-between px-32'>
                <div>
                    <div className='w-43.75 h-15 bg-[#321961] rounded-[28px] [box-shadow:inset_1px_1px_1px_0px_#E2E8F0,1px_1px_1px_0px_#E2E8F0]'></div>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
                <div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae impedit aliquam cum ipsum est illo iure laudantium distinctio repudiandae mollitia necessitatibus odio molestiae odit, vitae ab enim eius, nobis debitis?</p>
                </div>
            </div>
            
            <InfinityList direction="right" />
        </section>
    );
}
