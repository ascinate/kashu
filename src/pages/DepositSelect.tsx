import React from 'react';
import { NavLink } from "react-router-dom";
import masc from '../images/apple.svg';
import visa from '../images/visa.svg';
import { IoCloseSharp } from "react-icons/io5";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const DepositSelect: React.FC = () => {
    const cards = [
        { id: 1, name: 'Apple Card', number: 'Mastercard 8490', img: masc },
        { id: 1, name: 'Marriott Bonvoy', number: 'Marriott Bonvoy', img: visa },
        
      ];
    return (
        <>
        <section className="w-full float-left">
          <div className="body-contentsd-div01 w-full float-left">
            <div className='name-div05 multis-div relative'>
            <NavLink to="/" className="close-btn absolute top-0"> <IoCloseSharp /> </NavLink>
              <h1 className='text-center mt-11 geattings-st w-96 mx-auto'> Convert Credit
              to Cash </h1>
              <p className='sel-w text-center mt-7 mx-auto'> Select a card to start converting your available credit limit into spendable cash. </p>
              <div className="walltes-div01 card-par mx-auto mt-8 px-8 srl-div">
                <div className='flex crad-text mb-4 items-center justify-between'>
                    <h4> My Cards </h4>
                    <button className='btn bt-ads'>+ Add Card </button>
                </div>
                <ul>
                    <li>
                        {cards.map((card) => (
                            <NavLink key={card.id} to="/depositchooseamount" className="relative mb-5 bg-white flex items-center px-4 py-4 cm-card01">
                               <span className='img-divb'>  <img src={card.img} alt="wal"/> </span>
                                <h5 className='text-start pl-2'>
                                {card.name}
                                <span className='block'> {card.number} </span>
                                </h5>
                              <IoIosArrowForward/>
                            </NavLink>
                        ))}
                       
                    </li>
                </ul>
                
                
              </div>

              <NavLink to="/" className="text-center fixed need-text items-center w-96 mx-auto  we-texts text-center flex justify-center mt-8"> <FaRegCircleQuestion/> Need help? Talk to support </NavLink>


              
            </div>
            
            
          </div>
        </section>
        </>
    ) ;
  };
export default DepositSelect;