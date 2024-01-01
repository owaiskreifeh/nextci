import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={styles.title}> CI test </h1>
        <Link href="/about">About</Link>
      </div>
    </main>
  )
}
