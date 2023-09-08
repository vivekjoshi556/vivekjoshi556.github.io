import AuctionTruckers from './projects/AuctionTruckers';
import Checkerz from './projects/Checkerz';
// import MusicGenre from './projects/MusicGenre';
import ServicePro from './projects/ServicePro';

//? The color and it's hover effect values need to be included to the tailwind.config.js files safelist.
export const projects = [
	{
		name: 'Auction Truckers',
		codename: 'musicGenre',
		description:
			'Explore Auction Truckers, a visually captivating platform that redefines the truck trading experience. Discover secure payments, real-time interactions, and the future of truck trading—all at your fingertips.',
		tags: [
			'NextJS',
			'TailwindCSS',
			'Frontend Development',
			'Stripe Payment Gateway',
		],
		img: '/img/Projects/AuctionTruckers/logo.png',
		link: 'https://github.com/vivekjoshi556/Music-Genre-Classification',
		color: '#f76659',
		render: <AuctionTruckers />,
	},
	{
		name: 'Checkerz',
		codename: 'checkerz',
		description:
			'Experience the future of service provision with our dynamic platform. Seamlessly connect users with a wide range of services, from plumbing to salon services, deliveries, laundry, and many more. Discover secure payments, real-time interactions, and the convenience of on-demand services—all in one place.',
		tags: ['Javascript', 'NPM', 'Validation'],
		img: '/img/Projects/checkerz/logo.png',
		link: 'https://github.com/vivekjoshi556/Music-Genre-Classification',
		color: '#cc3534',
		render: <Checkerz />,
	},
	{
		name: 'Service Provider Application',
		codename: 'servicePro',
		description:
			'Service Provider applications where users could get any service they wanted, like plumbing, salon services, deliveries, laundry Service, Car Wash and many others. At the same time provides could provide these services and earn money.',
		tags: [
			'Laravel',
			'Tailwind CSS',
			'Livewire',
			'Google Maps API',
			'Stripe Payment Gateway',
		],
		img: '/img/Projects/service/logo.png',
		// eslint-disable-next-line
		link: 'javascript:void(0)',
		color: '#0d51ae',
		render: <ServicePro />,
	},
	// {
	// 	name: 'Music Genre Classification',
	// 	codename: 'musicGenre',
	// 	description:
	// 		'Developed a Music Genre Classification Application. Worked on GTZAN dataset which contains 10 different genres of songs. For each genre there were 100 audio clips available. We used machine learning to train a model to classify songs.',
	// 	tags: [
	// 		'Python',
	// 		'SkLearn Library',
	// 		'Machine Learning',
	// 		'KMC',
	// 		'KNN',
	// 		'SVM',
	// 	],
	// 	img: '/img/Projects/musicGenre/logo.jpg',
	// 	link: 'https://github.com/vivekjoshi556/Music-Genre-Classification',
	// 	color: '#00a547',
	// 	render: <MusicGenre />,
	// },
];
