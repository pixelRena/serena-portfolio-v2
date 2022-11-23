import FeatherIcon from 'feather-icons-react';

export default function Footer() {
	return(
		<footer className="text-center text-white p-4">
			<span className="flex justify-center"><FeatherIcon icon="heart"/></span>
			<span>Made with <a href="https://github.com/pixelRena/serena-portfolio-v2" className="text-sky-500 hover:underline">Passion</a></span>
		</footer>
	);
};