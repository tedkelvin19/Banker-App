//http://localhost:3000/Accounts
import React from 'react'
import AccountCard from './AccountCard'
import Footer from './Footer'
import CTA from './CTA'

const Account = ({accounts}) => {
  return (
        <div>
          <CTA />
        <AccountCard accounts={accounts} />

        <Footer />
        </div>
  )
}

export default Account