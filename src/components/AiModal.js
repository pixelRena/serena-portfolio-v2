import { DiReact, DiGithubFull, DiCss3, DiPostgresql } from "react-icons/di";
import { BsBoxArrowInRight, BsXLg } from 'react-icons/bs';
import CarouselBox from "./CarouselBox";

export default function AiModal({setShowAi, showAi}) {
    return(
        <>
        { showAi && (
            <div className="absolute ease-in duration-300 bg-black bg-opacity-70 h-screen w-full z-40">
                <div className="lg:flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/* content */}
                        <div className="border-0 rounded-md shadow-lg  relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*  header */}
                            <div className="flex items-start justify-between p-6 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold text-sky-300">FACE ANALYZER ⦿ PROJECT</h3>
                                <button className="p-2 ml-auto bg-neutral-300 rounded-full border-0 text-black opacity-60 float-right leading-none font-medium" onClick={() => setShowAi(false)}>
                                    <BsXLg/>
                                </button>
                            </div>
                            {/* body */}
                            <div className="relative p-5">
                                <CarouselBox images={["ai2.png", "ai1.png", "ai3.png"]}/>
                                <p className="my-4 text-left text-slate-700 text-md leading-relaxed font-medium">Want to know how many people were in that picture you took at the party? This application, built with ReactJS and created taking the ZTM Academy course, allows you to copy your image URL's and upload them to see the works or technology and what it can do! It captures multiple faces. Integrated with PSQL, requiring the user to register in order to scan images.</p>
                                <p className="text-left text-slate-700 font-medium">TOOLS USED: <br/>
                                    <DiReact size="2em" className="inline text-sky-500" title="reactjs"/>
                                    <DiCss3 size="2em" className="inline text-blue-500" title="CSS" />
                                    <DiPostgresql size="2em" className="inline text-blue-800" title="postgresql" />
                                    <span className="text-slate-700 font-semibold">Tachyons</span>
                                </p>
                                <p className="text-right text-slate-700 font-medium">
                                    LINKS: <br/>
                                    <a href="https://github.com/pixelRena/facial-recognition-app" target="_blank"><DiGithubFull size="2.8em" className="mr-2 border-b-2 border-neutral-500 inline cursor-pointer" title="View Code"/></a>
                                    <a href="https://jsxneko-face-recognition.herokuapp.com/" target="_blank"><BsBoxArrowInRight size="1.8em" className="text-sky-500 inline cursor-pointer" title="View Website"/></a>
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