import React from 'react';
import { NavLink } from "react-router-dom";
import sucs from '../images/sucs.svg';
import { IoCloseSharp , IoArrowForward } from "react-icons/io5";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";

const DepositSuccess: React.FC = () => {

    return (
        <>
        <section className="w-full float-left">
          <div className="body-contentsd-div01 w-full float-left">
            <div className='name-div05 multis-div relative'>
            <NavLink to="/" className="close-btn absolute top-0"> <IoCloseSharp /> </NavLink>
             <div className='chooser-content px-4 mx-auto succsd-divb'>
                 
                  <img src={sucs} alt="wal" className='block mx-auto text-center'/>
                  <h2 className='text-center mt-11 chooset w-full mb-4 mx-auto'> Whoo! Your funds are ready to go. </h2>
                  <p className='sel-w text-center mt-7 mx-auto'> Congratulations! Your funds are now available for transfer. </p>

                  <h1 className='text-center pric-tags mt-8'>+ $22,500.00 </h1>
                  <p className='sel-w text-center mt-3 incsrice mx-auto'> Increase in available Kashu balance</p>
                  
                  


                
                  
                  <NavLink to="/depositselect" className='w-full mt-11 add-cre flex items-center justify-center mt-4'> <AiOutlinePlus /> Convert more credit  </NavLink>
                  <NavLink to="/depositfailed" className='w-full new-submit add-cre flex items-center justify-center mt-4'> Withdraw or Move Funds <IoArrowForward /> </NavLink>
                  
              </div>
             


              
            </div>
            
            
          </div>
        </section>
        </>
    ) ;
  };
export default DepositSuccess;