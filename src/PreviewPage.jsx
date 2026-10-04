import { Link } from "react-router-dom"

export default function PreviewSite() {
    return (
        <div className="min-w-full max-w-480 min-h-svh flex flex-col justify-center select-none">
            <img className="max-h-svh select-none" src="/preview/Section_1.png" alt=""/>
            <img src="/preview/Section_2.png"></img>
            <img src="/preview/Section_3.png"/>
            <img src="/preview/Section_4.png"/>
            <img src="/preview/Section_5.png"/>
            <Link to="/" replace>
                <button className="absolute right-8 bottom-8 w-16 h-16 rounded-full bg-white">
                    <img src="/home.png" alt="Home button icons created by Magnific - Flaticon"  className="w-8 h-8"/>
                </button>
            </Link>
        </div>
    )
}