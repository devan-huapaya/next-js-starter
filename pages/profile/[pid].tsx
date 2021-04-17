import {useEffect} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Stack, IStackTokens, Text } from '@fluentui/react'
import {Container, Row, Col} from 'react-bootstrap'

import Layout from '../../components/Layouts/ContainerLayout'

const stackTokens: IStackTokens = { childrenGap: 16 }

export default function Profile() {
  const router = useRouter()
  const { pid } = router.query

	useEffect(() => {
		console.log('pid', pid);
	}, [pid])
	
  return (
    <Layout title={`Profile Page ${pid}`}>
			<Stack className='mt-5' tokens={stackTokens}>
				<Link href="/about" as={process.env.BACKEND_URL + '/about'}>
					<a>About</a>
				</Link>
				<Link href="/" as={process.env.BACKEND_URL + '/'}>
					<a>Home</a>
				</Link>
			</Stack>
    </Layout>
  )
}
