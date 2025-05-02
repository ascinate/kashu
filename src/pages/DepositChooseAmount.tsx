import React, { useState } from 'react';
import { NavLink , useNavigate } from "react-router-dom";
import masc from '../images/apple.svg';
import { IoCloseSharp , IoArrowForward} from "react-icons/io5";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const DepositChooseAmount: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue.trim() || isNaN(Number(inputValue))) {
      navigate('/depositsubmitpayment'); 
    } else {
      console.log('Valid number:', inputValue);
    }
  };

    return (
        <>
        <section className="w-full float-left">
          <div className="body-contentsd-div01 w-full float-left">
            <div className='name-div05 multis-div relative'>
            <NavLink to="/depositselect" className="bac-btn absolute top-0"> <FaArrowLeft/> </NavLink>
            <NavLink to="/" className="close-btn absolute top-0"> <IoCloseSharp /> </NavLink>
             <div className='chooser-content px-4 mx-auto'>
                  <h2 className='text-center mt-11 chooset w-full mb-4 mx-auto'> Choose Amount </h2>
                  
                  
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      className='fomr-inputs w-full mt-0'
                      value={inputValue}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setInputValue(e.target.value)
                      }
                      placeholder="$25,000 .00"
                    />

                     <div className="relative sp-border map-input01 justify-center mx-auto mt-4 mb-5 bg-white flex items-center px-4 py-4 cm-card01">
                          <span className='img-divb'>  <img src={masc} alt="wal"/> </span>
                          <h5 className='text-start pl-2'>
                          Apple Card
                          <span className='block'> Mastercard 8490 </span>
                          </h5>
                     </div>

                    <button type="submit" className='add-cre fixed sp0125 block mx-auto  flex items-center justify-center mt-5'>Continue <IoArrowForward/> </button>
                  </form>
              </div>
              


              
            </div>
            
            
          </div>
        </section>
        </>
    ) ;
  };
export default DepositChooseAmount;