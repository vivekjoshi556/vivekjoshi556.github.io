const containerVariant = {
    init: {
        x: -10,
        opacity: 0,
    }, 
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.5,
            when: "beforeChildren"
        }
    }, 
    exit: {
        y: 5,
        opacity: 0
    }
};

export default containerVariant;