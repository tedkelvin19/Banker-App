import React from 'react'
import styles from "../style"
import {discount,robot} from  '../images'
import GetStarted from "./GetStarted"
const Main = () =>(
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discount" className='W-[3px] h-[32px]'/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'> 20%</span> Discount For {" "}
            <span className='text-white'> 1 Month</span>
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            The Next <br className='sm:block hidden' /> {' '}
            <span className='text-gradient'>Generation</span> {' '}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>
        <h1 className='font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>Digital Banking.</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} className='w-[180%] h-[100%] relative z-[5]'/>
      </div>
    </section>
  )

export default Main