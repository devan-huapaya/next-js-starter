// import Image from 'next/image'
import Head from 'next/head'
import { decrement, increment, useCounter } from 'state/counter'
import { StyledButton } from 'components/StyledButton'
import styles from 'styles/Home.module.css'

/**
 * About page!
 *
 * @returns a component
 */
export default function About() {
	const { count } = useCounter()

	return (
		<div className={styles.container}>
			<Head>
				<title>test</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/fsavicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Counter: {count}</h1>
				<div className={styles.buttonContainer}>
					<StyledButton onClick={decrement}>-1</StyledButton>
					<StyledButton onClick={increment}>+1</StyledButton>
				</div>
			</main>
		</div>
	)
}