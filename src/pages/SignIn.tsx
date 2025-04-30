import React, {useState, useEffect} from "react";
import Loader from "./Loader";
import SignupForm from "../components/SignupForm";
import Topbar from "../components/Topbar";
import MultiStepForm from "../components/multisteps";
import { NavLink } from "react-router-dom";
import { FaApple, FaGoogle } from "react-icons/fa";
import face from '../images/icon-face.svg';

const SignIn: React.FC = () => {
    return (
        <>
        <section className="w-full float-left">
          <Topbar/>
          <div className="body-contentsd-div01 w-full float-left">
            <div className='name-div05 multis-div relative'>
               <div className='inside-line01 w-100'>

              </div>
              <h1 className='text-center mt-11 geattings-st w-96 mx-auto'> Face ID for faster </h1>

              <p className="text-center we-texts mt-3"> Enable Face ID to log in <br/>
              faster and more securely </p>

              <img src={face} alt="logo" className="mx-auto text-center mt-30"/>

              <div className="w-full">
                 <button type="button" className="btn btn-seubmits w-full mx-auto mb-4 mt-20">  Enable face ID </button>
                 <NavLink to="/signup" className="mt-4 login-links"> Log in with Email </NavLink>
              </div>
            </div>
            
            
          </div>
        </section>
        </>
    ) ;
  };
export default SignIn;