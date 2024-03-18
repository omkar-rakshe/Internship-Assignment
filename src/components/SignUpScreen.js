import React, { useEffect, useState } from "react";
import validator from 'validator';
import {redirect, useNavigate} from 'react-router-dom';


const SignUpScreen = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password:"",
        confirmPassword: "",
        name:'',
        termAccepted: false
    });

    const [error, setError] = useState({})
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newErrors ={};
        if(!formData.username.trim()){
            newErrors.username = 'Username is required'
        }
        if (!validator.isEmail(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (formData.password !== formData.confirmPassword ){
            newErrors.confirmPassword ='Password does not match'
        };
        if(!formData.termAccepted){
            newErrors.termAccepted = 'Please accept terms and condition';
        }
        if (Object.keys(newErrors).length > 0){
            setError(newErrors);
        } else {
            setTimeout(() => {
                setSuccessMessage('Signup successful! Welcome email sent.')
            },1000)
            // setTimeout(() => {
            //     redirect('/post');
            // }, 2000);
            navigate('/post')
        }
    }
    

    // useEffect(() => {
    //     if (Object.keys(newErrors).length > 0){
    //         setError(newErrors);
    //     } else {
    //         setTimeout(() => {
    //             setSuccessMessage('Signup successful! Welcome email sent.')
    //         },1000)
    //         // setTimeout(() => {
    //         //     redirect('/post');
    //         // }, 2000);
    //         navigate('/post')
    //     }
    // },[])
    return (
        <div >
            <div className="my-5 justify-center items-center">
            <div>
            <h2 className="text-3xl text-center">Sign Up Page</h2>
            </div>
            <form className="flex flex-col space-y-2 py-8 items-center shadow-cyan-500/50 mt-5 space-x-4 shadow-xl" onSubmit={handleSubmit}>
                <label className="text-xl">Username:</label>
                <input className="w-96 rounded-lg border-2 px-3 hover:border-sky-400"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                {error.username && <span className="p-2 mb-4 w-96 text-center text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">{error.username}</span>}
                
                <label className="text-xl">Email:</label>
                <input className="w-96 rounded-lg border-2 px-3 hover:border-sky-400 "
                type="email"
                placeholder="YourName@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
                {error.email && <span className="p-2 mb-4 w-96 text-center text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert" >{error.email}</span>}
                

                
                <label className="text-xl">Password:</label>
                <input className="w-96 rounded-lg border-2 px-3 hover:border-sky-400 "
                type="password"
                placeholder="********"
                name="password"
                value={formData.password}
                onChange={handleChange}
                />

                <label className="text-xl">Confirm Password:</label>
                <input className="w-96 rounded-lg border-2 px-3 hover:border-sky-400 "
                type="password"
                name="confirmPassword"
                placeholder="********"
                value={formData.confirmPassword}
                onChange={handleChange}
                />
                {error.confirmPassword && <span className="relative block p-3 mb-4 text-base leading-5 text-white bg-red-500 rounded-lg opacity-100 font-regular">{error.confirmPassword}</span>}
                
                <label className="text-xl">Name:</label>
                <input className="w-96 rounded-lg border-2 px-3 hover:border-sky-400 "
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                />
                
                <div>
                <input className="rounded-lg border-2 hover:border-sky-400 "
                    type="checkbox"
                    name="TermsAccepted"
                    checked={formData.termAccepted}
                    onChange={(e) => setFormData({...formData, termAccepted: e.target.checked})}
                />
                <label className="text-l px-2">I accept the terms and conditions</label>
                {error.termAccepted && <span className="p-2 block mb-4 w-96 text-center text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">{error.termAccepted}</span>}
                </div>

                <div>
                <button className="px-8 py-2 mb-3 text-center bg-sky-400 text-white text-xl mt-2 shadow-lg rounded-full hover:bg-sky-500" type="submit">Sign Up</button>
                {successMessage && <div className="p-2 mb-4 w-96 text-center text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert" >{successMessage}</div>}
                </div>
            </form>

            </div>
        </div>
    )
};

export default SignUpScreen;