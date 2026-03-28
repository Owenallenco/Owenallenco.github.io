import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import styles from './WorkGrid.module.css'

type GridItem = {
  area: 'a' | 'b' | 'c' | 'd' | 'e'
  type: 'image' | 'video' | 'lottie'
  src: any
}

function GridCell({ type, src }: Pick<GridItem, 'type' | 'src'>) {
  if (type === 'image') return <img src={src} />
  if (type === 'video') return <video src={src} autoPlay loop muted playsInline />
  if (type === 'lottie') return <DotLottieReact data={src} loop autoplay />
  return null
}

// Add your items here — just drop in the import and pick an area (a–e)
const items: GridItem[] = [
  // { area: 'a', type: 'image', src: myImage },
  // { area: 'b', type: 'video', src: myVideo },
  // { area: 'c', type: 'lottie', src: myAnimation },
]

export default function WorkGrid() {
  return (
    <div className={styles.grid}>
      {items.map(item => (
        <div key={item.area} className={styles[item.area]}>
          <GridCell type={item.type} src={item.src} />
        </div>
      ))}
    </div>
  )
}
