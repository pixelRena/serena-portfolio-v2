import FeatherIcon from 'feather-icons-react';

export default function SideNav() {
    return(
        <>
        <div className="side-nav absolute text-sm  md:text-2xl lg:text-2xl text-left left-7 top-96 text-white">
            <ul>
                <li className="cursor-pointer hover:text-sky-300 border-b-transparent border-b-2 hover:border-b-sky-300">Home
                </li>
                <li className="cursor-pointer hover:text-sky-300 border-b-transparent border-b-2 hover:border-b-sky-300">About</li>
                <li className="cursor-pointer hover:text-sky-300 border-b-transparent border-b-2 hover:border-b-sky-300">Work</li>
                <li className="cursor-pointer hover:text-sky-300 border-b-transparent border-b-2 hover:border-b-sky-300">Contact</li>
            </ul>
        </div>
        <div className='bottom-5 left-14 text-white absolute'>   
            <FeatherIcon icon="heart"/>
        </div>
        </>
    );
};