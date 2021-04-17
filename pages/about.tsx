import Link from 'next/link'
import { DefaultButton, PrimaryButton, Stack, IStackTokens, Text } from '@fluentui/react';
const stackTokens: IStackTokens = { childrenGap: 40 };
import Layout from '../components/Layouts/ContainerLayout'

export default function About() {
  return (
    <Layout title='About us'>
			<Stack tokens={stackTokens}>
				<Text>
					Back to{' '}
					<Link href="/" as={process.env.BACKEND_URL + '/'}>
						<a>Home</a>
					</Link>
				</Text>
			</Stack>
    </Layout>
  )
}
