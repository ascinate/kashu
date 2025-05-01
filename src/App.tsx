import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DepositEmpty from './pages/DepositEmpty';
import DepositSelect from './pages/DepositSelect';
import DepositChooseAmount from './pages/DepositChooseAmount';
import DepositSubmitPayment from './pages/DepositSubmitPayment';
import DepositSuccess from './pages/DepositSuccess';
import DepositFailed from './pages/DepositFailed';
import './App.css'

function App() {
  return (
    <>
      <Router>
           <Routes>
                <Route path="/" element={<DepositEmpty/>}/>
                <Route path="/depositselect" element={<DepositSelect/>}/>
                <Route path="/depositchooseamount" element={<DepositChooseAmount/>}/>
                <Route path="/depositsubmitpayment" element={<DepositSubmitPayment/>}/>
                <Route path="/depositsuccess" element={<DepositSuccess/>}/>
                <Route path="/depositfailed" element={<DepositFailed/>}/>
                
                
           </Routes>
      </Router>
    </>
  )
}

export default App
