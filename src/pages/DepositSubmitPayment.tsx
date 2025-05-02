import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import masc from '../images/apple.svg';
import { IoCloseSharp , IoArrowForward } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";

const DepositSubmitPayment: React.FC = () => {

    const [isChecked, setIsChecked] = useState<boolean>(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    };
    return (
        <>
        <section className="w-full float-left">
          <div className="body-contentsd-div01 w-full float-left">
            <div className='name-div05 multis-div relative'>
            <NavLink to="/depositselect" className="bac-btn absolute top-0"> <FaArrowLeft/> </NavLink>
            <NavLink to="/" className="close-btn absolute top-0"> <IoCloseSharp /> </NavLink>
             <div className='chooser-content px-4 mx-auto'>
                  <h2 className='text-center mt-11 chooset w-full mb-4 mx-auto'> Confirm the Details </h2>
                  <p className='sel-w text-center mt-3 mx-auto'> Please take a moment to ensure the
                  amounts and credit card details are correct. </p>

                  <h1 className='text-center pric-tags mt-8'>$25,000.00 </h1>
                  <h3 className='text-center amount-text mt-4'> Amount to be charged on card </h3> 
                  
                  <div className='body-pr'>
                      <div className="relative sp-border mt-4 mb-5 bg-white flex items-center px-4 py-4 cm-card01">
                              <span className='img-divb'>  <img src={masc} alt="wal"/> </span>
                              <h5 className='text-start pl-2'>
                              Apple Card
                              <span className='block'> Mastercard 8490 </span>
                              </h5>
                      </div>


                      <table className="table-fixed tabd-t w-full">
                        <thead>
                            <tr>
                            <th></th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                              <td>Fee</td>
                              <td> <strong> 10% </strong> </td>
                            </tr>
                            <tr>
                              <td>Fee Cost</td>
                              <td> <strong> $2,500 </strong> </td>
                            </tr>
                            <tr>
                              <td>Total available funds after fees</td>
                              <td> <strong> $22,500 </strong> </td>
                            </tr>
                            
                        </tbody>
                      </table>
                  </div>
                  
                <div className='footer-deposide fixed'>
                    <label className='text-start mt-20 block'>
                      <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleChange}
                      className='w-4 h-4 mr-3 mt-2 text-blue-600 bg-gray-100 border-gray-300 rounded-sm'
                      />
                      By submitting payment below I have read and agree to <strong> Terms & Conditions. </strong>
                    </label>

                  <NavLink to="/depositsuccess" className='w-full new-submit add-cre flex items-center justify-center mt-4'> Submit Payment <IoArrowForward /> </NavLink>
                </div>   

              </div>
              


              
            </div>
            
            
          </div>
        </section>
        </>
    ) ;
  };
export default DepositSubmitPayment;