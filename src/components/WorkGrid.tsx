import styles from './WorkGrid.module.css'

interface WorkGridProps {
  a?: any
  b?: any
  c?: any
  d?: any
  e?: any
}

export default function WorkGrid({ a, b, c, d, e }: WorkGridProps) {
  return (
    <div className={styles.grid}>
      <div className={styles.a}>{a}</div>
      <div className={styles.b}>{b}</div>
      <div className={styles.c}>{c}</div>
      <div className={styles.d}>{d}</div>
      <div className={styles.e}>{e}</div>
    </div>
  )
}
