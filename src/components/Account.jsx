
import React, {useState} from 'react'
import AccountCard from './AccountCard'
import Footer from './Footer'
import "./form.css"
import styles from '../style'
import BASE_URL from "../api";

const Account = ({accounts,formData,handleChange,handleSubmit}) => {
  const [isShown, setisShown] = useState(false)

  const handleClick = event => {
     setisShown(current => !current);
  } 
  return (
    <div>
      <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    <button type="button"  onClick={handleClick} className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>Create Account</button>

     {isShown && (
    <div className='form-style'>
      <h1>Create Bank Account</h1>
      <form onSubmit={handleSubmit}>
      Image: <input type="text" name='image' value={formData.image} onChange={handleChange} />
      Name: <input type="text" name='name' value={formData.name} onChange={handleChange} />
      Category: <input type="text" name='category' value={formData.category} onChange={handleChange} />
      AccountNumber: <input type="number" name='accountNumber' value={formData.accountNumber} onChange={handleChange} />
      Balance: <input type="string" name='Balance' value={formData.Balance} onChange={handleChange} />
      Comment: <input type="text" name='Comment' value={formData.Comment} onChange={handleChange} />
      <input type="submit" value="Open Account" />
      </form>
    </div>
    
)}
      
    </div>
  </section>
     <AccountCard accounts={accounts} />
        <Footer />
    </div>
    
  )
}

export default Account
