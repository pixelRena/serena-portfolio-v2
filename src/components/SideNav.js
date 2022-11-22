import { NavLink } from 'react-router-dom';

// Side bar needs to be fixed for smaller desktop screens
export default function SideNav() {
    return(
        <>
        {/* desktop */}
        <div className="side-nav hidden lg:block absolute text-2xl text-left left-7 top-96 text-white bg-[#0E0E0E]">
            <ul>
                <NavLink to="/"><li className="mr-2 cursor-pointer hover:text-sky-300 border-b-transparent border-b-2 hover:border-b-sky-300">Home
                </li></NavLink>
                <NavLink to="/about"><li className="mr-2 cursor-pointer hover:text-sky-300 border-b-transparent border-b-2 hover:border-b-sky-300">About</li></NavLink>
                <NavLink to="/creations"><li className="mr-2 cursor-pointer hover:text-sky-300 border-b-transparent border-b-2 hover:border-b-sky-300">Work</li></NavLink>
                <NavLink to="/contact"><li className="mr-2 cursor-pointer hover:text-sky-300 border-b-transparent border-b-2 hover:border-b-sky-300">Contact</li></NavLink>
            </ul>
        </div>
        {/* mobile - convert to top nav*/}
        <div className="text-white mt-3 flex justify-around lg:hidden">
            <NavLink to="/"><ul className="cursor-pointer mt-2 hover:text-sky-300 border-b-transparent border-b-2 hover:border-b-sky-300">Home</ul></NavLink>
            <NavLink to="/about"><ul className="cursor-pointer mt-2 hover:text-sky-300 border-b-transparent border-b-2 hover:border-b-sky-300">About</ul></NavLink>
            <NavLink to="/creations"><ul className="cursor-pointer mt-2 hover:text-sky-300 border-b-transparent border-b-2 hover:border-b-sky-300">Work</ul></NavLink>
            <NavLink to="/contact"><ul className="cursor-pointer mt-2 hover:text-sky-300 border-b-transparent border-b-2 hover:border-b-sky-300">Contact</ul></NavLink>
        </div>
        </>
    );
};