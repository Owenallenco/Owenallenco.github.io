import styles from "./app.module.css"
import { useState, useEffect, useRef } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import upArrow from "./assets/uparrow.png"
import owenAllenLogo from "./assets/OWENALLEN_LOGO.svg"
import cornerAnimation from "./assets/lotties/CIRCLE_ANIMATION_OPTIMIZED2.json"
import resumeIcon from "./assets/RESUME-ICON.svg"
import resumePdf from "./assets/owenSchattschneiderResume.pdf"
import WorkGrid from "./components/WorkGrid"
import About from "./components/About"
import weShallOvercome from "./assets/weShallOverCome.png"
import konaHover from "./assets/videos/kona4.mp4"
import projectDemo from "./assets/videos/productDemo.mp4"
import scoota from "./assets/videos/SCootaAssembeGlow.mp4"
import clutch from "./assets/workGridAssets/clutch.png"
import vx1000 from "../src/assets/videos/vx1000.mp4"
import billsbbq from "../src/assets/workGridAssets/BILLS_BBQ.png"
import ownerInfo from "../src/assets/OWNERINFO_PNG.png"
import rusty from "../src/assets/rusty.mp4"
import cigar from "../src/assets/cigar.mp4"
//grid 3
import kavosMenu from "../src/assets/workGridAssets/kavosmenu.png"
import wyvern from "../src/assets/workGridAssets/wyvern.mp4"
import constructivist from "../src/assets/workGridAssets/CONSTRUCTIVIST.jpg"
import paperCrumble from "../src/assets/videos/PAPERCRUMBLE.mp4"
import tvboy from "../src/assets/videos/TVBOY02.mp4"


function App() {
  const [showArrow, setShowArrow] = useState(false)
  const homeRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowArrow(!entry.isIntersecting),
      { threshold: 0.1 }
    )
    if (homeRef.current) observer.observe(homeRef.current)
    return () => observer.disconnect()
  }, [])

  const scrollToTop = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {showArrow && (
        <button className={styles.backToTop} onClick={scrollToTop}>
          <img src={upArrow} alt="back to top" />
        </button>
      )}

      <section id="home" ref={homeRef} className={styles.page1Container}>

        <ul className={styles.page1Links}>
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#about">Contact</a></li>
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
        <WorkGrid
          a={<img src={weShallOvercome} />}
          b={<video src={konaHover} autoPlay muted loop playsInline />}
          c={<img src={clutch} />}
          d={<video src={cigar} autoPlay muted loop playsInline />}
          e={<video src={projectDemo} autoPlay muted loop playsInline />}
        />
      </section>

      <section id="work" className={styles.page2Container}>
        <WorkGrid
          a={<img src={billsbbq} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
          b={<video src={vx1000} autoPlay muted loop playsInline />}
          c={<img src={ownerInfo} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
          d={<video src={scoota} autoPlay muted loop playsInline />}
          e={<video src={rusty} autoPlay muted loop playsInline />}
        />
      </section>

      <section id="work" className={styles.page2Container}>
        <WorkGrid
          a={<img src={constructivist} style={{ objectFit: 'cover' }} />}
          b={<video src={wyvern} autoPlay muted loop playsInline />}
          c={<img src={kavosMenu} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
          d={<video src={paperCrumble} autoPlay muted loop playsInline />}
          e={<video src={tvboy} autoPlay muted loop playsInline />}
        />
      </section>

      <section id="about">
        <About />
      </section>

    </>
  )
}

export default App
