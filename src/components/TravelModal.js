import { DiHtml5, DiGithubFull, DiBootstrap, DiCss3, DiJavascript1 } from "react-icons/di";
import { BsBoxArrowInRight, BsXLg } from 'react-icons/bs';
import CarouselBox from "./CarouselBox";

export default function TravelModal({setShowTravel, showTravel}) {
    return(
        <>
        { showTravel && (
            <div className="absolute fade  bg-black bg-opacity-70 h-screen w-full z-40">
                <div className="lg:flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/* content */}
                        <div className="border-0 rounded-md shadow-lg  relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*  header */}
                            <div className="flex items-start justify-between p-6 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold text-sky-300">TRAVEL DREAMS ⦿ PROJECT</h3>
                                <button className="p-2 ml-auto bg-neutral-300 rounded-full border-0 text-black opacity-60 float-right leading-none font-medium" onClick={() => setShowTravel(false)}>
                                    <BsXLg/>
                                </button>
                            </div>
                            {/* body */}
                            <div className="relative p-5">
                                <CarouselBox images={["travel.png"]}/>
                                <p className="my-4 text-left text-slate-700 text-md leading-relaxed font-medium">Want to find a new space to vacation but in the comfort of your home? This compelling to leave home landing page is made using vanilla HTML and CSS with bootstrap. Made for simplicity.</p>
                                <p className="text-left text-slate-700 font-medium">TOOLS USED: <br/>
                                    <DiHtml5 size="2em" className="inline text-orange-500" title="html" />
                                    <DiCss3 size="2em" className="inline text-blue-500" title="CSS" />
                                    <DiBootstrap size="2em" className="inline text-purple-500" title="bootstrap 5" />
                                    <DiJavascript1 size="2em" className="inline text-yellow-500" title="javascript" />
                                </p>
                                <p className="text-right text-slate-700 font-medium">
                                    LINKS: <br/>
                                    <a href="https://github.com/pixelRena/Travel-Dreams" target="_blank" rel="noreferrer"><DiGithubFull size="2.8em" className="mr-2 border-b-2 border-neutral-500 inline cursor-pointer" title="View Code"/></a>
                                    <a href="https://pixelrena.github.io/Travel-Dreams/" target="_blank" rel="noreferrer"><BsBoxArrowInRight size="1.8em" className="text-sky-500 inline cursor-pointer" title="View Website"/></a>
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