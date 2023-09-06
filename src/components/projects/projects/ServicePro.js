import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faRecycle,
	faClock,
	faDollar,
	faScrewdriverWrench,
	faMoneyBillTransfer,
	faRocket,
} from '@fortawesome/free-solid-svg-icons';
import SlideShow from '../../util/slideShow';

const ServicePro = () => {
	return (
		<div className="aboveNoise">
			<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				Problem Statement:
			</h2>
			<p className="pl-8 text-sm">
				The problem was the need for a versatile Service Provider Application
				that could connect users with a diverse range of service providers,
				including plumbing, salon services, deliveries, laundry, and many
				others, while also providing a platform for service providers to offer
				their expertise and earn income. The challenge was to create an
				efficient and user-friendly solution that catered to both sides of this
				equation, offering a seamless experience and opportunities for service
				providers to thrive.
			</p>
			<br />

			<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				Proposed Solution:
			</h2>
			<p className="pl-8 text-sm">
				The proposed solution was to develop a comprehensive website for the
				Service Provider Application. While the project originally included
				plans for a mobile app as well, my primary focus and contribution
				centered around the website's design and functionality.
			</p>
			<br />
			<img
				className="w-full md:w-3/4 mx-auto border border-gray-100 shadow-xl rounded-xl"
				src="/img/Projects/service/logo.png"
				alt=""
			/>
			<br />
			<br />

			<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				Features:
			</h2>
			<div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
				<div className="bg-white p-8 rounded-xl border border-gray-50 shadow-xl">
					<div className="flex h-16 w-16 mt-2 mb-3 justify-center items-center rounded-full bg-purple-100 text-purple-800 mx-auto">
						<FontAwesomeIcon
							className="text-4xl dark:text-gray-300"
							icon={faRecycle}
						></FontAwesomeIcon>
					</div>
					<h3 className="mb-2 general text-center text-xl font-bold dark:text-white">
						Streamlined Service Selection
					</h3>
					<p className="text-gray-500 text-center dark:text-gray-400 text-sm">
						Users can effortlessly browse and select from a wide array of
						services, all within a user-friendly interface.
					</p>
				</div>
				<div className="bg-white p-8 rounded-xl border border-gray-50 shadow-xl">
					<div className="flex h-16 w-16 mt-2 mb-3 justify-center items-center rounded-full bg-orange-100 text-orange-800 mx-auto">
						<FontAwesomeIcon
							className="text-4xl dark:text-gray-300"
							icon={faClock}
						></FontAwesomeIcon>
					</div>
					<h3 className="mb-2 general text-center text-xl font-bold dark:text-white">
						Real-Time Tracking
					</h3>
					<p className="text-gray-500 text-center dark:text-gray-400 text-sm">
						Stay informed with live updates using Google Maps API, ensuring
						transparency and efficiency during service.
					</p>
				</div>
				<div className="bg-white p-8 rounded-xl border border-gray-50 shadow-xl">
					<div className="flex h-16 w-16 mt-2 mb-3 justify-center items-center rounded-full bg-green-100 text-green-800 mx-auto">
						<FontAwesomeIcon
							className="text-4xl dark:text-gray-300"
							icon={faRocket}
						></FontAwesomeIcon>
					</div>
					<h3 className="mb-2 general text-center text-xl font-bold dark:text-white">
						Effortless Onboarding
					</h3>
					<p className="text-gray-500 text-center dark:text-gray-400 text-sm">
						Quick and intuitive profile setup for service providers, reducing
						administrative hurdles.
					</p>
				</div>
				<div className="bg-white p-8 rounded-xl border border-gray-50 shadow-xl">
					<div className="flex h-16 w-16 mt-2 mb-3 justify-center items-center rounded-full bg-yellow-100 text-yellow-800 mx-auto">
						<FontAwesomeIcon
							className="text-4xl dark:text-gray-300"
							icon={faDollar}
						></FontAwesomeIcon>
					</div>
					<h3 className="mb-2 general text-center text-xl font-bold dark:text-white">
						Great Earning Opportunities
					</h3>
					<p className="text-gray-500 text-center dark:text-gray-400 text-sm">
						Gain access to a consistent stream of potential clients, translating
						into a steady income source for service providers.
					</p>
				</div>
				<div className="bg-white p-8 rounded-xl border border-gray-50 shadow-xl">
					<div className="flex h-16 w-16 mt-2 mb-3 justify-center items-center rounded-full bg-teal-100 text-teal-800 mx-auto">
						<FontAwesomeIcon
							className="text-4xl dark:text-gray-300"
							icon={faMoneyBillTransfer}
						></FontAwesomeIcon>
					</div>
					<h3 className="mb-2 general text-center text-xl font-bold dark:text-white">
						Efficient Payment Processing
					</h3>
					<p className="text-gray-500 text-center dark:text-gray-400 text-sm">
						Seamlessly process payments with Stripe, providing secure and
						convenient transactions.
					</p>
				</div>
				<div className="bg-white p-8 rounded-xl border border-gray-50 shadow-xl">
					<div className="flex h-16 w-16 mt-2 mb-3 justify-center items-center rounded-full bg-sky-100 text-sky-800 mx-auto">
						<FontAwesomeIcon
							className="text-4xl dark:text-gray-300"
							icon={faScrewdriverWrench}
						></FontAwesomeIcon>
					</div>
					<h3 className="mb-2 general text-center text-xl font-bold dark:text-white">
						Completely Customizable
					</h3>
					<p className="text-gray-500 text-center dark:text-gray-400 text-sm">
						Tailor the website to your needs with extensive backend
						customization options for content and theme adjustments.
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
					Language/Framework: Package is built using a popular <b>PHP </b>
					language framework <b>Laravel</b>.
				</li>
				<li className="mb-3">
					Dynamic UI: <b>Livewire</b> is a full-stack framework for Laravel that
					makes building dynamic interfaces simple, without leaving the comfort
					of Laravel.
				</li>
				<li className="mb-3">
					CSS Framework: <b>TailwindCSS</b> is an open source CSS framework.
				</li>
				<li className="mb-3">
					Deployment: <b>Github</b> is used for keeping track of the project
					history.
				</li>
				<li className="mb-3">
					Location Tracking: <b>Google Maps</b> lets us add relevant content and
					customize the look and feel of the map to fit with the style of our
					site.
				</li>
			</ul>
			<br />
			<br />

			<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				Teasers:
			</h2>
			<SlideShow images={['1.png', '2.png', '3.png', '4.jpg', '5.jpg']} />

			<br />
			<br />
			<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				Challenges & New Experiences:
			</h2>
			<ul className="pl-8 list-disc">
				<li className="mb-3">
					Tackling a substantial project with diverse user roles was a
					significant learning opportunity. It involved not only designing
					interfaces for varied user needs but also delving into the intricacies
					of <b>authorization, roles, and permission management</b>. This
					experience allowed me to gain expertise in effectively controlling
					access and privileges within the application, enhancing its security
					and user experience.
				</li>
				<li className="mb-3">
					Venturing into the world of <b>Google Maps API</b> was both exciting
					and challenging. Learning how to integrate real-time tracking and
					location services added valuable expertise to my skill set.
				</li>
				<li className="mb-3">
					Embracing <b>Livewire</b> technology was a new and exciting journey.
					As Livewire was also a relatively fresh addition to my toolkit,
					adapting to its capabilities and incorporating <b>dynamic elements</b>{' '}
					into the website presented a stimulating learning curve.
				</li>
			</ul>
			<br />
		</div>
	);
};

export default ServicePro;
