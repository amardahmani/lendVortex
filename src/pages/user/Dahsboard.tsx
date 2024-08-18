import React from 'react'
import ActivityCard from '../../components/activity/ActivityCard'
import LoansCard from '../../components/loans/LoansCard'
import QuickActionsCard from '../../components/Quick/QuickActionsCard'
import LoandDistributionChart from '../../components/loans/LoandDistributionChart'
import PaymentHistory from '../../components/payment/PaymentHistory'

const Dahsboard = () => {
  return (
    <div className='p-5'>
        <div className='grid md:grid-cols-3 xl:grid-cols-3 gap-4'>
            <ActivityCard />
            <LoansCard />
            <QuickActionsCard />
        
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-4">
            <LoandDistributionChart/>
            <PaymentHistory />
        </div>
    </div>
  )
}

export default Dahsboard