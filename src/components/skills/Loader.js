const CLoader = [
    {"type": "skill", "msg": "C Language", "waitFor": "1000"},
];

const CppLoader = [
    {"type": "skill", "msg": "C++ Language", "waitFor": "1000"},
    {"type": "dependency", "msg": "Loading Concepts: Functions, Loops, Conditionals - { 30 mins }", "waitFor": "500"},
    {"type": "learning", "msg": "STL - { With Time }", "waitFor": "1500"},
    {"type": "learning", "msg": "OOPs - { lifetime }", "waitFor": "2000"},
    {"type": "ongoing", "msg": "Threading - { On Going Topic }", "waitFor": "1000"},
];

const JSLoader = [
    {"type": "skill", "msg": "JS Language", "waitFor": "1000"},
    {"type": "dependency", "msg": "Loading Concepts: Functions, Loops, Conditionals - { 30 mins }", "waitFor": "500"},
];

const PythonLoader = [
    {"type": "skill", "msg": "Python Language", "waitFor": "1000"},
    {"type": "dependency", "msg": "Loading Concepts: Functions, Loops, Conditionals - { 30 mins }", "waitFor": "500"},

];

const PHPLoader = [
    {"type": "skill", "msg": "PHP Language", "waitFor": "1000"},
    {"type": "dependency", "msg": "Loading Concepts: Functions, Loops, Conditionals - { 30 mins }", "waitFor": "500"},
];

const GitLoader = [
    {"type": "skill", "msg": "Git", "waitFor": "1000"},
];

const GithubLoader = [
    {"type": "skill", "msg": "Github", "waitFor": "1000"},
];

const ThunderClientLoader = [
    {"type": "skill", "msg": "ThunderClient", "waitFor": "1000"},
];

const LaravelLoader = [
    {"type": "skill", "msg": "Laravel Framework", "waitFor": "1000"},
];

const ReactJSLoader = [
    {"type": "skill", "msg": "Reactjs", "waitFor": "1000"},
];

const ExpressJSLoader = [
    {"type": "skill", "msg": "ExpressJS", "waitFor": "1000"},
];

const MysqlLoader = [
    {"type": "skill", "msg": "Mysql", "waitFor": "1000"},
];

const MLLoader = [
    {"type": "skill", "msg": "Machine Learning", "waitFor": "1000"},
];

export const skills = [
    {name: "C Programming", "src": "/img/c.png", "loader": CLoader},
    {name: "C++ Programming", "src": "/img/cpp.png", "loader": CppLoader},
    {name: "Javascript", "src": "/img/js.png", "loader": JSLoader},
    {name: "Python", "src": "/img/python.png", "loader": PythonLoader},
    {name: "Php", "src": "/img/php.png", "loader": PHPLoader},
    {name: "Git", "src": "/img/git.png", "loader": GitLoader},
    {name: "Github", "src": "/img/github.png", "loader": GithubLoader},
    {name: "ThunderClient", "src": "/img/thunderclient.png", "loader": ThunderClientLoader},
    {name: "Laravel", "src": "/img/laravel.svg", "loader": LaravelLoader},
    {name: "Reactjs", "src": "/img/reactjs.png", "loader": ReactJSLoader},
    {name: "ExpressJS", "src": "/img/expressjs.png", "loader": ExpressJSLoader},
    {name: "MySQL", "src": "/img/mysql.png", "loader": MysqlLoader},
    {name: "Machine Learning", "src": "/img/ml_dark.png", "loader": MLLoader}
];