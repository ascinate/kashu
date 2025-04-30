import React, { useState } from 'react';

const SignupForm: React.FC = () => {
    const [showFirstDiv, setShowFirstDiv] = useState(true);
    const [showFirstDiva, setShowFirstDiva] = useState(false);

    const handleToggle = () => {
      setShowFirstDiv(prev => !prev);
    };
    const handleToggleaback = () => {
        setShowFirstDiv(prev => !prev);
      };
    return (
        <>
         {showFirstDiv ? (
            <div>
                <h2>This is the FIRST div</h2>
                <p>Click the button to show the second div.</p>
                <button onClick={handleToggle}>Toggle View</button>
            </div>
            ) : (
            <div>
                <button onClick={handleToggleaback}>Back</button>
                <h2>This is the SECOND div</h2>
                <p>Click the button to go back to the first div.</p>
            </div>
            )}
        </>
    ) ;
  };
  export default SignupForm;
