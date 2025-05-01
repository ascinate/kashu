import React from 'react';
import { NavLink } from "react-router-dom";
import bank from '../images/bank.svg';
import { IoCloseSharp , IoArrowForward } from "react-icons/io5";

const DepositFailed: React.FC = () => {

    return (
        <>
        <section className="w-full float-left">
          <div className="body-contentsd-div01 w-full float-left">
            <div className='name-div05 multis-div relative'>
            <NavLink to="/" className="close-btn absolute top-0"> <IoCloseSharp /> </NavLink>
             <div className='chooser-content px-4 mx-auto succsd-divb'>
                  <img src={bank} alt="wal" className='block mx-auto text-center'/>
                  <h2 className='text-center mt-4 chooset w-full  mx-auto'>Uh oh! Something went wrong. </h2>
                  <p className='sel-w text-center mt-7 mx-auto'> Your transaction failed. </p>
                  
                  <NavLink to="/" className='w-full mb-9 mt-11  add-cre flex items-center justify-center mt-4'> Contact Support  <IoArrowForward /> </NavLink>
                  
              </div>
            </div>
          </div>
        </section>
        </>
    ) ;
  };
export default DepositFailed;