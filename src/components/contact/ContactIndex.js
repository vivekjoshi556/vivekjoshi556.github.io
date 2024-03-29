import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { containerVariant } from '../variants';

const ContactIndex = () => {
	useEffect(() => {
		document.title = 'Get in Touch';
	}, []);

	return (
		<motion.div
			key="aboutIndex"
			className="min-h-screen w-4/5 mx-auto"
			variants={containerVariant}
			initial="init"
			animate="animate"
			exit="exit"
		>
			<div className="w-full dark:bg-gray-800 h-full pt-40 flex justify-center">
				<div className="w-10/12 md:w-7/12 flex flex-col">
					<h2
						className="text-3xl font-bold font-mono silkscreen text-white glitch"
						data-text="Contact Me."
					>
						Contact Me.
					</h2>
					<hr className="bg-white mb-4" />
					<div className="text-gray-100 text-lg general">
						Say hi:{' '}
						<a
							rel="noreferrer"
							target="_blank"
							className="code function"
							href="mailto:vivekjoshi556@gmail.com"
						>
							mail()
						</a>
						<div className="text-sm pl-4 mb-8">
							Say hi or inquire about my services.
						</div>
					</div>
					<div className="text-gray-100 text-lg general">
						Talk Business:{' '}
						<a
							rel="noreferrer"
							target="_blank"
							className="code function"
							href="https://www.linkedin.com/in/vivek-joshi-97509015a/"
						>
							linkedIn()
						</a>
						<div className="text-sm pl-4 mb-8">
							Let's connect professionally and discuss business opportunities.
						</div>
					</div>
					<div className="text-gray-100 text-lg general">
						Talk with Code (Contribute):{' '}
						<a
							rel="noreferrer"
							target="_blank"
							className="code function"
							href="https://github.com/vivekjoshi556"
						>
							github()
						</a>
						<div className="text-sm pl-4 mb-8">
							Interested in contributing to my projects or exploring code
							together? Find me on GitHub.
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default ContactIndex;
