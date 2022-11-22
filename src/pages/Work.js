export default function Work() {
	return(
		// change height for mobile
		// create popup for each project
		<div className="m-auto w-11/12 h-[62rem] lg:h-screen lg:w-10/12">
			<div className="text-white flex flex-wrap h-screen justify-center items-center gap-5 bg-black bg-opacity-40 lg:gap-20">
				<div>
					<div className="relative mb-5 bg-neutral-900 p-20 bg-cover bg-no-repeat bg-center border-4 overflow-hidden rounded-md shadow-lg shadow-black lg:p-40 lg:border-8" style={{backgroundImage: "url('https://res.cloudinary.com/dyqefy6t8/image/upload/v1665823921/ubsizpsqpqkyymxa23r6.jpg')"}}>
						<div className="absolute text-xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-red-800 drop-shadow-lg hover:bg-opacity-40 hover:text-red-500 ease-in duration-300 p-40 lg:text-4xl">EXPERTECE</div>
					</div>
					<div className="relative bg-neutral-900 p-20 bg-cover bg-no-repeat bg-center overflow-hidden border-4 rounded-md shadow-lg shadow-black lg:p-40 lg:border-8" style={{backgroundImage: "url('images/aiBrain.jpg')"}}>
						<div className="absolute text-xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-black drop-shadow-lg hover:bg-opacity-40 hover:text-sky-300 ease-in duration-300 p-40 lg:text-4xl">FACE ANALYZER</div>
					</div>
				</div>

				<div>
					<div className="relative mb-5 bg-neutral-900 p-20 bg-cover bg-scroll bg-no-repeat overflow-hidden bg-center border-4 rounded-md shadow-lg shadow-black lg:p-40 lg:border-8" style={{backgroundImage: "url('https://rtf-prototype.onrender.com/logo.png')"}}>
						<div className="absolute text-xl font-bold drop-shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:text-orange-500 hover:bg-black hover:bg-opacity-40 ease-in duration-300 p-40 lg:text-4xl">REDEMPTION TEMPLE FITNESS</div>
					</div>
					<div className="relative bg-neutral-900 p-20 bg-cover bg-no-repeat bg-center overflow-hidden border-4 rounded-md shadow-lg shadow-black lg:p-40 lg:border-8" style={{backgroundImage: "url('images/beachcover.png')"}}>
						<video className="absolute object-cover h-96 bottom-0 left-0 hover:bg-black hover:bg-opacity-40 ease-in duration-300" src="https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-with-rocks-1090-large.mp4" onMouseOver={(e) => e.target.play()} onMouseOut={(e) =>e.target.pause()} ></video>
						
						<div className="absolute drop-shadow-lg text-xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-4xl">TRAVEL DREAMS</div>
					</div>
				</div>
			</div>
		</div>
	);
};