import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMoneyBillTransfer,
	faDesktop,
	faBell,
	faSearch,
	faLink,
	faExpandAlt,
} from "@fortawesome/free-solid-svg-icons";
import SlideShow from "../../util/slideShow";

export default function AuctionTruckers() {
	return (
		<div className="aboveNoise">
			<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				Problem Statement:
			</h2>
			<p className="pl-8 text-sm">
				The task was to develop a truck trading platform as part of a
				freelancing project. While existing platforms already existed in the
				market, the goal was to create a functional and user-friendly solution
				for buying and selling trucks with better support user support.
			</p>
			<br />

			<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				Proposed Solution:
			</h2>
			<p className="pl-8 text-sm">
				As part of the freelancing project, our proposed solution was to design
				and develop a dedicated truck trading platform. This platform aimed to
				provide a straightforward and user-friendly online marketplace for
				individuals looking to buy or sell trucks. While existing solutions
				existed, our approach focused on delivering a functional and intuitive
				platform tailored to the specific needs of truck enthusiasts. Leveraging
				Next.js, Tailwind CSS, and seamless API integration, we aimed to create
				a reliable and accessible platform for truck trading. The integration of
				Stripe.js enabled secure and convenient payment processing, while
				real-time push notifications, powered by Laravel Echo and Pusher, added
				a new level of interactivity to the platform.
			</p>
			<br />
			<img
				className="w-full md:w-3/4 mx-auto border border-gray-100 shadow-xl rounded-xl"
				src="/img/Projects/AuctionTruckers/logo.png"
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
							icon={faDesktop}
						></FontAwesomeIcon>
					</div>
					<h3 className="mb-2 general text-center text-xl font-bold dark:text-white">
						Intuitive User Interfaces
					</h3>
					<p className="text-gray-500 text-center dark:text-gray-400 text-sm">
						Auction Truckers boasts meticulously crafted user interfaces, making
						navigation and truck listing a breeze.
					</p>
				</div>
				<div className="bg-white p-8 rounded-xl border border-gray-50 shadow-xl">
					<div className="flex h-16 w-16 mt-2 mb-3 justify-center items-center rounded-full bg-orange-100 text-orange-800 mx-auto">
						<FontAwesomeIcon
							className="text-4xl dark:text-gray-300"
							icon={faBell}
						></FontAwesomeIcon>
					</div>
					<h3 className="mb-2 general text-center text-xl font-bold dark:text-white">
						Real-time Notifications
					</h3>
					<p className="text-gray-500 text-center dark:text-gray-400 text-sm">
						Stay updated with push notifications, enhancing the real-time
						interactivity of the platform.
					</p>
				</div>
				<div className="bg-white p-8 rounded-xl border border-gray-50 shadow-xl">
					<div className="flex h-16 w-16 mt-2 mb-3 justify-center items-center rounded-full bg-green-100 text-green-800 mx-auto">
						<FontAwesomeIcon
							className="text-4xl dark:text-gray-300"
							icon={faSearch}
						></FontAwesomeIcon>
					</div>
					<h3 className="mb-2 general text-center text-xl font-bold dark:text-white">
						Comprehensive Search
					</h3>
					<p className="text-gray-500 text-center dark:text-gray-400 text-sm">
						Users can easily find their ideal trucks using advanced search
						filters.
					</p>
				</div>
				<div className="bg-white p-8 rounded-xl border border-gray-50 shadow-xl">
					<div className="flex h-16 w-16 mt-2 mb-3 justify-center items-center rounded-full bg-yellow-100 text-yellow-800 mx-auto">
						<FontAwesomeIcon
							className="text-4xl dark:text-gray-300"
							icon={faExpandAlt}
						></FontAwesomeIcon>
					</div>
					<h3 className="mb-2 general text-center text-xl font-bold dark:text-white">
						Responsive Design
					</h3>
					<p className="text-gray-500 text-center dark:text-gray-400 text-sm">
						Our platform is designed to work seamlessly across various devices,
						ensuring accessibility for all users.
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
						Efficient Payment Processing Secure Payments
					</h3>
					<p className="text-gray-500 text-center dark:text-gray-400 text-sm">
						With Stripe.js integration, users can confidently transact and
						securely process payments.
					</p>
				</div>
				<div className="bg-white p-8 rounded-xl border border-gray-50 shadow-xl">
					<div className="flex h-16 w-16 mt-2 mb-3 justify-center items-center rounded-full bg-sky-100 text-sky-800 mx-auto">
						<FontAwesomeIcon
							className="text-4xl dark:text-gray-300"
							icon={faLink}
						></FontAwesomeIcon>
					</div>
					<h3 className="mb-2 general text-center text-xl font-bold dark:text-white">
						Seamless API Integration
					</h3>
					<p className="text-gray-500 text-center dark:text-gray-400 text-sm">
						We seamlessly integrated the backend API, ensuring data flows
						smoothly between the front end and back end.
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
					Language/Framework: Package is built using a popular <b>JS </b>
					language framework <b>Next.js</b>.
				</li>
				<li className="mb-3">
					CSS Framework: <b>TailwindCSS</b> is an open source CSS framework.
				</li>
				<li className="mb-3">
					Payments: <b>Stripe</b> is a suite of APIs powering online payment
					processing and commerce solutions for internet businesses of all
					sizes.
				</li>
				<li className="mb-3">
					Notifications:
					<ul className="pl-5 mt-3 list-[circle]">
						<li>
							<b>Laravel Echo</b> - Laravel Echo is a JavaScript library that
							makes it painless to subscribe to channels and listen for events
							broadcast by your server-side broadcasting driver.
						</li>
						<li>
							<b>Pusher</b> - Pusher is a hosted API service which makes adding
							real-time data and functionality to web and mobile applications
							seamless
						</li>
					</ul>
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
			<SlideShow
				prefix="AuctionTruckers"
				images={["1.png", "2.png", "3.png", "4.png"]}
			/>

			<br />
			<br />
			<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				Challenges & New Experiences:
			</h2>
			<ul className="pl-8 list-disc">
				<li className="mb-3">
					My initial challenge revolved around Next.js, a powerful framework
					that seamlessly combines server-side and client-side rendering. As a
					newcomer to <b>Next.js</b>, it took me some time to fully grasp its
					routing system and understand where rendering occurred. This learning
					curve led to a deeper understanding of Next.js's versatility.
				</li>
				<li className="mb-3">
					One of the standout challenges was comprehending the concept of hybrid
					rendering within Next.js, where pages can be pre-rendered at build
					time or fetched dynamically on the client side. This dual approach
					offered a unique blend of performance and flexibility but required
					careful consideration.
				</li>
				<li className="mb-3">
					Working with a framework like Next.js introduced me to various data
					fetching techniques, including server-side rendering (SSR), static
					site generation (SSG), and client-side rendering (CSR). Adapting to
					these different methods required mastering the intricacies of each
					approach, allowing me to select the most suitable method for different
					parts of the application.
				</li>
				<li>
					Managing the project as a sole front-end developer involved planning,
					prioritizing tasks, and meeting deadlines effectively. This experience
					honed my project management skills and reinforced the importance of
					clear communication and organization.
				</li>
			</ul>
			<br />
		</div>
	);
}
