import { IStackTokens, Stack } from '@fluentui/react'
import Link from 'next/link'
import Layout from '~layouts/ContainerLayout'
import Counter from '~ui/Counter'

const stackTokens: IStackTokens = { childrenGap: 40 }

export default function Home(): JSX.Element {
	return (
		<Layout title='Dashboard'>
			<Stack tokens={stackTokens}>
				<span>
					Hello World.{' '}
					<Link href='/about' as={process.env.BACKEND_URL + '/about'}>
						<a>About</a>
					</Link>
				</span>
				<Counter />
			</Stack>
		</Layout>
	)
}
