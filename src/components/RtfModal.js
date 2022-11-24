import { DiReact, DiSass, DiGithubFull, DiBootstrap } from "react-icons/di";
import { BsBoxArrowInRight, BsXLg } from 'react-icons/bs';
import { FaAws, FaFigma } from 'react-icons/fa';
import CarouselBox from "./CarouselBox";

export default function RtfModal({setShowRtf, showRtf}) {
    return(
        <>
        { showRtf && (
            <div className="absolute fade bg-black bg-opacity-70 h-screen w-full z-40">
                <div className="lg:flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/* content */}
                        <div className="border-0 rounded-md shadow-lg  relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*  header */}
                            <div className="flex items-start justify-between p-6 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold text-orange-500">RTF ⦿ PROJECT</h3>
                                <button className="p-2 ml-auto bg-neutral-300 rounded-full border-0 text-black opacity-60 float-right leading-none font-medium" onClick={() => setShowRtf(false)}>
                                    <BsXLg/>
                                </button>
                            </div>
                            {/* body */}
                            <div className="relative p-5">
                                <CarouselBox images={["rtf1.png", "rtf2.png", "rtf3.png"]}/>
                                <p className="my-4 text-left text-slate-700 text-md leading-relaxed font-medium">Redemption Temple Fitness application for clients and new users looking for a personal trainer to shape their goals for the year can apply for a quote and learn more about the programs offered by Hope himself.</p>
                                <p className="text-left text-slate-700 font-medium">TOOLS USED: <br/>
                                    <DiReact size="2em" className="inline text-sky-500" title="reactjs"/>
                                    <DiBootstrap size="2em" className="inline text-purple-500" title="bootstrap 5" />
                                    <DiSass size="2em" className="inline text-pink-500" title="SASS" />
                                    <FaAws size="2em" className="inline text-orange-500" title="AWS" />
                                    <FaFigma size="2em" className="inline text-pink-500" title="Figma" />
                                </p>
                                <p className="text-right text-slate-700 font-medium">
                                    LINKS: <br/>
                                    <a href="https://github.com/pixelRena/rt-fitness" target="_blank"><DiGithubFull size="2.8em" className="mr-2 border-b-2 border-neutral-500 inline cursor-pointer" title="View Code"/></a>
                                    <a href="https://rtf-prototype.onrender.com" target="_blank"><BsBoxArrowInRight size="1.8em" className="text-sky-500 inline cursor-pointer" title="View Website"/></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </>
    );
}