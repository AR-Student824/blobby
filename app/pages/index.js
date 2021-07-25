import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from "react"

export default function Home() {
	useEffect(() => {
		function formatAMPM(date) {
			var hours = date.getHours();
			var minutes = date.getMinutes();
			var ampm = hours >= 12 ? 'PM' : 'AM';
			hours = hours % 12;
			hours = hours ? hours : 12; // the hour '0' should be '12'
			minutes = minutes < 10 ? '0' + minutes : minutes;
			var strTime = hours + ':' + minutes + '<sup>' + date.getSeconds() + '</sup> ' + ampm;
			return strTime;
		}
		function formatMonth() {
			var month = new Date().getMonth()
			if (month == 0) return "January"
			if (month == 1) return "February"
			if (month == 2) return "March"
			if (month == 3) return "April"
			if (month == 4) return "May"
			if (month == 5) return "June"
			if (month == 6) return "July"
			if (month == 7) return "August"
			if (month == 8) return "September"
			if (month == 9) return "October"
			if (month == 10) return "November"
			if (month == 11) return "December"

		}
		function updateTime() {
			var date = new Date
			document.getElementById('date').innerHTML = `🕒 ${formatMonth()} ${date.getDate()}, ${date.getFullYear()} &#8226; ${formatAMPM(date)}`
		}
		updateTime()
		setInterval(() => {
			updateTime()
		}, 1000)
	}, [])
	return (
		<div className={styles.container}>
			<Head>
				<title>Blobby</title>
				<meta name="description" content="A friendly community on Discord and Guilded that develops applications for everyone to use." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h2 className={styles.date} id="date">Enable JavaScript to use this site</h2>
				<h1 className={styles.title} id="title">
					Welcome to <span className={styles.pink}>Blobby 🎉</span>
				</h1>

				<p className={styles.description}>
					A friendly community that develops applications for everyone to use.
        </p>

				<div className={styles.box}>
					<h3 style={{ marginBottom: "20px" }}>
						Blobby on Social Media
				</h3>
					<div className={styles.grid}>
						<a href="https://discord.gg/windows" className={styles.card}>
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
					<h3 style={{ marginBottom: "20px" }}>
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
						<a
							href="https://totallyusefulapi.ml"
							className={styles.card}
						>
							<h2>TotallyUsefulAPI &rarr;</h2>
							<p>
							A suite of simple yet useful APIs to make your work easier, no API key required
            </p>
						</a>
					</div>
				</div>

				<div className={styles.box}>
					<h3 style={{ marginBottom: "20px" }}>
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
							<p>Hi! I&apos;m David! I&apos;m a teen just trying to code, find me at aboutdavid.me/@UpscaleDavid on twitter</p>
						</a>

						<a
							href="https://reefraid.com"
							className={styles.card}
						>
							<h2>Pyxel &rarr;</h2>
							<p>
							i&apos;m pyxel and german is good soisoisoisoi
            </p>
						</a>
					</div>
				</div>
			</main>
		</div>
	)
}
