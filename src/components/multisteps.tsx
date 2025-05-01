import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import sucess from '../images/sucess01.png';

type FormData = {
  name: string;
  email: string;
  code: string;
  codeh: string;
  codec: string;
  coded: string;
  codee: string;
  codef: string;
  codeg: string;
};

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    name: '',
    code: '',
    codeh: '',
    codec: '',
    coded: '',
    codee: '',
    codef: '',
    codeg: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' })); // Clear error on change
  };

  const validateStep = () => {
    const newErrors: { [key: string]: string } = {};
    if (step === 1 && !formData.email || !formData.name.trim()) {
      newErrors.email = 'Valid email is required';
      newErrors.name = 'Password is required';
      
    }
    if (step === 2 && !formData.code.trim()) {
      newErrors.code = 'Enter 4-digit code is required';
      newErrors.codeh = 'Enter 4-digit code is required';
      newErrors.codec = 'Enter 4-digit code is required';
      newErrors.coded = 'Enter 4-digit code is required';
      newErrors.codee = 'Enter 4-digit code is required';
      newErrors.codef = 'Enter 4-digit code is required';
      newErrors.codeg = 'Enter 4-digit code is required';
    }
    if (step === 3 && !formData.code.trim()) {
      newErrors.code = 'Valid age is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    if (validateStep()) {
      setIsSubmitted(true);
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div>
      {!isSubmitted ? (
        <>
          {step === 1 && (
            <div className='name-div05 multis-div'>
               
               <div className='inside-line01 w-20'>

               </div>
               <h1 className='text-center mt-11 geattings-st'> Getting Started </h1>
               <div className='mi-div'>
                  <div className='forms-tops01 comuns-line relative'>
                      <input
                        type="email"
                        name="email"
                        id="emails"
                        value={formData.email}
                        className='peer cm-input' onChange={handleChange} 
                      />
                      <label htmlFor="emails" className="absolute left-0 top-5 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-1 transition-all">Email address</label>
                      {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                  </div>
                  <div className='forms-tops01 comuns-line relative'>
                      <input
                        type="password"
                        name="name"
                        id="names"
                        value={formData.name}
                        className='peer cm-input' onChange={handleChange} 
                      />
                      <label htmlFor="names" className="absolute left-0 top-5 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-1 transition-all">Password</label>
                      {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                  </div>

                  <button onClick={nextStep} className='submits-btn w-full'>Submit</button>

              </div>
             
              
            </div>
          )}

          {step === 2 && (
            <div className='name-div05 multis-div relative'>
              <button onClick={prevStep} className='back-btn'> <FaArrowLeft/> </button>{' '}
                 <div className='inside-line01 w-40'>

                </div>
                <h2 className='text-center geattings-st-sm mt-5'> Enter 6-digit code </h2>
                <p className='text-center we-texts mt-3'> We&apos;ve sent the code to <br/>
                Can&apos;t find it? Check your spam folder. </p>
                <div className='forms-tops01 focus:border-purple-600 flex space-x-3 justify-center mt-5  relative'>
                  <input
                    type="text"
                    name="code"
                    value={formData.code}
                    className='peer no-int01' onChange={handleChange} 
                  />
                  <input
                    type="text"
                    name="codeh"
                    value={formData.codeh}
                    className='peer no-int01' onChange={handleChange} 
                  />
                  <input
                    type="text"
                    name="codec"
                    value={formData.codec}
                    className='peer no-int01' onChange={handleChange} 
                  />
                  <input
                    type="text"
                    name="coded"
                    value={formData.coded}
                    className='peer no-int01' onChange={handleChange} 
                  />
                  <input
                    type="text"
                    name="codee"
                    value={formData.codee}
                    className='peer no-int01' onChange={handleChange} 
                  />
                  <input
                    type="text"
                    name="codef"
                    value={formData.codef}
                    className='peer no-int01' onChange={handleChange} 
                  />
                  <input
                    type="text"
                    name="codeg"
                    value={formData.codeg}
                    className='peer no-int01' onChange={handleChange} 
                  />
                  {errors.code && <p style={{ color: 'red' }}>{errors.code}</p>}
                  {errors.codeh && <p style={{ color: 'red' }}>{errors.codeh}</p>}
                  {errors.codec && <p style={{ color: 'red' }}>{errors.codec}</p>}
                  {errors.coded && <p style={{ color: 'red' }}>{errors.coded}</p>}
                  {errors.codee && <p style={{ color: 'red' }}>{errors.codee}</p>}
                  {errors.codef && <p style={{ color: 'red' }}>{errors.codef}</p>}
                  {errors.codeg && <p style={{ color: 'red' }}>{errors.codeg}</p>}
                </div>

              <br />
              
              <button onClick={nextStep} className='resnd-btn'>Resend</button>
            </div>
          )}

          {step === 3 && (
            <div className='name-div05 multis-div'> 
              <div>
                 <h1 className='text-center mt-11 geattings-st w-96 mx-auto'> Great job!
                 Your account is now set up. </h1>
                 <div className='mi-div spto01'>
                     <p className='w-lear01 text-center'> Lorem ipsum <br/>
                     lorem ipsum ipsum loram lorem </p>

                     <img src={sucess} alt="sucess" className='text-center mx-auto'/>

                 </div>
              </div>
              <NavLink to="/" className="btn-continues mx-auto mt-8">Continue</NavLink>
            </div>
          )}
        </>
      ) : (
        <div style={{ padding: '20px', backgroundColor: '#d1e7dd', textAlign: 'center' }}>
          <h2>🎉 Success!</h2>
          <p>Your form has been submitted successfully.</p>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
