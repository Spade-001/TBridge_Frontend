import React from 'react';
import { useState } from 'react';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { Button, Label, Col, FormGroup } from 'reactstrap';

const LandingPage = () => {
  const [page, setPage] = useState("landing");

  return (
    <div className='landing body'>
      <div className='center' style={{display: 'flex', gap: '35%',}}>
        <p style={{ fontSize: 150, color: 'white' }}>Welcome to <br/>TalentBridge</p>
        {/* <div style={{justifyContent: "space-between"}}> */}
          <div style={{transform: `translate(0%, 30%)`}}>
            <section>
              <button
                style={{ fontSize: 35 }} 
                title="Log-in"
                className='bg-[#DA22FF] rounded-3xl px-14 py-4 text-white shadow-md font-bold mb-7'
                onClick={() => setPage("login")}
              >
                Log-in
              </button>
            </section>
            <section>
              <button
                style={{ fontSize: 35 }} 
                className='bg-[#DA22FF] rounded-3xl px-14 py-4 text-white shadow-md font-bold '
                onClick={() => setPage("signup")}
              >
                Signup
              </button>
            </section>
          </div>
        {/* </div> */}
      </div> 
    
    {page === "signup" && 
      // <AnimatePresence initial={false} mode='wait '>
        <SignUpPage />
      // </AnimatePresence>
    }
    
    {page === "login" && 
      <LoginPage />
    }
    </div>
  )
};

export default LandingPage;
