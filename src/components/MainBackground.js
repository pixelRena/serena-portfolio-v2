import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function MainBackground() {
    // get pathname
    const path = useLocation();

    useEffect(() => {
    },[path]);

    return(
        <div className="fade main-bg absolute bg-zinc-900 m-auto w-11/12 lg:w-10/12 lg:h-screen lg:left-0 lg:right-0">
            {/* If pathname is not home, display static viedo */}
            <video className={` object-center opacity-50 lg:object-cover fixed lg:relative lg:w-full h-screen overflow-hidden ${path.pathname === "/" ? 'object-cover':''}`} src={path.pathname === '/' ? `/videos/Circuit - 27725.mp4` : `/videos/video1.mp4`} autoPlay muted playsInline loop/>
        </div>
    )
};