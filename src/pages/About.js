import { Link } from 'react-router-dom';

export default function About() {
	return(
		<>
		<div className="absolute m-auto top-0 left-0 right-0 w-11/12 lg:w-10/12 h-[150vh] bg-black bg-opacity-40 lg:h-screen" style={{zIndex: "-300"}}>
		</div>
		<div className="m-auto w-11/12 h-[62rem] lg:h-screen lg:w-10/12">
		<div className="text-white mt-32 h-[32rem] grid lg:grid-cols-3 lg:mt-0 lg:h-screen lg:p-32 lg:gap-4 lg:content-center">
			<div className="col-span-2 w-48 h-48 rounded-full border-8 border-neutral-800 shadow-2xl shadow-black justify-self-center lg:w-96 lg:h-96 lg:col-span-1">
				<img className="overflow-hidden top-0 left-0 rounded-full" src="https://avatars.githubusercontent.com/u/98000871?v=4"/>
			</div>
			<div className="col-span-2 mt-5">
				<h1 className="text-2xl font-semibold lg:text-6xl"><span className="text-sky-500">Serena</span> Dean</h1>
				<p className="text-sm p-5 text-center tracking-tight lg:text-xl lg:mt-7 lg:tracking-wide">Hola! I'm a Freelancing Web Developer wanting to transfer over to Front-End Developement. From a 3D artist to creating codes and bringing them to life in web development, I enjoy every aspect of designing websites including user-friendliness, attractiveness, and simplicity. Want to connect, get a quote or have coffee together and chat? Feel free to contact me, my inbox is open to all and I'll get back with you as soon as possible.
				</p>
				<div className="flex flex-col justify-center items-center lg:flex-row">
					<Link to="/contact"><button className="mr-2 border-2 border-white rounded-lg font-semibold p-2 hover:bg-white hover:text-black text-sm mt-2 lg:mt-0 lg:inline lg:p-3 lg:text-lg">Get in touch</button></Link>
					<Link to="/creations"><button className="mr-2 border-2 border-white rounded-lg font-semibold p-2 hover:bg-white hover:text-black text-sm mt-2 lg:mt-0 lg:inline lg:p-3 lg:text-lg">Discover my work</button></Link>
				</div>
			</div>
		</div>
		</div>
		</>
	);
};