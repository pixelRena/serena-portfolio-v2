export default function SideNav() {
    return(
        <>
        {/* desktop */}
        <div className="side-nav hidden lg:block absolute text-2xl text-left left-7 top-96 text-white bg-[#0E0E0E]">
            <ul>
                <li className="mr-2 cursor-pointer hover:text-sky-300 border-b-transparent border-b-2 hover:border-b-sky-300">Home
                </li>
                <li className="mr-2 cursor-pointer hover:text-sky-300 border-b-transparent border-b-2 hover:border-b-sky-300">About</li>
                <li className="mr-2 cursor-pointer hover:text-sky-300 border-b-transparent border-b-2 hover:border-b-sky-300">Work</li>
                <li className="mr-2 cursor-pointer hover:text-sky-300 border-b-transparent border-b-2 hover:border-b-sky-300">Contact</li>
            </ul>
        </div>
        {/* mobile - convert to top nav*/}
        <div className="text-white mt-3 flex justify-around lg:hidden">
            <ul className="cursor-pointer mt-2 hover:text-sky-300 border-b-transparent border-b-2 hover:border-b-sky-300">Home</ul>
            <ul className="cursor-pointer mt-2 hover:text-sky-300 border-b-transparent border-b-2 hover:border-b-sky-300">About</ul>
            <ul className="cursor-pointer mt-2 hover:text-sky-300 border-b-transparent border-b-2 hover:border-b-sky-300">Work</ul>
            <ul className="cursor-pointer mt-2 hover:text-sky-300 border-b-transparent border-b-2 hover:border-b-sky-300">Contact</ul>
        </div>
        </>
    );
};