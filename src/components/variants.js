export const templateVariant = {
	initial: {},
	animate: {
		transition: {
			type: 'tween',
			when: 'beforeChildren',
			delayChildren: 1,
			staggerChildren: 0.1,
		},
	},
	exit: {},
};

export const containerVariant = {
	initial: {
		x: -10,
		opacity: 0,
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'tween',
			delay: 0.5,
			duration: 0.4,
			when: 'beforeChildren',
			staggerChildren: 0.05,
		},
	},
	exit: {
		x: -10,
		opacity: 0,
		transition: {
			type: 'tween',
			when: 'afterChildren',
			duration: 0.4,
		},
	},
};

export const codeVariant = {
	initial: {
		opacity: 0,
		y: 10,
	},
	animate: {
		y: 0,
		opacity: 1,
	},
	exit: {
		opacity: 0,
		y: 10,
	},
};
