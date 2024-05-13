import { styles } from '../styles';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

const LoginPage = () => {
    const Login = () => {
        const formRef = useRef();
        const [username, setUserName] = useState('');
        const [password, setPassword] = useState('');

        const handleChange = (e) => {
            // const { name, value } = e.target;
            // setForm({...form, [name]: value});
        }  

        const handleSubmit = (values) => {
            console.log(values); // Later going to contain code for verifying whether user details already exists in the database
        };


        return (
            <motion.div className=""> 
                <h1 className='designed-login-header'>Welcome back!!!</h1>
                <h2 className='mt-5 text-center designed-subheader'>Please enter your login details</h2>

                <form
                    ref={formRef} 
                    className="flex flex-col bg-indigo-200 mb-10 rounded-login-form"
                    onSubmit={handleSubmit}
                >

                    <label className={`${styles.sectionHeadText} flex flex-col mt-2`}>Username</label>
                    <textarea
                        rows="2"
                        name="college"
                        value={username}
                        onChange={handleChange}
                        placeholder="Enter your username here"
                        className='text-control mb-4 py-4 px-6 placeholder:text-secondary rounded-lg font-medium'
                    />

                    <label className={`${styles.sectionHeadText} flex flex-col mt-4 mb-2`}>Password</label>
                    <textarea
                        rows="2"
                        name="college"
                        value={password}
                        onChange={handleChange}
                        placeholder="Enter your password here"
                        className='text-control mb-4 py-4 px-6 placeholder:text-secondary rounded-lg font-medium'
                    />
                    
                </form>

                <Tilt className="xs:w-[250px] w-full mx-auto pt-5">
                    <button
                        type="submit"
                        className="text-control  bg-indigo-400 py-7 px-10 w-fit text-white font-bold shadow-md shadow-primary rounded-lg"
                    >
                    {/* {loading ? 'Sending...' : 'Send'} */}Login
                    </button>
                </Tilt> 

            </motion.div>
        )
    };

    return (
        <div className="rounded box-div">
            <Login />
        </div>
    )
};

export default LoginPage;