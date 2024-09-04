import { Theme } from '@radix-ui/themes'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Register from './pages/Register'
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './components/navigation/SideBar'
import PaymentsPage from './pages/user/PaymentsPage'
import BankCard from './components/bank/BankCard'

function App() {
  const handleClick = (): void => {
    console.log('Hello');
  };
  const accountInfo = {
    name: 'Personal Checking',
    currentBalance: 1240.75,
    mask: '1234',
  };
  return (
    <div>
      
        <Router>
        <div className="flex ">
        <Sidebar />
        
        <div className="w-full ml-16 md:ml-56 ">
        <div className='p-10 flex'>
        <BankCard
          cardNumber="1234 5678 9012 3456"
          cardHolderName="John Doe"
          expirationDate="12/25"
          cvv="123"
        />
        </div>
        </div>
      </div>
        </Router>
    

    </div>
  )
}

export default App
