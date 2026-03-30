import styles from './About.module.css'
import owenPortrait from '../assets/owenPortrait.png'

export default function About() {
  return (
    <div className={styles.container}>

      <h1 className={styles.header}>about</h1>


      <div className={styles.tvWrapper}>
        <div className={styles.tvOuter}>
          <div className={styles.tvInner}></div>
        </div>
        <div className={styles.tvDots}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
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

      <img src={owenPortrait} className={styles.portrait} alt="Owen" />
    </div>
  )
}
