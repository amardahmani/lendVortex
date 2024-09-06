import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './components/navigation/SideBar'

import AccountPage from './pages/user/AccountPage'
import ApplyForLoan from './components/loans/form/ApplyForLoan'
import BankAccounts from './pages/user/BankAccounts'
import ApplyLoanButton from './components/loans/Buttons/ApplyLoanButton'
import LoansPage from './pages/user/LoansPage'
import UserMenu from './components/navigation/UserMenu'

function App() {
  
  return (
    <div>
      
        <Router>
        <div className="flex ">
        
        <Sidebar />
        
        <div className="w-full ml-16 md:ml-56 ">
          <UserMenu />
        <div className=''>
          <LoansPage />
        </div>
        </div>
      </div>
        </Router>
    

    </div>
  )
}

export default App
