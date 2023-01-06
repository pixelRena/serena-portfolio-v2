import { DiHtml5, DiGithubFull, DiSass, DiFirebase, DiJavascript1 } from "react-icons/di";
import { BsBoxArrowInRight, BsXLg } from 'react-icons/bs';
import CarouselBox from "./CarouselBox";

export default function RecommendModal({setShowRecommend, showRecommend}) {
    return(
        <>
        { showRecommend && (
            <div className="absolute fade bg-black bg-opacity-70 h-screen w-full z-40">
                <div className="lg:flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/* content */}
                        <div className="border-0 rounded-md shadow-lg  relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*  header */}
                            <div className="flex items-start justify-between p-6 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold text-purple-300">Gaming Recommendations ⦿ PROJECT</h3>
                                <button className="p-2 ml-auto bg-neutral-300 rounded-full border-0 text-black opacity-60 float-right leading-none font-medium" onClick={() => setShowRecommend(false)}>
                                    <BsXLg/>
                                </button>
                            </div>
                            {/* body */}
                            <div className="relative p-5">
                                <CarouselBox images={["recommend1.png", "recommend2.png"]}/>
                                <p className="my-4 text-left text-slate-700 text-md leading-relaxed font-medium">This is an application that allows users or followers to suggest games and view games that are own through the streamers steam list.</p>
                                <p className="text-left text-slate-700 font-medium">TOOLS USED: <br/>
                                    <DiHtml5 size="2em" className="inline text-orange-500" title="html"/>
                                    <DiSass size="2em" className="inline text-pink-500" title="sass" />
                                    <DiFirebase size="2em" className="inline text-orange-800" title="firebase" />
                                    <DiJavascript1 size="2em" className="inline text-black" title="javascript" />
                                </p>
                                <p className="text-right text-slate-700 font-medium">
                                    LINKS: <br/>
                                    <a href="https://github.com/pixelRena/games-recommendations" target="_blank" rel="noreferrer"><DiGithubFull size="2.8em" className="mr-2 border-b-2 border-neutral-500 inline cursor-pointer" title="View Code"/></a>
                                    <a href="http://serenuy-games.herokuapp.com/" target="_blank" rel="noreferrer"><BsBoxArrowInRight size="1.8em" className="text-sky-500 inline cursor-pointer" title="View Website"/></a>
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