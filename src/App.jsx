import React from 'react'
import styles from './style'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          Navbar
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>

        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>

        </div>
      </div>

    </div>
  )
}

export default App