import React from 'react';
import { NavLink } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import wallet from '../images/wallets.svg';
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";

const DepositEmpty: React.FC = () => {
    return (
        <>
        <section className="w-full float-left">
          <div className="body-contentsd-div01 w-full float-left">
            <div className='name-div05 min-ho multis-div relative'>
            <NavLink to="/" className="close-btn absolute top-0"> <IoCloseSharp /> </NavLink>
              <h1 className='text-center mt-11 geattings-st w-96 mx-auto'> Convert Credit
              to Cash </h1>
              

              <div className="walltes-div01 mx-auto mt-8 px-8 py-8">
                 <img src={wallet} alt="wal" className="mx-auto text-center"/>
                 <h3 className='mt-8'> Add a credit card </h3>
                 <p className='mt-3 add-t'> Add a card to start converting your available credit limit into spendable cash. </p>
                 <NavLink to="/depositselect" className='w-full add-cre flex items-center justify-center mt-4'> <FiPlus/> Add a Credit Card</NavLink>
              </div>

              <NavLink to="/" className="text-center fixed need-text items-center w-96 mx-auto  we-texts text-center flex justify-center mt-8"> <FaRegCircleQuestion/> Need help? Talk to support </NavLink>


              
            </div>
            
            
          </div>
        </section>
        </>
    ) ;
  };
export default DepositEmpty;