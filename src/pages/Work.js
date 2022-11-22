export default function Work() {
	return(
		// change height
		<>
		<div className="text-white mt-32 h-[32rem] grid lg:grid-cols-8 lg:mt-0 lg:h-screen lg:p-10 lg:gap-3 lg:content-center">
			<h1 className="text-3xl text-center font-bold col-span-8 mt-48 mb-10">Discover My Work</h1>
			{/* First row */}
			<div className="pr-10 pt-10 col-start-1 col-end-4 text-xl">
				<h1 className="text-left text-3xl font-semibold mb-5">Project Name 1<span className="text-gray-500 text-xl italic">/4</span></h1>
				<p className="text-xl text-left ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
				</p>
			</div>
			<div className="col-start-4 col-end-5 w-[48rem] h-96 bg-cover" style={{backgroundImage: "url('/images/project3.png')"}}>
			</div>

			{/*<div className="col-start-6 bg-pink-500 rounded-none w-48 h-72">
			</div>*/}


			{/* Second Row*/}
	{/*		<div className="mt-20 col-start-1 col-end-3 bg-gray-500 rounded-none w-96 h-72">
			</div>
			<div className="mt-20 col-start-3 bg-pink-500 rounded-none w-48 h-72">
			</div>
			<div className="mt-20 pr-10 pt-10 col-start-4 col-end-7 text-xl">
				<h1 className="text-right text-3xl font-semibold mb-5">Project Name 2<span className="text-gray-500 text-xl italic">/4</span></h1>
				<p className="text-xl text-right ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
				</p>
			</div>*/}

			{/* Process repeat */}

		</div>
		</>
	);
};