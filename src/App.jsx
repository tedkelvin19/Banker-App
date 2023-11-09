import React,{useState,useEffect} from 'react'
import styles from './style'
import Account from './components/Account'
import Route from './components/Route'

import {Navbar, Billing,  CardDeal,  Business,  CTA,  Stats,  Footer,  Testimonials,  Main,} from './components'
const App = () => {
    const [accounts,setAccounts] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/Accounts")
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data)
            setAccounts(data)
        })
    },[])
  return(
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            
        <Route path="/home">
          <Main />
        </Route>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Route path="/features">
          <Business />
          </Route>
          <Route path="/transactions">
           <Billing />
          </Route>
          <Route path="/blog">
            <Testimonials />
          </Route>
          <Route path="/accounts">
          <Account accounts={accounts} />
          </Route>
        </div>
      </div>

    </div>
  )
  }
export default App