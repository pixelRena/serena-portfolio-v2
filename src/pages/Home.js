import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
    return(
        <div className="home fade text-white flex flex-col text-xl lg:text-4xl justify-center place-items-center h-screen">
                {/* <div className="circle-base relative h-48 w-48 rounded-full border-4 border-white shadow-lg shadow-gray-900 md:h-48 md:w-48 lg:h-128 lg:w-128">
                    <div className="circle-wave absolute top-0 left-0 w-full h-full bg-sky-500 rounded-full overflow-hidden border-4 border-sky-500"></div>
                </div>
                <div className="absolute text-5xl mix-blend-overlay md:text-5xl lg:text-8xl">devXserena</div> */}
                <p><strong>Welcome</strong>. I'm <strong className="underline font-extrabold text-sky-500">Serena</strong></p>
                <p>I <strong className="underline">specialize</strong> in <span className="text-sky-500 font-extrabold"><Typewriter words={['<FrontEndDevelopment/>', '<3DModeling/>', '<BeingAwesome/>']} loop={0} cursor cursorStyle="_"/></span></p>
        </div>
    )
};