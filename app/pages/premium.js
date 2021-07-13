import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from "react"

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Blobby</title>
				<meta name="description" content="A friendly community on Discord and Guilded that develops applications for everyone to use." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title} id="title">
					One <span className={styles.pink}>cheap</span> premium<br />service for all our apps
				</h1>

				<p className={styles.description}>
					Introducing Blobby Premium.
        </p>

				<div className={styles.box}>
					<h3 style={{ marginBottom: "20px" }}>
						Get it today
				</h3>
					<div className={styles.grid}>
						<a href="https://discord.gg/new" className={styles.card}>
							<h2>How to get Premium</h2>
							<p>Click here to join the Discord server and Boost it once, or more, and Premium will be activated, and will stay active until you stop boosting</p>
						</a>

						<a href="#blobchatperks" className={styles.card}>
							<h2>Why should I get it &rarr;</h2>
							<p>Click here to automatically scroll down to the perks list.</p>
						</a>
					</div>
				</div>

				<div className={styles.box} id="blobchatperks">
					<h3 style={{ marginBottom: "20px" }}>
						Perks for being Premium
				</h3>
					<div className={styles.grid}>
						<div
							className={styles.card}
						>
							<h2>BlobChat: Customizable tags &rarr;</h2>
							<p>Write anything next to your username in your messages on BlobChat</p>
						</div>

                        <div
							className={styles.card}
						>
							<h2>BlobChat: Exclusive functions &rarr;</h2>
							<p>Use more than just boring functions that do almost nothing. With Premium functions, you can use TUA from directly the bot, so you can put random memes and more into your messages.</p>
						</div>

                        <div
							className={styles.card}
						>
							<h2>BlobChat: Signatures &rarr;</h2>
							<p>Add custom signatures to display a message under all your BlobChat messages.</p>
						</div>

                        <div
							className={styles.card}
						>
							<h2>TUA: Exclusive endpoints &rarr;</h2>
							<p>Get access to exclusive Premium-only endpoints in TotallyUsefulAPI and upgrade your apps.</p>
						</div>

                        <div
							className={styles.card}
						>
							<h2>TUA: Exclusive mirror &rarr;</h2>
							<p>Get access to an exclusive premium only mirror of TotallyUsefulAPI which faster because it is used by less users.</p>
						</div>

                        <div
							className={styles.card}
						>
							<h2>Status Monitor: Monitor more bots &rarr;</h2>
							<p>You can monitor up to 30 bots, upped from the current 7 bots limit.</p>
						</div>

                        <div
							className={styles.card}
						>
							<h2>More soon &rarr;</h2>
							<p>Way more perks will be rolling out soon, as we are currently actively developing the service at the moment.</p>
						</div>
					</div>
				</div>

				<div className={styles.box}>
					<h3 style={{ marginBottom: "20px" }}>
						All that for just a boost
				</h3>
					<p>Boosting Blobby on Discord allows more people to discover Blobby, and helps<br />Blobby out a lot long term, which is why we<br />are willing to offer tons of perks for<br />just one boost. Thanks for your support for helping<br />us make Blobby better.</p>
				</div>
			</main>
		</div>
	)
}
