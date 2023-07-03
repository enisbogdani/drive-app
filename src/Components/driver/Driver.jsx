import React from 'react'
import styles from './Driver.module.css'
import Drive from '../../Images/drive.png'

const Driver = () => {
  return (
    <div className={styles.driver}>
<div className={styles.left}>
    <img src={Drive} alt="" />
    </div>
    <div>
 <h2>Find your perfect car <br></br><span> to try before you buy</span></h2>
 <p>Make sure your future wheels work well with your lifestyle by taking your time in te driver's seat.</p>
 <button>Browse Cars</button>
    </div>
</div>
  )
}

export default Driver