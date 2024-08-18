import { Theme } from '@radix-ui/themes'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Register from './pages/Register'
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './components/navigation/SideBar'
import LoansCard from './components/loans/LoansCard'
import ActivityCard from './components/activity/ActivityCard'
import QuickActionsCard from './components/Quick/QuickActionsCard'
import LoandDistributionChart from './components/loans/LoandDistributionChart'
import PaymentHistory from './components/payment/PaymentHistory'
import ApplyLoanButton from './components/loans/Buttons/ApplyLoanButton'
import LoanListTable from './components/loans/ListLoans'

function App() {
  const handleClick = (): void => {
    console.log('Hello');
  };
  return (
    <div>
      
        <Router>
        <div className="flex ">
        <Sidebar />
        
        <div className="w-full ml-16 md:ml-56 ">
        <div className='p-5'>
          <ApplyLoanButton onClick={handleClick}/>
          <LoanListTable onViewStats={handleClick}/>
        </div>
        </div>
      </div>
        </Router>
    

    </div>
  )
}

export default App
