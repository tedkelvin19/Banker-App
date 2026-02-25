import React,{useState,useEffect} from 'react'
import styles from './style'
import Account from './components/Account'
import Route from './components/Route'
import BASE_URL from "./api";

import {Navbar, Billing,  CardDeal,  Business,  CTA,  Stats,  Footer,  Testimonials,  Main,} from './components'
const App = () => {
    const [accounts,setAccounts] = useState([])
    const [formData, setFormData] = useState({
      image: "",
      name: "",
      category: "",
      accountNumber: "",
      Balance: "",
      Comment: "",
    })


      // handle add new product form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // POST after submitting postForm
    handlePost();
    e.target.reset()
    console.log("submitted")
  };

    const handlePost = () => {
      fetch(`${BASE_URL}/Accounts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          handleAddListing(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };


    const handleAddListing = (item) => {
      setAccounts([...accounts, item]);
    };
 // handle input box changes dynamically
 const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;

  // spread old formData, update using dynamic object properties
  setFormData({ ...formData, [name]: value });
  // console.log(formData)
};


    useEffect(()=>{
        fetch(`${BASE_URL}/Accounts`)
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
        <Route path="/">
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
          <Route path="/clients">
          <Account accounts={accounts} handleChange={handleChange}  handleAddListing={handleAddListing} handleSubmit={handleSubmit} formData={formData}/>
          </Route>
        </div>
      </div>

    </div>
  )
  }
export default App
