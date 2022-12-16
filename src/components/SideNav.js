import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineHome, AiOutlineProject, AiOutlineAliwangwang, AiOutlineUser } from 'react-icons/ai';

export default function SideNav() {
    const [ active, setActive ] = useState(false);

    return(
        <>
        <div className="flex">  
            <aside className="absolute w-48 overflow-hidden z-30">
                <button className={`mt-5 ${active ? 'absolute active' : 'inactive mr-32 lg:mr-16'}`} id="navbar-toggler" onClick={() => setActive(!active)} type="button">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={`h-screen top-0 text-left text-2xl items-center justify-center text-white flex bg-[#0E0E0E] ${active ? '':'hidden'}`}>
                    <ul className="space-y-2">
                        <li>
                            <NavLink to="/" className="flex items-center" onClick={() => setActive(false)}>
                            <span className="mr-2 cursor-pointer hover:text-sky-300 border-b-transparent border-b-2 hover:border-b-sky-300 "><AiOutlineHome className="inline mr-2"/>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="flex items-center" onClick={() => setActive(false)}>
                                <span className="mr-2 cursor-pointer hover:text-sky-300 border-b-transparent border-b-2 hover:border-b-sky-300"><AiOutlineUser className="inline mr-2"/>About</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/creations" className="flex items-center" onClick={() => setActive(false)}>
                                <span className="mr-2 cursor-pointer hover:text-sky-300 border-b-transparent border-b-2 hover:border-b-sky-300"><AiOutlineProject className="inline mr-2"/>My Work</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="flex items-center" onClick={() => setActive(false)}>
                                <span className="mr-2 cursor-pointer hover:text-sky-300 border-b-transparent border-b-2 hover:border-b-sky-300"><AiOutlineAliwangwang className="inline mr-2"/>Contact</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </aside>
        </div> 
        </>
    );
};