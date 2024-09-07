import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Sidebar from './components/navigation/SideBar'

import ApplyForLoan from './components/loans/form/ApplyForLoan'
import BankAccounts from './pages/user/views/BankAccounts'
import ApplyLoanButton from './components/loans/Buttons/ApplyLoanButton'
import LoansPage from './pages/user/views/LoansPage'
import UserMenu from './components/navigation/UserMenu'
import Home from './pages/Home'
import Auth from './pages/Auth'
import UserBoard from './pages/user/UserBoard'
import PaymentsPage from './pages/user/views/PaymentsPage'
import Dahsboard from './pages/user/views/Dahsboard'
import AccountPage from './pages/user/views/AccountPage'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/login' element={<Auth />} />

        <Route path='/user' element={<UserBoard />}>
          <Route path='/user/loans' element={<LoansPage />} />
          <Route path='/user/bank' element={<BankAccounts />} />
          <Route path='/user/account' element={<AccountPage />} />
          <Route path='/user/payments' element={<PaymentsPage />} />
          <Route path='/user/dashboard'element={<Dahsboard />} />
        </Route>
      </Routes>
        
    

    </>
  )
}

export default App
