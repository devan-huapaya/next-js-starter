import Link from 'next/link'
import Counter from '../components/Counter'
import CRC from '../components/CRC'
import Layout from '../components/Layouts/ContainerLayout'

import { Stack, IStackTokens, Text } from '@fluentui/react'
import {Container, Row, Col} from 'react-bootstrap'

const stackTokens: IStackTokens = { childrenGap: 40 }

export default function Home() {
  return (
    <Layout title='Dashboard'>
			<Stack tokens={stackTokens}>
				<span>
					Hello World.{' '}
					<Link href="/about" as={process.env.BACKEND_URL + '/about'}>
						<a>About</a>
					</Link>
				</span>
				<Counter />
			</Stack>
    </Layout>
  )
}
