import React from 'react'
import {card} from "../images";
import styles, { layout } from "../style";
import Buttons from "./Buttons";

const CardDeal = () => (
    <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Enjoy discounts & benefits whenever you use your EasyBank Debit and Credit Card!
      </p>

      <Buttons styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
  )

export default CardDeal