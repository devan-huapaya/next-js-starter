import ComponentProps from '~types/componentProps'
import CRC from '~ui/CRC'
import DefaultLayout from './Default'

export default function ContainerLayout({ children, title }: ContainerLayoutProps): JSX.Element {
	return (
		<>
			<DefaultLayout>
				<CRC>
					<>
						{title && <h1 className='mt-5'>{title}</h1>}

						{children}
					</>
				</CRC>
			</DefaultLayout>
		</>
	)
}

interface ContainerLayoutProps extends ComponentProps {
	title?: string
}
