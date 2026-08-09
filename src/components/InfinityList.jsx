import Marquee from "react-fast-marquee";
import '../styles/InfinityLIst.css';

/**
 * Componente de lista infinita com efeito de rolagem (Marquee).
 * 
 * @param {Object} props - Propriedades do componente.
 * @param {'left' | 'right'} [props.direction='left'] - Define o lado para onde a lista corre.
 */
export default function InfinityLIst({ direction = 'left', stylesList }) {
    const technologies = [
        { src: "/logos/python.svg", alt: "Python Logo", label: "Python" },
        { src: "/logos/javascript.svg", alt: "javaScript Logo", label: "javaScript" },
        { src: "/logos/supabase.svg", alt: "Supabase Logo", label: "Supabase" },
        { src: "/logos/dart.svg", alt: "Dart Logo", label: "Dart" },
        { src: "/logos/flutterflow.jpeg", alt: "FlutterFlow Logo", label: "FlutterFlow" },
        { src: "/logos/wordpress.svg", alt: "WordPress Logo", label: "WordPress" },
        { src: "/logos/react.svg", alt: "React Logo", label: "React" },
        { src: "/logos/nextjs.svg", alt: "ReactJs Logo", label: "Next Js" },
        { src: "/logos/obsstudio.svg", alt: "OBS Studio Logo", label: "OBS Studio" },
        { src: "/logos/figma.svg", alt: "Figma Logo", label: "Figma" },
    ];

    const listItems = [...technologies, ...technologies];

    return (
        <div className={`max-w-480 infinity-list select-none w-full ${stylesList}`}>
            <Marquee 
                className="h-10 select-none" 
                direction={direction}
                gradient={true} 
                gradientColor="black" 
                gradientWidth={64}
            >
                {listItems.map((tech, index) => (
                    <span key={index}>
                        <img src={tech.src} alt={tech.alt} /> 
                        {tech.label}
                    </span>
                ))}
            </Marquee>
        </div>
    );
}