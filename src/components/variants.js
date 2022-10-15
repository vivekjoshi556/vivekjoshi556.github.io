export const skills = [
    {name: "C++ Programming", "src": "/img/cpp.png"},
    {name: "C Programming", "src": "/img/c.png"},
    {name: "Javascript", "src": "/img/js.png"},
    {name: "Python", "src": "/img/python.png"},
    {name: "Php", "src": "/img/php.png"},
    {name: "Git", "src": "/img/git.png"},
    {name: "Github", "src": "/img/github.png"},
    {name: "ThunderClient", "src": "/img/thunderclient.png"},
    {name: "Laravel", "src": "/img/laravel.svg"},
    {name: "Reactjs", "src": "/img/reactjs.png"},
    {name: "ExpressJS", "src": "/img/expressjs.png"},
    {name: "MySQL", "src": "/img/mysql.png"},
    {name: "Machine Learning", "src": "/img/ml_dark.png"}
];

export const templateVariant = { 
    initial: {}, 
    animate: {
        transition: {
            type: "tween",
            when: "beforeChildren",
            delayChildren: 1,
            staggerChildren: 0.1
        }
    }, 
    exit: {}
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
            type: "tween",
            delay: 0.5,
            duration: 0.4,
            when: "beforeChildren",
            staggerChildren: 0.05
        }
    }, 
    exit: {
        x: -10,
        opacity: 0,
        transition: {
            type: "tween",
            when: "afterChildren",
            duration: 0.4,
        }
    }
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
    }
};