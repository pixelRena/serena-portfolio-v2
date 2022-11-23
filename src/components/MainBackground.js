import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function MainBackground() {
    // get pathname
    const path = useLocation();

    useEffect(() => {
    },[path]);

    return(
        <div className="main-bg absolute bg-zinc-900 m-auto w-11/12 lg:w-10/12 lg:h-screen lg:left-0 lg:right-0">
            {/* If pathname is not home, display static viedo */}
            <video className={`object-center opacity-50 lg:object-cover fixed lg:relative lg:w-full h-screen overflow-hidden ${path.pathname === "/" ? 'object-cover':''}`} src={path.pathname === '/' ? `https://assets.mixkit.co/videos/preview/mixkit-triangular-tunnel-with-blue-lights-in-its-walls-34317-large.mp4` : `/images/video1.mp4`} autoPlay muted playsInline loop/>
        </div>
    )
};