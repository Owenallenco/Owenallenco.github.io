import styles from "./app.module.css"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import owenAllenLogo from "./assets/OWENALLEN_LOGO.svg"
import cornerAnimation from "./assets/lotties/CIRCLE_ANIMATION_OPTIMIZED2.json"
import resumeIcon from "./assets/RESUME-ICON.svg"
import resumePdf from "./assets/owenSchattschneiderResume.pdf"
import WorkGrid from "./components/WorkGrid"


function App() {
  return (
    <>
      <section id="home" className={styles.page1Container}>

        <ul className={styles.page1Links}>
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className={styles.owenAllenLogo}>
          <img src={owenAllenLogo} alt="Owen Allen" />
        </div>

        <div className={styles.page1footer}>
          <a href={resumePdf} download>
            <img className={styles.resumeIcon} src={resumeIcon} alt="resume" />
          </a>
          <DotLottieReact className={styles.cornerAnimation} data={cornerAnimation} loop autoplay />
        </div>

      </section>

      <section id="work" className={styles.page2Container}>
        <WorkGrid></WorkGrid>
      </section>

      <section id="work" className={styles.page2Container}>
        <WorkGrid></WorkGrid>
      </section>


      <section id="about" className={styles.page4Container}>

        <h1 className={styles.aboutHeader}>about</h1>

        <div className={styles.aboutContainer}>
          <div></div>
          <div className={styles.socialLinks}></div>
        </div>


        <footer></footer>


      </section>

      <section id="contact" className={styles.page4Container}>
      </section>
    </>
  )
}

export default App
