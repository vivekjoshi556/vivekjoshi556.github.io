const CLoader = [{ type: 'skill', msg: 'C Language', waitFor: '1000' }];

const CppLoader = [
	{ type: 'skill', msg: 'C++ Language', waitFor: '1000' },
	{
		type: 'dependency',
		msg: 'Loading Concepts: Functions, Loops, Conditionals - { 30 mins }',
		waitFor: '500',
	},
	{ type: 'learning', msg: 'STL - { With Time }', waitFor: '1500' },
	{ type: 'learning', msg: 'OOPs - { With Time }', waitFor: '2000' },
	{
		type: 'learning',
		msg: 'Threading - { This module is in build phase right now. }',
		waitFor: '1000',
	},
	{
		type: 'status',
		msg: 'All the installed modules are currently in memory.',
		waitFor: '1000',
	},
	{
		type: 'link',
		msg: 'This skill is part of <a target = "_blank" href = "https://google.com" class = "underline"> SI Program</a>.',
		waitFor: '500',
	},
];

const JSLoader = [
	{ type: 'skill', msg: 'JS Language', waitFor: '1000' },
	{
		type: 'dependency',
		msg: 'Loading Concepts: Functions, Loops, Conditionals - { 30 mins }',
		waitFor: '500',
	},
];

const PythonLoader = [
	{ type: 'skill', msg: 'Python Language', waitFor: '1000' },
	{
		type: 'dependency',
		msg: 'Loading Concepts: Functions, Loops, Conditionals - { 30 mins }',
		waitFor: '500',
	},
	{
		type: 'learning',
		msg: 'Learning Basic DS: List, Tuple, Dict, Sets - { 1:30 hrs }',
		waitFor: '800',
	},
];

const PHPLoader = [
	{ type: 'skill', msg: 'PHP Language', waitFor: '1000' },
	{
		type: 'dependency',
		msg: 'Loading Concepts: Functions, Loops, Conditionals - { 30 mins }',
		waitFor: '500',
	},
];

const GitLoader = [
	{ type: 'skill', msg: 'Git', waitFor: '1000' },
	{ type: 'learning', msg: 'Pull Requests', waitFor: '1500' },
	{ type: 'learning', msg: 'Merge Conflicts', waitFor: '1000' },
	{ type: 'learning', msg: 'Github Pages', waitFor: '1500' },
];

const GithubLoader = [
	{ type: 'skill', msg: 'Github', waitFor: '1000' },
	{
		type: 'dependency',
		msg: 'Loading Basics of Git - { 30 mins }',
		waitFor: '1000',
	},
	{ type: 'learning', msg: 'Pull Requests', waitFor: '1500' },
	{ type: 'learning', msg: 'Merge Conflicts', waitFor: '1000' },
	{ type: 'learning', msg: 'Github Pages', waitFor: '1500' },
	{
		type: 'link',
		msg: 'This skill is part of <a target = "_blank" href = "https://google.com" class = "underline"> SI Program</a>.',
		waitFor: '500',
	},
];

const ThunderClientLoader = [
	{ type: 'skill', msg: 'ThunderClient', waitFor: '1000' },
	{
		type: 'dependency',
		msg: 'Checking for Backend language or frameworks.',
		waitFor: '1000',
	},
	{
		type: 'msg',
		msg: '2 related frameworks found: Laravel & ExpressJS.',
		waitFor: '500',
	},
	{
		type: 'learning',
		msg: 'Sending requests & Settings Header',
		waitFor: '1000',
	},
	{
		type: 'learning',
		msg: 'Configuring Environment For Projects.',
		waitFor: '1000',
	},
	{
		type: 'link',
		msg: 'This skill is part of <a target = "_blank" href = "https://google.com" class = "underline"> SI Program</a>.',
		waitFor: '500',
	},
];

const LaravelLoader = [
	{ type: 'skill', msg: 'Laravel Framework', waitFor: '1000' },
	{ type: 'dependency', msg: 'Loading Php - { 30 mins }', waitFor: '1000' },
	{ type: 'learning', msg: 'Request Lifecycle', waitFor: '1000' },
	{ type: 'learning', msg: 'Understanding MVC Architecture', waitFor: '1000' },
	{ type: 'learning', msg: 'Blade Templating', waitFor: '1000' },
	{ type: 'learning', msg: 'Routing', waitFor: '1000' },
	{
		type: 'learning',
		msg: 'Databases: Migration, Seeding, & Pagination',
		waitFor: '1000',
	},
	{
		type: 'learning',
		msg: 'Eloquent ORM - Models, CRUD, Soft & Hard Deletes, Mutators, Relationships, ...',
		waitFor: '1000',
	},
	{ type: 'learning', msg: 'Writing Middleware', waitFor: '1000' },
	{ type: 'learning', msg: 'Authentication & Authorization', waitFor: '1000' },
	{
		type: 'status',
		msg: 'Core Archived. Required Modules Still In Cache.',
		waitFor: '500',
	},
];

const ReactJSLoader = [{ type: 'skill', msg: 'ReactJS', waitFor: '1000' }];

const ExpressJSLoader = [{ type: 'skill', msg: 'ExpressJS', waitFor: '1000' }];

const MysqlLoader = [{ type: 'skill', msg: 'Mysql', waitFor: '1000' }];

const MLLoader = [{ type: 'skill', msg: 'Machine Learning', waitFor: '1000' }];

const NodeJSLoader = [
	{ type: 'skill', msg: 'NodeJS Framework', waitFor: '1000' },
	{
		type: 'dependency',
		msg: 'Loading JS Concepts: Async-Await, Promises, Callbacks, ES6+ Syntax',
		waitFor: '500',
	},
	{ type: 'learning', msg: 'NodeJS Event Loop', waitFor: '1000' },
	{ type: 'learning', msg: 'Buffers Library', waitFor: '1000' },
	{ type: 'learning', msg: 'File System(fs) Library', waitFor: '1000' },
];

const AWSLoader = [
	{ type: 'skill', msg: 'Amazon Web Services', waitFor: '1000' },
	{ type: 'learning', msg: 'Storage Services: S3, EBS, EFS', waitFor: '1000' },
	{ type: 'learning', msg: 'Compute Service: EC2', waitFor: '1000' },
	{
		type: 'learning',
		msg: "Networking: VPC & it's components ...",
		waitFor: '1000',
	},
	{
		type: 'learning',
		msg: 'Cost Consideration for various services',
	},
];

export const skills = [
	{ name: 'C Programming', src: '/img/c.png', loader: CLoader },
	{ name: 'C++ Programming', src: '/img/cpp.png', loader: CppLoader },
	{ name: 'Javascript', src: '/img/js.png', loader: JSLoader },
	{ name: 'Python', src: '/img/python.png', loader: PythonLoader },
	{ name: 'Php', src: '/img/php.png', loader: PHPLoader },
	{ name: 'NodeJS', src: '/img/nodejs.svg', loader: NodeJSLoader },
	{ name: 'Laravel', src: '/img/laravel.svg', loader: LaravelLoader },
	{ name: 'Reactjs', src: '/img/reactjs.png', loader: ReactJSLoader },
	{ name: 'MySQL', src: '/img/mysql.png', loader: MysqlLoader },
	{ name: 'AWS', src: '/img/aws.png', loader: AWSLoader },
	{ name: 'ExpressJS', src: '/img/expressjs.png', loader: ExpressJSLoader },
	{ name: 'Git', src: '/img/git.png', loader: GitLoader },
	{ name: 'Github', src: '/img/github.png', loader: GithubLoader },
	{ name: 'Machine Learning', src: '/img/ml_dark.png', loader: MLLoader },
	{
		name: 'ThunderClient',
		src: '/img/thunderclient.png',
		loader: ThunderClientLoader,
	},
];
