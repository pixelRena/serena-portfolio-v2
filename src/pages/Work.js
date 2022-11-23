import FeatherIcon from 'feather-icons-react';
import { useState } from 'react';
import ExperteceModal from '../components/ExperteceModal';
import RtfModal from '../components/RtfModal';
import AiModal from '../components/AiModal';
import TravelModal from '../components/TravelModal';

export default function Work() {
	const [ showExpertece, setShowExpertece ] = useState(false);
	const [ showRtf, setShowRtf ] = useState(false);
	const [ showAi, setShowAi ] = useState(false);
	const [ showTravel, setShowTravel ] = useState(false);

	return(
		<>
		{/* Modals */}
		<ExperteceModal showExpertece={showExpertece} setShowExpertece={setShowExpertece}/>
		<RtfModal showRtf={showRtf} setShowRtf={setShowRtf}/>
		<AiModal showAi={showAi} setShowAi={setShowAi}/>
		<TravelModal showTravel={showTravel} setShowTravel={setShowTravel}/>

		<div className="absolute m-auto top-0 left-0 right-0 w-11/12 lg:w-10/12 bg-black bg-opacity-40 lg:h-screen" style={{zIndex: "-300"}}>
		</div>

		<div className="fade m-auto mt-32 w-11/12 h-[62rem] lg:h-screen lg:w-10/12 lg:mt-0">
			<div className="text-white flex flex-wrap h-screen justify-center items-center gap-5 lg:gap-20">
				<div>
					<div className="relative mb-5 bg-neutral-900 p-20 bg-cover bg-no-repeat bg-center border-4 overflow-hidden rounded-md shadow-lg shadow-black lg:p-40 lg:border-8" style={{backgroundImage: "url('https://res.cloudinary.com/dyqefy6t8/image/upload/v1665823921/ubsizpsqpqkyymxa23r6.jpg')"}}>
						<div className="absolute text-xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-red-800 drop-shadow-lg hover:bg-opacity-40 hover:text-red-500 ease-in duration-300 p-40 lg:text-4xl">EXPERTECE
							<span className="text-lg cursor-pointer block hover:underline hover:text-white" onClick={() => setShowExpertece(true)}>Learn More <FeatherIcon className="inline text-center" icon="arrow-right"/></span>
						</div>
					</div>
					<div className="relative bg-neutral-900 p-20 bg-cover bg-no-repeat bg-center overflow-hidden border-4 rounded-md shadow-lg shadow-black lg:p-40 lg:border-8" style={{backgroundImage: "url('images/aiBrain.jpg')"}}>
						<div className="absolute text-xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-black drop-shadow-lg hover:bg-opacity-40 hover:text-sky-300 ease-in duration-300 p-40 lg:text-4xl">FACE ANALYZER
							<span className="text-lg cursor-pointer block hover:underline hover:text-white" onClick={() => setShowAi(true)}>Learn More <FeatherIcon className="inline text-center" icon="arrow-right"/></span>
						</div>
					</div>
				</div>

				<div>
					<div className="relative mb-5 bg-neutral-900 p-20 bg-cover bg-scroll bg-no-repeat overflow-hidden bg-center border-4 rounded-md shadow-lg shadow-black lg:p-40 lg:border-8" style={{backgroundImage: "url('https://rtf-prototype.onrender.com/logo.png')"}}>
						<div className="absolute text-xl font-bold drop-shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:text-orange-500 hover:bg-black hover:bg-opacity-40 ease-in duration-300 p-40 lg:text-4xl">REDEMPTION TEMPLE FITNESS
							<span className="text-lg cursor-pointer block hover:underline hover:text-white" onClick={() => setShowRtf(true)}>Learn More <FeatherIcon className="inline text-center" icon="arrow-right"/></span>
						</div>
					</div>
					<div className="relative bg-neutral-900 p-20 bg-cover bg-no-repeat bg-center overflow-hidden border-4 rounded-md shadow-lg shadow-black lg:p-40 lg:border-8" style={{backgroundImage: "url('images/beachcover.png')"}}>
						<video className="absolute object-cover h-96 bottom-0 left-0 hover:bg-black hover:bg-opacity-40 ease-in duration-300" src="https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-with-rocks-1090-large.mp4" onMouseOver={(e) => e.target.play()} onMouseOut={(e) =>e.target.pause()} ></video>
						
						<div className="absolute drop-shadow-lg text-xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-4xl">TRAVEL DREAMS
							<span className="text-lg cursor-pointer block hover:underline" onClick={() => setShowTravel(true)}>Learn More <FeatherIcon className="inline text-center" icon="arrow-right"/></span>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};