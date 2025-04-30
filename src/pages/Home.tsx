import React, {useState, useEffect} from "react";
import Loader from "./Loader";
import SignupForm from "../components/SignupForm";
import Topbar from "../components/Topbar";
import MultiStepForm from "../components/multisteps";
import { NavLink } from "react-router-dom";
import { FaApple, FaGoogle } from "react-icons/fa";


const Home: React.FC = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2000); // 2 seconds
    
        return () => clearTimeout(timer);
      }, []);
    
      if (loading) {
        return <Loader />;
      }
    return (
        <>
        <section className="w-full float-left">
          <Topbar/>
          <div className="body-contentsd-div01 w-full float-left">
            <div className="or-signup">
              <MultiStepForm/>
              
            </div>
            <p className="text-center mt-10 alredy-text"> Already have an account? <NavLink to="/signin"> Sign In </NavLink> </p>
            <div className="or-signup text-center">
                <p> Or continue with: </p>
                <ul>
                  <li className="flex justify-center mt-3 mb-9">
                    <NavLink to="/" className="crm-btn"> <FaApple /> </NavLink>
                    <NavLink to="/" className="crm-btn ms-3"> <FaGoogle /> </NavLink>
                  </li>
                </ul>
                <p className="mb-9"> By creating an account you agree <br/>
                to our <NavLink to="/" className="trusm-text"> Terms and Conditions </NavLink> </p>
            </div>
          </div>
        </section>
        </>
    ) ;
  };
  export default Home;