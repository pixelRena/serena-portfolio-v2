import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Fix background video for pages
export default function MainBackground() {
    // get pathname
    const path = useLocation();

    useEffect(() => {
    },[path]);

    return(
        <div className="main-bg absolute bg-zinc-900 m-auto left-0 right-0 w-11/12 lg:w-10/12 h-screen">
            {/* If pathname is not home, display static viedo */}
            <video className="bg-repeat opacity-50 object-cover w-full h-screen overflow-hidden" src={path.pathname === '/' ? `https://assets.mixkit.co/videos/preview/mixkit-triangular-tunnel-with-blue-lights-in-its-walls-34317-large.mp4` : `/images/video1.mp4`} autoPlay muted playsInline loop/>
        </div>
    )
};