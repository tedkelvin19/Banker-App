import React from 'react'
import styles from '../style'
import './account.css'
const AccountCard = ({accounts}) => {
  return (
    
        <div className='acc'>
            {accounts.map((account)=>{
                const {id, image, name, category,Balance} = account
                return(
                    <div key={id}>
                        <img src={image} className="sm:w-[192px] w-[100px] object-contain" />
                        <h2 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">Name: {name}</h2>
                        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">Account: {category}</p>
                        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">Amount: {Balance}</p>
                    </div>
                )
            })}
        </div>
  )
}

export default AccountCard