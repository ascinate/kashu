import React from 'react';
import logos from '../images/loading_logo.svg';
import { LuAlarmClock } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import { IoBluetoothSharp } from "react-icons/io5";
import { FaWifi } from "react-icons/fa6";
import { TbAntennaBars5 } from "react-icons/tb";
import { RiBatteryLowLine } from "react-icons/ri";

const Topbar: React.FC = () => {
  return (
     <>
      <div className="w-full float-left px-4 pt-3">
         <div className='grid grid-cols-2 w-full'>
            <div className='letf-cm flex justify-start'>05:13 PM</div>
            <div className='letf-cm flex justify-end'>
               <ul className='flex clock-list01 space-x-2 justify-end'>
                 <li>
                    <LuAlarmClock /> 
                 </li>
                 <li>
                    <IoBluetoothSharp />
                 </li>
                 <li>
                    <FaWifi />
                 </li>
                 <li>
                    <TbAntennaBars5 />
                 </li>
                 <li>
                    <RiBatteryLowLine />
                 </li>

               </ul>
            </div>
         </div>
      </div>
     </>
  );
};

export default Topbar;