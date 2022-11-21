import FeatherIcon from 'feather-icons-react';
import { useState } from 'react';

export default function Contact() {
	const [ name, setName ] = useState('');
	const [ company, setCompany ] = useState('');
	const [ message, setMessage ] = useState('');

	const sendEmail = (e) => {
		e.preventDefault();
		// Replace with email handle
		console.log({
			"name":name,
			"company":company,
			"message":message,
		})
		alert('sent');
	};

	return(
		<div className="text-white mt-32 h-[34rem] grid lg:grid-cols-2 lg:mt-0 lg:h-screen lg:p-32 lg:gap-2 lg:content-center">	
			<div className="text-left p-8">
				<h1 className="text-4xl lg:text-6xl font-bold">Let's Connect:</h1>
				<div className="mt-5">
					<FeatherIcon className="mr-5 cursor-pointer inline w-10" strokeWidth="1" size="40" icon="linkedin" onClick={() => window.open("https://www.linkedin.com/in/sdean00/","_target")}/>
					<FeatherIcon className="mr-5 cursor-pointer text-sky-500 inline w-10" strokeWidth="1" size="40" icon="twitter" onClick={() => window.open("https://twitter.com/pixelRena","_target")}/>
					<FeatherIcon className="mr-5 cursor-pointer inline w-10" strokeWidth="1" size="40" icon="github" onClick={() => window.open("https://github.com/pixelRena","_target")}/>
					<FeatherIcon className="mr-5 cursor-pointer inline w-10" strokeWidth="1" size="40" icon="send" onClick={() => window.open("mailto:dserena01@yahoo.com", "_target")}/>
				</div>
				<div className="mt-5">
					<p className="mb-5 text-xl">You can either write to me at dserena01@yahoo.com or send me email faster by filling out the form</p>
					<span className="hidden lg:block"><FeatherIcon className="float-right" size="38" icon="arrow-right"/></span>
					<span className="lg:hidden"><FeatherIcon size="38" icon="arrow-down"/></span>
				</div>
			</div>
			<div className="mt-8 lg:mt-0 p-5">
				<h1 className="text-4xl mb-2 font-bold lg:text-5xl">Write To Me:</h1>
				<form onSubmit={sendEmail}>
					<div>
						<label htmlFor="name">Your Name</label>
						<input id="name" className="m-auto mb-2 w-64 block border-0 border-b-2 border-gray-400 bg-transparent focus:border-white focus:ring-0 lg:w-96" type="text" onChange={e => setName(e.target.value)}/>
					</div>
					<div>
						<label htmlFor="companyname">Company Name</label>
						<input id="companyname" className="m-auto w-64 block border-0 border-b-2 border-gray-400 bg-transparent focus:border-white focus:ring-0 lg:w-96" type="text" onChange={e => setCompany(e.target.value)}/>
					</div>
					<div className="mt-5">
						<label htmlFor="message">Message</label>
						<textarea id="message" className="resize-none m-auto mt-2 w-64 h-32 block border-2 border-gray-400 bg-transparent focus:border-white focus:ring-0 lg:w-96" type="text" onChange={e => setMessage(e.target.value)}/>
					</div>
					<button type="submit" className="border-2 border-gray-400 w-56 rounded-lg font-semibold p-2 hover:bg-white hover:text-black text-sm mt-5 lg:w-96 lg:p-3 lg:text-lg">Send</button>
				</form>
			</div>
		</div>
	);
};