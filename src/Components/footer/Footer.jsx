import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.sb_footer}>
          <div className={styles.sb_footer_links}>
            <div className={styles.sb_footer_links_div}>
                <h4>For business</h4>
                 <a href="/employer">
                    <p>Employer</p>
                 </a>
                 <a href="/healthplan">
                    <p>Health plan</p>
                 </a>
                 <a href="/individual">
                    <p>Individual</p>
                 </a>
            </div>
            <div className={styles.sb_footer_links_div}>
                <h4>Resources</h4>
                <a href="/resource">
                    <p>Resource center</p>
                 </a>
                 <a href="/resource">
                    <p>Testimonials</p>
                 </a>
                 <a href="/resource">
                    <p>Stv</p>
                 </a>
            </div>
            <div className={styles.sb_footer_links_div}>
            <h4>Partners</h4>
            <a href="/employer">
                    <p>Swing Tech</p>
                 </a>
            </div>
            <div className={styles.sb_footer_links_div}>
            <h4>Company</h4>
                <a href="/about">
                    <p>About</p>
                 </a>
                 <a href="/press">
                    <p>Press</p>
                 </a>
                 <a href="/career">
                    <p>Career</p>
                 </a>  
                 <a href="/contact">
                    <p>Contact</p>
                 </a>  
            </div>
          </div>
          <hr />
            <div className={styles.sb_footer_below}>
                <div className={styles.sb_footer_copyright}>
                <p>
                    {new Date().getFullYear()} CodeInn. All rights reserved.
                </p>
              </div>
              <div className={styles.sb_footer_below_links}>
                <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                <a href="/privacy"><div><p>Privacy</p></div></a>
                <a href="/security"><div><p>Security</p></div></a>
                <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer