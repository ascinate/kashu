import React from 'react';
import logos from '../images/loading_logo.svg';

const Loader: React.FC = () => {
  return (
     <>
      <div className='grid justify-center items-center loading-page w-screen'>
         <div className='logos'>
            <img src={logos} alt="logo"/>
         </div>
      </div>
     </>
  );
};

export default Loader;