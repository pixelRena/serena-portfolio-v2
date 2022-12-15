import FeatherIcon from 'feather-icons-react';
import { FaReact, FaFigma,  } from 'react-icons/fa';
import { TbBrandTailwind } from 'react-icons/tb';

export default function Footer() {
	return(
		<footer className="mt-32 lg:mt-0 text-center text-white p-4 mt-16">
			<span className="flex justify-center mb-2"><FeatherIcon icon="heart"/></span>
			<span>Made with <a href="https://github.com/pixelRena/serena-portfolio-v2" className="text-sky-500 hover:underline">Passion</a></span>
			<span className="block">Buit with <FaReact title="react" className="inline text-sky-500" size="20"/> <FaFigma title="figma" className="inline text-pink-500" size="20"/> <TbBrandTailwind title="tailwind" className="inline text-blue-700" size="20"/> </span>
		</footer>
	);
};