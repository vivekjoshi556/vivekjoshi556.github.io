import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence, wrap } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAngleDoubleLeft,
	faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

const variants = {
	enter: (direction) => {
		return {
			zIndex: 10,
			x: direction > 0 ? '200%' : '-200%',
		};
	},
	center: {
		x: 0,
	},
	exit: (direction) => {
		return {
			zIndex: 1,
			x: direction < 0 ? '200%' : '-200%',
			transition: {
				x: { duration: 0.5 },
			},
		};
	},
};

function Slideshow({ images }) {
	const [[page, direction], setPage] = useState([0, 0]);

	const imageIndex = wrap(0, images.length, page);

	const paginate = (newDirection) => {
		setPage([page + newDirection, newDirection]);
	};

	return (
		<>
			<div className="flex overflow-x-hidden relative justify-center">
				<div
					className="cursor-pointer next absolute h-10 w-10 rounded-full bg-black text-white bg-opacity-75 top-44 left-0 shadow-xl z-10 flex justify-center items-center"
					onClick={() => paginate(1)}
				>
					<FontAwesomeIcon icon={faAngleDoubleLeft} />
				</div>
				<AnimatePresence initial={false} custom={direction}>
					<motion.img
						key={page}
						src={'/img/Projects/service/' + images[imageIndex]}
						className="h-96 object-contain max-w-full inline-block lg:px-0 px-12 rounded-lg"
						custom={direction}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{
							x: { type: 'spring', stiffness: 100, damping: 15, delay: 0.5 },
						}}
					/>
				</AnimatePresence>

				<div
					className="cursor-pointer prev absolute h-10 w-10 rounded-full bg-black text-white bg-opacity-75 top-44 right-0 shadow-xl z-10 flex justify-center items-center"
					onClick={() => paginate(-1)}
				>
					<FontAwesomeIcon icon={faAngleDoubleRight} />
				</div>
			</div>
		</>
	);
}

export default Slideshow;
