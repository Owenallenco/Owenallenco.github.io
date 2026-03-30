import styles from './About.module.css'
import owenPortrait from '../assets/owenPortrait.png'
import clouds from "../assets/Clouds.svg"
import linkedin from "../assets/socialSVGs/LinkedIn.svg"
import beehance from "../assets/socialSVGs/Behance.svg"
import mail from "../assets/socialSVGs/mail.svg"
import peter from "../assets/socialSVGs/petaaa.png"



export default function About() {
  return (
    <div className={styles.container}>

      <h1 className={styles.header}>about</h1>


      <div className={styles.tvWrapper}>
        <div className={styles.tvOuter}>
          <div className={styles.tvInner}>
            <h1> I turn ideas into visuals that hit.</h1>
            <p>I’m Owen Allen Schattschneider, a multi-medium visual communicator working across design and video.
              I use digital tools to build sharp, intentional work—and I’m looking for an internship to take it further.</p>
          </div>
        </div>
        <div className={styles.tvDots}>
          <div className={styles.socialLink}><img src={linkedin} /></div>
          <div className={styles.socialLink}><img src={beehance} /></div>
          <div className={styles.socialLink}><img src={linkedin} /></div>
          <div className={styles.socialLink}><img src={beehance} /></div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerRow}>
          <div className={styles.line}></div>
          <span className={styles.contactLabel}>contact</span>
        </div>
        <div className={styles.footerRow}>
          <div className={styles.line}></div>
          <span className={styles.contactEmail}>owenschatt@gmail.com</span>
        </div>
        <div className={styles.footerRow}>
          <div className={styles.line}></div>
          <span className={styles.contactPhone}>262-354-5473</span>
        </div>
      </div>

      <img src={clouds} className={styles.clouds} alt="" />
      <img src={owenPortrait} className={styles.portrait} alt="Owen" />
    </div>
  )
}
