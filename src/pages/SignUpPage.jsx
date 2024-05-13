import { 
    Route,
    Routes, 
    useLocation,
    useNavigate, 
} from 'react-router-dom';
import { styles } from '../styles';
import { majors } from '../constants';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import CareerInterests from './CareerInterests';

import DatePicker from 'react-datepicker';
import { classification } from '../constants';
import { useState, useRef, lazy } from 'react';
import { citiesAndStates } from '../constants';
// import { user_icon, input_icon } from '../assets';
import AnimatedRoutes from '../components/AnimatedRoutes';
import { Button, Label, Col, FormGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import path from 'path';

const SignUpPage = () => {
    // let student = {};
    const location = useLocation();
    const major_keys = Object.keys(majors[0]);
    //The student form had to stay inside the SignUp component in order for the text fields to work properly, but you couldn't have that happening because of other components in the code who also need access to that variable, so you created multiple form obj variables with their respective change handlers, which should all assimilate into student in the end.
    
    
    const [formState, setFormState] = useState(true);
    const [form1, setForm1] = useState({
        college: '',
        major: '',
        classification: '',
        location: '',
        interests: ''
      });

    const { pathname } = location;
    // const pathname = window.location.pathname;

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setStudent({...student, [name]: value}); // This is what updates the form based on the student's selection by cloning the original empty form, and then replacing each of its keys/values with the name/value of each form input respectively.
    // } 

    // const handleSubmit = (e) => {
    //     // Since we are going to have multiple submitHander functions, In this function, we are meant to update the parent object with the values given by the user in this section of the page, with form1;

    //     e.preventDefault();
    //     console.log(student);  // Later going to contain code for submitting student details to the server
    // };

    const SignUp = () => {
        const formRef = useRef(); 
        
          
    
        // const [student, setStudent] = useState({
        //     college: '',
        //     major: '',
        //     classification: '',
        //     location: '',
        //     interests: ''
        //   });  // This could later be for tracking the student selection 
    
        const handleChange = ({ target: { name, value } }) => {
            setForm1((prevForm1) => ({ ...prevForm1, [name]: value })); 
        } 
    
        const handleSubmit = (e) => {
            // Since we are going to have multiple submitHander functions, In this function, we are meant to update the parent object with the values given by the user in this section of the page, with form1;
            e.preventDefault();
            // You will the below function twice, right here and on the careerInterests section, but in the following manner: setStudent({...student, ...form2}) 
            // setStudent({...form1});
            // console.log(student);  
            setFormState(!formState);
            console.log(pathname);
            // <CareerInterests />//
        };
    
        const [date, setDate] = useState(new Date());
        const [loading, setLoading] = useState(false);  // For when users will submit the form later on
    
        return (
            <AnimatedRoutes>
                <motion.div> 
                    <form
                        ref={formRef}
                        initialValues={form1} 
                        className="mt-5 flex flex-col mb-10 rounded-signup-form"
                        onSubmit={handleSubmit}
                    >
        
                        <label className={`${styles.sectionHeadText} flex flex-col mt-2`}>College</label>
                        <textarea
                            rows="1"
                            name="college"
                            value={form1.college}
                            onChange={handleChange}
                            placeholder="Enter college name here"
                            className='black-rounded-border text-control mb-4 py-4 px-6 placeholder:text-secondary rounded-2xl font-medium'
                        />
        
                        <label className={`${styles.sectionHeadText} flex flex-col mt-4 mb-2`}>Major</label>
                        <select name="major" className='black-rounded-border text-control mb-5 py-4 px-6' onChange={handleChange}>
                            <option className='text-secondary'>--Majors--</option>
                            {major_keys.map(major => (
                                <option value={major}>{major}</option>
                            ))}
                        </select>
                        
                        <label className={`${styles.sectionHeadText} flex flex-col mt-5 mb-2`}>School Year</label>
                        <select name="classification" className='black-rounded-border text-control mb-5 py-4 px-6' onChange={handleChange}>
                            <option className='text-secondary'>--Classification--</option>
                            {classification.map(grade => (
                                <option key={grade.id} value={grade.year}>{grade.year}</option>
                            ))}
                        </select>
        
                        <label for='location' className={`${styles.sectionHeadText} flex flex-col mt-5 mb-2`}>Location</label>
                        <select className='black-rounded-border text-control mb-7 py-4 px-6' name='location' id='location' onChange={handleChange}>
                            <option>Please select your city and state...</option>
                            {citiesAndStates.map(city => (
                                <option value={city}>{city}</option>
                            ))}
                        </select>
        
                        {/* <label className={`${styles.sectionHeadText} flex flex-col mt-5 mb-2`}>Date of Birth</label>
                        <div>
                            <DatePicker selected={date} onChange={(date) => setDate(date)} className='text-control mb-7 py-4 px-6'/>
                        </div> */}
        
                        <section className="xs:w-[250px] w-full mt-3">
                            <a href={"/CareerInterests"}>
                                <button
                                    type="submit"
                                    className="font-btn right-10 shadow-primary"
                                    
                                >
                                    <FontAwesomeIcon icon={faCircleArrowRight} className='fa-6x'/> 
                                </button>
                            </a>
                        </section> 
                    </form>
                </motion.div>
            </AnimatedRoutes> 
              
        )    
    };

    // const CareerInterests = () => {
    //     const [form2, setform2] = useState({
    //         interests: '',
    //     });

    //     const handleChange = (e) => {
    //         const { name, value } = e.target;
    //         setform2({...form2, [name]: value}); // This is what updates the form based on the student's selection by cloning the original empty form, and then replacing each of its keys/values with the name/value of each form input respectively.           
    
    //     };

    //     const handleSubmit = (e) => {
    //         // Since we are going to have multiple submitHander functions, In this function, we are meant to update the parent object with the values given by the user in this section of the page, with form1;
    //         e.preventDefault();
    //         setStudent({...student, ...form2});// You will call this function twice, right here and on the careerInterests section, but in the following manner: setStudent({...student, ...form2}) 
    //         console.log(student);  // Later going to contain code for submitting student details to the server
    //     };

    //     return (
    //         <AnimatedRoutes>
    //             <motion.div>
    //                 <form
    //                     initialValues={form2} 
    //                     className="mt-5 flex flex-col mb-10 rounded-signup-form"
    //                     onSubmit={handleSubmit}
    //                 >
    //                     <label className={`${styles.sectionHeadText} flex flex-col mt-5 mb-2`}>Pick your industry of interest</label>
    //                     <select name="interests" className='black-rounded-border text-control mb-5 py-4 px-6' onChange={handleChange}>
    //                         <option className='text-secondary'>--Industry--</option>
    //                         {/* {majors[0][student.major].map(interests => ( // mapping through the nested fields in majors based on user's selected major
    //                             <option value={interests}>{interests}</option>
    //                         ))} */}
    //                         {student.major.map(interests => ( // mapping through the nested fields in majors based on user's selected major
    //                             <option value={interests}>{interests}</option>
    //                         ))}
    //                     </select>
                        
    //                     <label className={`${styles.sectionHeadText} flex flex-col mt-5 mb-2`}>Other</label>
    //                     <input className='black-rounded-border text-control mb-5 py-4 px-6'/>

    //                     <section className="xs:w-[250px] w-full button-container">    
    //                         <Tilt className="xs:w-[250px] w-full mt-3">
    //                             <button
    //                                 type="submit"
    //                                 className="right-10 shadow-primary"
    //                             >
    //                                 <FontAwesomeIcon icon={faCircleArrowLeft} className='fa-6x' style={{
    //                                     color: "#8832BE",
    //                                 }}/> 
    //                             </button>
    //                         </Tilt>
    //                         <button
    //                             type="submit"
    //                             className="text-control bg-[#8832BE] py-7 px-10 w-fit text-white font-bold shadow-md shadow-primary rounded-2xl"
    //                         >
    //                         {/* {loading ? 'Sending...' : 'Send'} */}Finish
    //                         </button> 
    //                     </section>
    //                     {/* <div>
                            
    //                     </div> */}
                        
    //                 </form> 
    //             </motion.div>
    //         </AnimatedRoutes>
    //     )
    // };

    //parent component return code
    if(formState) {   
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 left-side-div">

                        {/* <div className="flex flex-col justify-center items-center mt-5">
                            <div className="w-5 h-5 rounded-full bg-[#686dff]"/>
                            <div className="w-1 sm:h-80 h-40 violet-gradient"/>
                        </div> */}
                        
                        <span className='designed-signup-header text-white'>TalentBridge</span>
                        <section className='mb-8'>
                            <h1 className={`${styles.sectionHeadText} text-white`}>Personal details</h1>
                            <p className={`text-control text-white`}>Let's know more about you</p>
                        </section> 

                        <section className='mt-8'>
                            <h1 className={`${styles.sectionHeadText} text-white`}>Career Interests</h1>
                            <p className={`text-control text-white`}>Tell us more about your career goals</p>
                        </section>   
                    </div>
                    {/* <AnimatedRoutes> */}
                        <div className="col-md-4 right-side-div grid">
                            <div className=''>
                                <h1 className='designed-signup-header'>Basic Info</h1>
                                <h2 className='mt-5 designed-subheader'>We'd love to learn more about you...</h2>
                                <p className='text-[#000000] mb-5'>________________________________________________________________________________________________________________________________________________________________________________________________</p>
                                <div className=''>
                                    {/* <CareerInterests /> */}
                                    <SignUp key="form1" />
                                    {/* <Routes>
                                        <Route path="/" element= />
                                    </Routes> */}
                                </div> 
                            </div>  
                        </div>
                    {/* </AnimatedRoutes> */}
                </div>
            </div>   
            
        )
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 left-side-div">

                    {/* <div className="flex flex-col justify-center items-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-[#686dff]"/>
                        <div className="w-1 sm:h-80 h-40 violet-gradient"/>
                    </div> */}
                    
                    <span className='designed-signup-header text-white'>TalentBridge</span>
                    <section className='mb-8'>
                        <h1 className={`${styles.sectionHeadText} text-white`}>Personal details</h1>
                        <p className={`text-control text-white`}>Let's know more about you</p>
                    </section> 

                    <section className='mt-8'>
                        <h1 className={`${styles.sectionHeadText} text-white`}>Career Interests</h1>
                        <p className={`text-control text-white`}>Tell us more about your career goals</p>
                    </section>   
                </div>
                
                <AnimatedRoutes>
                    <div className="col-md-4 right-side-div grid">
                        <div className=''>
                            <h1 className='designed-signup-header'>Basic Info</h1>
                            <h2 className='mt-5 designed-subheader'>We'd love to learn more about you...</h2>
                            <p className='text-[#000000] mb-5'>________________________________________________________________________________________________________________________________________________________________________________________________</p>
                            <div className=''>
                                <CareerInterests key="form2" firstform={form1}/>
                                {/* <SignUp /> */}
                                {/* <Routes>
                                    <Route path="/" element= />
                                </Routes> */}
                            </div>
                        </div>  
                    </div>
                </AnimatedRoutes>
            </div>
        </div>    
    )

};

export default SignUpPage;