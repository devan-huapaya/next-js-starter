import SignIn from '../SignIn'
import CRC from '../CRC'
import DefaultLayout from './Default'
import { Text } from '@fluentui/react';

export default function ContainerLayout({children, title}) {
  return (
    <>
      <DefaultLayout >
				<CRC>
					{title && (
						<h1 className='mt-5'>{title}</h1>
					)}

					{children}
				</CRC>
			</DefaultLayout>
    </>
  )
}