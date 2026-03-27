import styles from "../src/app.module.css"
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import Work from "./pages/Work"
import About from "./pages/About"
import Contact from "./pages/Contact"
import owenAllenLogo from "../src/assets/OWENALLEN_LOGO.svg"
import cornerAnimation from "../src/assets/lotties/cornerAnimation.json"


function App() {
  return (
    <>
      <Routes>
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <section className={styles.page1Container}>

        <ul className={styles.page1Links}>
          <li><Link to={"/work"}>Work</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
        </ul>

        <div className={styles.owenAllenLogo}>
          <img className={styles.owenAllenLogo} src={owenAllenLogo} alt="owenAllenLogo" />
        </div>

        <div className={styles.page1footer}>

          <Lottie animationData={cornerAnimation} loop={true} />
        </div>

      </section>
    </>
  )
}

export default App
