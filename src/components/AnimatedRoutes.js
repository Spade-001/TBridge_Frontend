import React from "react";
import { 
    Route,
    Routes, 
    useLocation, 
} from 'react-router-dom';
import { motion } from 'framer-motion';

const animations = {
    initial: {opacity: "0%", x: "100%"},
    animate: {opacity: "100%", x: "0%"}, /*Changing the component's opacity as we're switching, moving it along the x axis as well*/ 
    exit: {opacity: "0%", x: "-100%"} /*For moving previous component to the left side of the screen*/
}

const AnimatedRoutes = ({ children }) => {
//     const location = useLocation();

    return (
        <motion.div 
            variants={animations} 
            initial="initial" /*passing the properties from the above animation obj as the value for this motion.div prop and the ones below it.*/ 
            animate="animate" 
            exit="exit"
            transition={{duration: 1.5, ease: "easeOut"}}
        >
            {children}
        </motion.div>
//         <div>
//             <Routes>
//                 <Route path="/" element=
//             </Routes>
//         </div>
    );
};

export default AnimatedRoutes;