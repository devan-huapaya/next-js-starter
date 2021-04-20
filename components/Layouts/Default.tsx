import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getAuthUser } from '~store/slices/auth'
import CP from '~types/componentProps'
import ActionBar from '~ui/ActionBar'

export default function DefaultLayout({ children }: CP): JSX.Element {
	const router = useRouter()
	const auth = useSelector(getAuthUser)

	useEffect(() => {
		if (!auth.signedIn && !auth.loading && router.route !== '/login') {
			void router.push('/login')
		}
	}, [auth.signedIn, auth.loading, router.pathname, router])

	return (
		<>
			<ActionBar />

			{children}
		</>
	)
}
