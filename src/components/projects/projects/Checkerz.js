import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faRecycle,
	faCode,
	faFeather,
	faHandPointer,
	faHeartbeat,
	faBroom,
} from '@fortawesome/free-solid-svg-icons';

const Checkerz = () => {
	return (
		<div>
			<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				Problem Statement:
			</h2>
			<p className="pl-8 text-sm">
				The idea is to create a method that allows to validate Objects in
				Javascript. A method such that we don't have to repeat code that is used
				for validation at multiple places. Some of the rules (like type checking
				and others) are already provided by ORM's like Mongoose. But where they
				lack is if we need to conditional checks.
			</p>
			<br />

			<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				Proposed Solution:
			</h2>
			<p className="pl-8 text-sm">
				So, I decided to work on a NPM package that can do these sort of
				validation.
			</p>
			<br />
			<img
				className="w-full md:w-3/4 mx-auto border border-gray-100 shadow-xl rounded-xl"
				src="/img/Projects/checkerz/homepage.png"
				alt=""
			/>
			<br />
			<br />

			<div className="flex justify-center items-center md:flex-row flex-col gap-4">
				<motion.a
					className="duration-100 px-8 py-4 bg-[#cc3534D0] hover:bg-[#cc3534] text-lg rounded-full text-white"
					href="https://npmjs.org/package/checkerz"
					target="_blank"
					whileHover={{ scale: 1.1 }}
					transition={{ type: 'spring', stiffness: 1000, damping: 5 }}
				>
					Check Out Checkerz
				</motion.a>
				<motion.a
					className="duration-100 px-8 py-4 bg-[#008000D0] hover:bg-[#008000] text-lg rounded-full text-white"
					href="https://github.com/vivekjoshi556/checkerz"
					target="_blank"
					whileHover={{ scale: 1.1 }}
					transition={{ type: 'spring', stiffness: 1000, damping: 5 }}
				>
					Contribute to the Project
				</motion.a>
			</div>
			<br />
			<br />

			<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				Features:
			</h2>
			<div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
				<div className="bg-white p-8 rounded-xl border border-gray-50 shadow-xl">
					<div className="flex p-4 mt-2 mb-3 justify-center items-center rounded-full bg-purple-100 text-purple-800 w-fit mx-auto">
						<FontAwesomeIcon
							className="text-4xl dark:text-gray-300"
							icon={faRecycle}
						></FontAwesomeIcon>
					</div>
					<h3 className="mb-2 general text-center text-xl font-bold dark:text-white">
						Reusable Rules and Validators
					</h3>
					<p className="text-gray-500 text-center dark:text-gray-400 text-sm">
						A validator once created can be used to validate multiple objects.
					</p>
				</div>
				<div className="bg-white p-8 rounded-xl border border-gray-50 shadow-xl">
					<div className="flex px-3 py-4 mt-2 mb-3 justify-center items-center rounded-full bg-orange-100 text-orange-800 w-fit mx-auto">
						<FontAwesomeIcon
							className="text-4xl dark:text-gray-300"
							icon={faCode}
						></FontAwesomeIcon>
					</div>
					<h3 className="mb-2 general text-center text-xl font-bold dark:text-white">
						ES5 and ES6 Support
					</h3>
					<p className="text-gray-500 text-center dark:text-gray-400 text-sm">
						The package caters to different requirements by supporting both ES5
						and ES6 syntax.
					</p>
				</div>
				<div className="bg-white p-8 rounded-xl border border-gray-50 shadow-xl">
					<div className="flex p-4 mt-2 mb-3 justify-center items-center rounded-full bg-green-100 text-green-800 w-fit mx-auto">
						<FontAwesomeIcon
							className="text-4xl dark:text-gray-300"
							icon={faFeather}
						></FontAwesomeIcon>
					</div>
					<h3 className="mb-2 general text-center text-xl font-bold dark:text-white">
						Lightweight
					</h3>
					<p className="text-gray-500 text-center dark:text-gray-400 text-sm">
						This package prioritizes speed and efficiency for lightweight and
						fast validations.
					</p>
				</div>
				<div className="bg-white p-8 rounded-xl border border-gray-50 shadow-xl">
					<div className="flex p-4 mt-2 mb-3 justify-center items-center rounded-full bg-yellow-100 text-yellow-800 w-fit mx-auto">
						<FontAwesomeIcon
							className="text-4xl dark:text-gray-300"
							icon={faHandPointer}
						></FontAwesomeIcon>
					</div>
					<h3 className="mb-2 general text-center text-xl font-bold dark:text-white">
						Easy to Use
					</h3>
					<p className="text-gray-500 text-center dark:text-gray-400 text-sm">
						One-stop-shop export improves experience by bringing everything
						necessary to one place.
					</p>
				</div>
				<div className="bg-white p-8 rounded-xl border border-gray-50 shadow-xl">
					<div className="flex p-4 mt-2 mb-3 justify-center items-center rounded-full bg-teal-100 text-teal-800 w-fit mx-auto">
						<FontAwesomeIcon
							className="text-4xl dark:text-gray-300"
							icon={faHeartbeat}
						></FontAwesomeIcon>
					</div>
					<h3 className="mb-2 general text-center text-xl font-bold dark:text-white">
						Continious Support
					</h3>
					<p className="text-gray-500 text-center dark:text-gray-400 text-sm">
						The package undergoes continuous checks and updates to ensure its
						quality.
					</p>
				</div>
				<div className="bg-white p-8 rounded-xl border border-gray-50 shadow-xl">
					<div className="flex p-4 mt-2 mb-3 justify-center items-center rounded-full bg-sky-100 text-sky-800 w-fit mx-auto">
						<FontAwesomeIcon
							className="text-4xl dark:text-gray-300"
							icon={faBroom}
						></FontAwesomeIcon>
					</div>
					<h3 className="mb-2 general text-center text-xl font-bold dark:text-white">
						Clear Error Messages
					</h3>
					<p className="text-gray-500 text-center dark:text-gray-400 text-sm">
						Clear error messages simplify identification of issues by providing
						clarity.
					</p>
				</div>
			</div>
			<br />
			<br />

			<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				Technologies Used:
			</h2>
			<ul className="pl-8 list-disc">
				<li className="mb-3">
					Language: Package is purely built using <b>Javascript</b> language.
				</li>
				<li className="mb-3">
					Compiler: <b>Babel</b> is used with Webpack to create ES5 bundle.
				</li>
				<li className="mb-3">
					Bundler: <b>Webpack</b> is used to build ES5 & ES6 compatible bundles
					of the library.
				</li>
				<li className="mb-3">
					Testing: <b>JestJS</b> is used for testing package before build and
					publish.
				</li>
				<li className="mb-3">
					Version Control: <b>Github</b> is used to maintain package version and
					contributions.
				</li>
				<li className="mb-3">
					Deployment: <b>Github Actions</b> is used to automatically deploy NPM
					package when any new changes are pushed and all the tests pass.
				</li>
			</ul>
			<br />

			<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				New Experiences:
			</h2>
			<ul className="pl-8 list-disc">
				<li className="mb-3">
					To work both as ES5 and ES6 module I had to use a compiler. Not having
					worked with JS bundlers and compilers it was difficult to set them up.
				</li>
				<li className="mb-3">
					I want to setup linting in project to help me maintain formatting and
					make it easier to write a contribution guide. Not having worked with
					linters before this is a challenge.
				</li>
			</ul>
			<br />

			<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				Future Plans:
			</h2>
			<ul className="pl-8 list-disc">
				<li className="mb-3">To add well documented Contribution Rules.</li>
				<li className="mb-3">To create a proper documentation platform.</li>
				<li className="mb-3">
					Pick & Place option so you don't have to format the object before
					sending it for Validation.
				</li>
				<li className="mb-3">
					Option to use automatic typecasting of values if the types don't
					match.
				</li>
			</ul>
		</div>
	);
};

export default Checkerz;
