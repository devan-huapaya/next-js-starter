import cx from 'classnames'
import Link from 'next/link'
import type CP from '~types/componentProps'
import CRC from '~ui/CRC'
import Persona from '~ui/Persona'
import styles from './index.module.scss'

export default function ActionBar({ children }: CP): JSX.Element {
	return (
		<div
			className={cx(
				'd-flex justify-content-between align-items-center py-4 bg-primary text-light',
				styles.actionBar
			)}
		>
			<CRC>
				<div className='d-flex justify-content-between align-items-center'>
					<Link href='/'>
						<a className='text-light'>home</a>
					</Link>

					{children}

					<Persona />
				</div>
			</CRC>
		</div>
	)
}
