import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blobby</title>
        <meta name="description" content="A friendly community on Discord and Guilded that develops applications for everyone to use." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Welcome to <span className={styles.pink}>Blobby 🎉</span>
        </h1>

        <p className={styles.description}>
          A friendly community that develops applications for everyone to use.
        </p>

				<div className={styles.box}>
				<h3 style={{marginBottom:"20px"}}>
					Blobby on Social Media
				</h3>
        <div className={styles.grid}>
          <a href="https://discord.gg/new" className={styles.card}>
            <h2>Discord &rarr;</h2>
            <p>Join the Discord server for a friendly community and tons of emojis.</p>
          </a>

          <a href="https://www.guilded.gg/blob" className={styles.card}>
            <h2>Guilded &rarr;</h2>
            <p>Join the Guilded server to chat with the Blobby community &amp; for updates on the newest things.</p>
          </a>
				</div>
				</div>

				<div className={styles.box}>
				<h3 style={{marginBottom:"20px"}}>
					Featured projects
				</h3>
				 <div className={styles.grid}>
          <a
            href="https://hangle.me"
            className={styles.card}
          >
            <h2>Hangle &rarr;</h2>
            <p>An open source platform for developers to talk, and share their projects on.</p>
          </a>

          <a
            href="https://divvyr.ml"
            className={styles.card}
          >
            <h2>Divvyr &rarr;</h2>
            <p>
              A social media application where you can discover what the world is up to.
            </p>
          </a>
        </div>
				</div>

					<div className={styles.box}>
				<h3 style={{marginBottom:"20px"}}>
					Meet the owners
				</h3>
				 <div className={styles.grid}>
          <a
            href="https://ar-dev.cf"
            className={styles.card}
          >
            <h2>AR (founder) &rarr;</h2>
            <p>Uh... hey there! You should join the Blobby Discord and Guilded :P</p>
          </a>
					<a
            href="https://aboutdavid.me"
            className={styles.card}
          >
            <h2>aboutDavid &rarr;</h2>
            <p>aboutDavid is taking a break right now so I cannot ask him what to put here just yet</p>
          </a>

          <a
            href="https://pyxel.ml"
            className={styles.card}
          >
            <h2>Pyxel &rarr;</h2>
            <p>
              Pyxel will kill me if I text him so idk what to put here, unless if Pyxel notices this and tells me what to add.
            </p>
          </a>
        </div>
				</div>
      </main>
    </div>
  )
}
