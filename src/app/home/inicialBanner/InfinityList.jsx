import Marquee from "react-fast-marquee";
import '../../../styles/InfinityList.css';

export default function InfinityLIst() {
    return (
        <body className="select-none">
            <div class="infinity-list">
                <Marquee className={"h-10 mb-3 select-none"} gradient={true} gradientColor="black" gradientWidth={64}>
                    <span><img src="/logos/python.svg" alt="Python Logo" /> Python</span>
                    <span><img src="/logos/javascript.svg" alt="javaScript Logo" /> javaScript</span>
                    <span><img src="/logos/supabase.svg" alt="Supabase Logo" /> Supabase</span>
                    <span><img src="/logos/dart.svg" alt="Dart Logo" /> Dart</span>
                    <span><img src="/logos/flutterflow.jpeg" alt="FlutterFlow Logo" /> FlutterFlow</span>
                    <span><img src="/logos/wordpress.svg" alt="WordPress Logo" /> WordPress</span>
                    <span><img src="/logos/react.svg" alt="React Logo" /> React</span>
                    <span><img src="/logos/nextjs.svg" alt="ReactJs Logo" /> Next Js</span>
                    <span><img src="/logos/python.svg" alt="Python Logo" /> Python</span>
                    <span><img src="/logos/supabase.svg" alt="Supabase Logo" /> Supabase</span>
                    <span><img src="/logos/obsstudio.svg" alt="OBS Studio Logo" /> OBS Studio</span>
                    <span><img src="/logos/react.svg" alt="React Logo" /> React</span>
                    <span><img src="/logos/figma.svg" alt="Figma Logo" /> Figma</span>
                </Marquee>
            </div>
            <div class="infinity-list">
                <Marquee className={"h-10 select-none"} direction='right' gradient={true} gradientColor="black" gradientWidth={64}>
                    <span><img src="/logos/python.svg" alt="Python Logo" /> Python</span>
                    <span><img src="/logos/javascript.svg" alt="javaScript Logo" /> javaScript</span>
                    <span><img src="/logos/dart.svg" alt="Dart Logo" /> Dart</span>
                    <span><img src="/logos/supabase.svg" alt="Supabase Logo" /> Supabase</span>
                    <span><img src="/logos/flutterflow.jpeg" alt="FlutterFlow Logo" /> FlutterFlow</span>
                    <span><img src="/logos/react.svg" alt="React Logo" /> React</span>
                    <span><img src="/logos/nextjs.svg" alt="ReactJs Logo" /> Next Js</span>
                    <span><img src="/logos/python.svg" alt="Python Logo" /> Python</span>
                    <span><img src="/logos/figma.svg" alt="Figma Logo" /> Figma</span>
                    <span><img src="/logos/supabase.svg" alt="Supabase Logo" /> Supabase</span>
                    <span><img src="/logos/wordpress.svg" alt="WordPress Logo" /> WordPress</span>
                    <span><img src="/logos/obsstudio.svg" alt="OBS Studio Logo" /> OBS Studio</span>
                    <span><img src="/logos/react.svg" alt="React Logo" /> React</span>
                </Marquee>
            </div>
        </body>
    )
}
