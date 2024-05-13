import { useState } from "react";
import { styles } from '../styles';
import { majors } from '../constants';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import AnimatedRoutes from '../components/AnimatedRoutes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';


const CareerInterests = ({ firstform }) => {
    const major_keys = Object.keys(majors[0]);

    const [student, setStudent] = useState({
        // The line of code below is just a testing statement for choosing a field that is associated with the major chosen previously
        major: majors[0][major_keys[0]],
    });  // This is the final student object from data given on both section of the page;

    // const [finalform, setFinalForm]

    const [form2, setform2] = useState({
        ...firstform,
        interests: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setform2({...form2, [name]: value}); // This is what updates the form based on the student's selection by cloning the original empty form, and then replacing each of its keys/values with the name/value of each form input respectively.           

    };

    // Later going to contain code for submitting student details to the server
    const handleSubmit = (e) => {
        // Since we are going to have multiple submitHander functions, In this function, we are meant to update the parent object with the values given by the user in this section of the page, with form1;
        e.preventDefault();
        // You will call this function twice, right here and on the careerInterests section, but in the following manner: setStudent({...student, ...form2}) 
        // setStudent({...student, ...form2});
        // console.log(student);  
    };

    return (
        // <AnimatedRoutes>
            <motion.div>
                <form
                    initialValues={form2} 
                    className="mt-5 flex flex-col mb-10 rounded-signup-form"
                    onSubmit={handleSubmit}
                >
                    <label className={`${styles.sectionHeadText} flex flex-col mt-5 mb-2`}>Pick your industry of interest</label>
                    <select name="interests" className='black-rounded-border text-control mb-5 py-4 px-6' onChange={handleChange}>
                        <option className='text-secondary'>--Industry--</option>
                        {/* {majors[0][student.major].map(interests => ( // mapping through the nested fields in majors based on user's selected major
                            <option value={interests}>{interests}</option>
                        ))} */}
                        {student.major.map(interests => ( // mapping through the nested fields in majors based on user's selected major
                            <option value={interests}>{interests}</option>
                        ))}
                    </select>
                    
                    <label className={`${styles.sectionHeadText} flex flex-col mt-5 mb-2`}>Other</label>
                    <input className='black-rounded-border text-control mb-5 py-4 px-6'/>

                    <section className="xs:w-[250px] w-full button-container">    
                        <Tilt className="xs:w-[250px] w-full mt-3">
                            <button
                                type="submit"
                                className="right-10 shadow-primary"
                            >
                                <FontAwesomeIcon icon={faCircleArrowLeft} className='fa-6x' style={{
                                    color: "#8832BE",
                                }}/> 
                            </button>
                        </Tilt>
                        <button
                            type="submit"
                            className="text-control bg-[#8832BE] py-7 px-10 w-fit text-white font-bold shadow-md shadow-primary rounded-2xl"
                        >
                        {/* {loading ? 'Sending...' : 'Send'} */}Finish
                        </button> 
                    </section>
                </form> 
            </motion.div>
        // </AnimatedRoutes>
    )
};

export default CareerInterests;