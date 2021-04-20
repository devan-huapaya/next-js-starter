import { IStackTokens, Stack } from '@fluentui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Layout from '~layouts/ContainerLayout'

const stackTokens: IStackTokens = { childrenGap: 16 }

export default function Profile(): JSX.Element {
	const router = useRouter()
	const { pid } = router.query

	useEffect(() => {
		console.log('pid', pid)
	}, [pid])

	return (
		<Layout title={`Profile Page ${pid}`}>
			<Stack className='mt-5' tokens={stackTokens}>
				<Link href='/about' as={process.env.BACKEND_URL + '/about'}>
					<a>About</a>
				</Link>
				<Link href='/' as={process.env.BACKEND_URL + '/'}>
					<a>Home</a>
				</Link>
			</Stack>
		</Layout>
	)
}
