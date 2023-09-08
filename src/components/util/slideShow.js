import * as React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAngleDoubleLeft,
	faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

function Slideshow({ images, prefix }) {
	const [index, setIndex] = useState(0);

	function updateIndex(update) {
		setIndex((old) => {
			let result;
			if (update === 1) result = old === images.length - 1 ? 0 : old + 1;
			else result = (old === 0 ? images.length : old) - 1;
			return result;
		});
	}

	return (
		<>
			<div className="flex overflow-x-hidden md:flex-row flex-col relative justify-center">
				<img
					src={'/img/Projects/' + prefix + '/' + images[index]}
					className="md:max-h-96 max-w-full mx-auto block lg:px-0 rounded-lg border object-contain"
					alt="ImageNotFound"
				/>
				<div
					className="cursor-pointer md:flex hidden absolute h-10 w-10 rounded-full bg-black text-white bg-opacity-75 top-[45%] left-0 shadow-xl z-10 justify-center items-center"
					onClick={() => updateIndex(-1)}
				>
					<FontAwesomeIcon icon={faAngleDoubleLeft} />
				</div>
				<div
					className="cursor-pointer md:flex hidden absolute h-10 w-10 rounded-full bg-black text-white bg-opacity-75 top-[45%] right-0 shadow-xl z-10 justify-center items-center"
					onClick={() => updateIndex(1)}
				>
					<FontAwesomeIcon icon={faAngleDoubleRight} />
				</div>
				<div className="flex flex-row justify-center gap-2 items-center md:hidden mt-3">
					<div
						className="cursor-pointer flex h-10 w-10 rounded-full bg-black text-white bg-opacity-75 top-[45%] left-0 shadow-xl z-10 justify-center items-center"
						onClick={() => updateIndex(1)}
					>
						<FontAwesomeIcon icon={faAngleDoubleLeft} />
					</div>
					<div
						className="cursor-pointer flex h-10 w-10 rounded-full bg-black text-white bg-opacity-75 top-[45%] right-0 shadow-xl z-10 justify-center items-center"
						onClick={() => updateIndex(-1)}
					>
						<FontAwesomeIcon icon={faAngleDoubleRight} />
					</div>
				</div>
			</div>
		</>
	);
}

export default Slideshow;
