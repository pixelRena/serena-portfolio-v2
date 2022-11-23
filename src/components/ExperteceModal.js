import { DiReact, DiNodejsSmall, DiBootstrap, DiCss3, DiMongodb } from "react-icons/di";
import { BsBoxArrowInRight, BsXLg } from 'react-icons/bs';
import CarouselBox from "./CarouselBox";

export default function ExperteceModal({setShowExpertece, showExpertece}) {
    return(
        <>
        { showExpertece && (
            <div className="absolute ease-in duration-300 bg-black bg-opacity-70 h-screen w-full z-40">
                <div className="lg:flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/* content */}
                        <div className="border-0 rounded-md shadow-lg  relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*  header */}
                            <div className="flex items-start justify-between p-6 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold text-red-500">EXPERTECE ⦿ PROJECT</h3>
                                <button className="p-2 ml-auto bg-neutral-300 rounded-full border-0 text-black opacity-60 float-right leading-none font-medium" onClick={() => setShowExpertece(false)}>
                                    <BsXLg/>
                                </button>
                            </div>
                            {/* body */}
                            <div className="relative p-5">
                                <CarouselBox images={["expertece1.png", "expertece2.png", "expertece3.png"]}/>
                                <p className="my-4 text-left text-slate-700 text-md leading-relaxed font-medium">Expertece is a e-commerce shop created for a small business that makes customized and non-customized products, which let's the owner access tools such as managing accounts and products.</p>
                                <p className="text-left text-slate-700 font-medium">TOOLS USED: <br/>
                                    <DiReact size="2em" className="inline text-sky-500" title="reactjs"/>
                                    <DiBootstrap size="2em" className="inline text-purple-500" title="bootstrap 5" />
                                    <DiCss3 size="2em" className="inline text-blue-500" title="CSS" />
                                    <DiNodejsSmall size="2em" className="inline text-green-500" title="nodejs" />
                                    <DiMongodb size="2em" className="inline text-green-800" title="monogdb" />
                                </p>
                                <p className="text-right text-slate-700 font-medium">
                                    LINKS: <br/>
                                    <a href="http://expertece-prototype.herokuapp.com/" target="_blank"><BsBoxArrowInRight size="1.8em" className="text-sky-500 inline cursor-pointer" title="View Website"/></a>
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