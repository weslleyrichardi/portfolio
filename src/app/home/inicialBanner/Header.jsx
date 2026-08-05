export default function Header() {
    return (
        <header className='px-8 h-18 content-center'>
            <nav className='h-ful flex justify-between items-center'>
            <div className='flex gap-2'>
                <a href="https://www.linkedin.com/in/weslley-richard/" target='_blank'><button className='min-h-12 min-w-12' class="media-icons"><img src="linkedin.svg" alt="" className='h-5 w-5'/></button></a>
                <a href="https://github.com/weslleyrichardi" target='_blank'><button className='min-h-12 min-w-12' class="media-icons"><img src="github.svg" alt="" className='h-5 w-5'/></button></a>
                <a href="https://www.instagram.com/eu.richardi/" target='_blank'><button className='min-h-12 min-w-12' class="media-icons"><img src="instagram.svg" alt="" className='h-5 w-5'/></button></a>
            </div>
            <div className='flex flex-row gap-8 items-center'>
                <button className='min-h-12 min-w-12' class="changer-theme"><img src="Moon.png" alt="" className='h-5 w-5'/></button>
            </div>
            </nav>
        </header>
    )
}