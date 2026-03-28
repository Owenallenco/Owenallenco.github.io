//import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import styles from './WorkGrid.module.css'
//import newspaper from "../assets/Schattschneider_Newspaper_Project.png"
import weShallOvercome from "../assets/weShallOverCome.png"
import konaHover from "../assets/videos/kona4.mp4"



//        <DotLottieReact data={konaHover} loop autoplay style={{ width: '100%', height: '100%' }} />

export default function WorkGrid() {
  return (
    <div className={styles.grid}>

      <div className={styles.a}>
        <img src={weShallOvercome} />
      </div>

      <div className={styles.b}>
        <video src={konaHover} autoPlay muted loop playsInline></video>
      </div>

      <div className={styles.c}>
      </div>

      <div className={styles.d}>
      </div>

      <div className={styles.e}>
      </div>

    </div>
  )
}
