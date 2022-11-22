import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function MainBackground() {
    // get pathname
    const path = useLocation();

    useEffect(() => {
    },[path]);

    return(
        <div className="main-bg absolute bg-zinc-900 m-auto left-0 right-0 w-11/12 lg:w-10/12 h-screen">
            {/* If pathname is not home, don't display video */}
            { path.pathname === "/" ?
                <video className="opacity-60 object-cover w-full h-screen overflow-hidden" src="https://assets.mixkit.co/videos/preview/mixkit-triangular-tunnel-with-blue-lights-in-its-walls-34317-large.mp4" autoPlay muted playsInline loop/>
                :
                <></>
            }
        </div>
    )
};