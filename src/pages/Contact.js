import FeatherIcon from 'feather-icons-react';
import { useState, useRef } from 'react';
import axios from 'axios';

export default function Contact() {
	const [ name, setName ] = useState('');
	const [ company, setCompany ] = useState('');
	const [ message, setMessage ] = useState('');
	const [ email, setEmail ] = useState('');
	
	const nameRef = useRef();
	const emailRef = useRef();
	const companyRef = useRef();
	const messageRef = useRef();

	const focusField = (ref) => {
		ref.current.focus();
	}

	const sendEmail = async (e) => {
		e.preventDefault();
		try {
			const sendData = await axios.post('/send-email', {
				"name":name,
				"email":email,
				"company":company,
				"message":message,
			})
			alert('Email sent successfully');
		} catch(error) {
			if(error.response.data.message === "nameInvalid") {
				alert("Please enter your name");
				focusField(nameRef);
			} else if(error.response.data.message === "companyInvalid") {
				alert("Please enter your company name");
				focusField(companyRef);
			} else if(error.response.data.message === "emailInvalid") {
				alert("Please enter your email address");
				focusField(emailRef);
			} else if(error.response.data.message === "messageInvalid") {
				alert("Please fill out the message textarea");
				focusField(messageRef);
			}
		}
	};

	return(
		<>
		<div className="absolute m-auto top-0 left-0 right-0 w-11/12 lg:w-10/12 bg-black bg-opacity-40 lg:h-screen" style={{zIndex: "-300"}}>
		</div>
		<div className="fade m-auto w-11/12 h-[62rem] lg:h-screen lg:w-10/12">
		<div className="text-white mt-16 h-[34rem] grid lg:grid-cols-2 lg:h-screen lg:p-32 lg:gap-2 lg:content-center">	
			<div className="lg:mt-0 text-left p-8">
				<h1 className="text-4xl lg:text-6xl font-bold">Let's <span className="text-sky-500">Connect:</span></h1>
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
				<h1 className="text-4xl mb-2 font-bold lg:text-5xl"><span className="text-sky-500">Write</span> To Me:</h1>
				<form onSubmit={sendEmail}>
					<div>
						<label htmlFor="name">Your Name</label>
						<input id="name" className="m-auto mb-2 w-64 block border-0 border-b-2 border-gray-400 bg-transparent focus:border-sky-500  focus:ring-0 lg:w-96" ref={nameRef} type="text" onChange={e => setName(e.target.value)} required/>
					</div>
					<div>
						<label htmlFor="companyname">Company Name</label>
						<input id="companyname" className="m-auto w-64 block border-0 border-b-2 border-gray-400 bg-transparent focus:border-sky-500 focus:ring-0 lg:w-96" type="text" onChange={e => setCompany(e.target.value)} ref={companyRef} required/>
					</div>
					<div>
						<label htmlFor="email">Email Address</label>
						<input id="email" className="m-auto w-64 block border-0 border-b-2 border-gray-400 bg-transparent focus:border-sky-500 focus:ring-0 lg:w-96" type="email" onChange={e => setEmail(e.target.value)} ref={emailRef} required/>
					</div>
					<div className="mt-5">
						<label htmlFor="message">Message - include the best way for me to contact you</label>
						<textarea id="message" className="resize-none rounded-md m-auto mt-2 w-64 h-32 block border-2 border-gray-400 bg-transparent focus:border-sky-500  focus:ring-0 lg:w-96" type="text" onChange={e => setMessage(e.target.value)} ref={messageRef} required/>
					</div>
					<button type="submit" className="border-2 border-gray-400 w-56 rounded-lg font-semibold p-2 hover:bg-white hover:bg-opacity-30 text-sm mt-5 lg:w-96 lg:p-3 lg:text-lg">Send</button>
				</form>
			</div>
		</div>
		</div>
		</>
	);
};