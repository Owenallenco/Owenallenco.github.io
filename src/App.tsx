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
import hopeIsPunk from "../src/assets/HOPEISPUNK.mp4"
import adBanner from "../src/assets/adbanner.mp4"
import bikeNight from "../src/assets/BIKENIGHTMOCKUP.png"


function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)
  useEffect(() => {
    const mq = window.matchMedia(query)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [query])
  return matches
}

function App() {
  const isMobile = useMediaQuery('(max-width: 768px)')
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
          a={isMobile
            ? <video src={konaHover} style={{ width: '100%', height: '100%', objectFit: 'cover' }} autoPlay muted loop playsInline />
            : <img src={weShallOvercome} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />}
          b={isMobile
            ? <img src={weShallOvercome} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            : <video src={konaHover} style={{ width: '100%', height: '100%', objectFit: 'cover' }} autoPlay muted loop playsInline />}
          c={<img src={clutch} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
          d={<video src={cigar} style={{ width: '100%', height: '100%', objectFit: 'cover' }} autoPlay muted loop playsInline />}
          e={<video src={projectDemo} style={{ width: '100%', height: '100%', objectFit: 'cover' }} autoPlay muted loop playsInline />}
          f={<img src={bikeNight} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
        />
      </section>

      <section id="work" className={styles.page2Container}>
        <WorkGrid
          a={<img src={billsbbq} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
          b={isMobile
            ? <video src={wyvern} style={{ width: '100%', height: '100%', objectFit: 'cover' }} autoPlay muted loop playsInline />
            : <video src={vx1000} style={{ width: '100%', height: '100%', objectFit: 'cover' }} autoPlay muted loop playsInline />}
          c={<img src={ownerInfo} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
          d={<video src={scoota} style={{ width: '100%', height: '100%', objectFit: 'cover' }} autoPlay muted loop playsInline />}
          e={<video src={rusty} style={{ width: '100%', height: '100%', objectFit: 'cover' }} autoPlay muted loop playsInline />}
          f={<video src={hopeIsPunk} style={{ width: '100%', height: '100%', objectFit: 'cover' }} autoPlay muted loop playsInline />}
        />
      </section>

      <section id="work" className={styles.page2Container}>
        <WorkGrid
          a={<img src={constructivist} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
          b={isMobile
            ? <video src={vx1000} style={{ width: '100%', height: '100%', objectFit: 'cover' }} autoPlay muted loop playsInline />
            : <video src={wyvern} style={{ width: '100%', height: '100%', objectFit: 'cover' }} autoPlay muted loop playsInline />}
          c={<img src={kavosMenu} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
          d={<video src={paperCrumble} style={{ width: '100%', height: '100%', objectFit: 'cover' }} autoPlay muted loop playsInline />}
          e={<video src={tvboy} style={{ width: '100%', height: '100%', objectFit: 'cover' }} autoPlay muted loop playsInline />}
        />
      </section>

      <video src={adBanner} style={{ width: '100%', height: '100%', objectFit: 'contain' }} autoPlay muted loop playsInline />

      <section id="about">
        <About />
      </section>

    </>
  )
}

export default App
