import Layout from '../components/Layouts/ContainerLayout'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {
	getAuthUser,
  loginUser,
} from '../store/slices/auth'
import { PrimaryButton } from '@fluentui/react'

export default function LoginPage() {
  const auth = useSelector(getAuthUser)
  const dispatch = useDispatch()
  const router = useRouter()

	const handleLogin = () => {
		dispatch(loginUser())
	}

	useEffect(() => {
		if(auth.signedIn && !auth.isLoading) {
			router.push('/')
		}
	}, [auth.signedIn, auth.isLoading])
	
  return (
    <Layout title='Login'>
			<p>
				Please Sign in to continue
			</p>
			<PrimaryButton text={auth.isLoading ? "Loading..." : "Login"} aria-label="Async Increment value" onClick={() => handleLogin()} />
    </Layout>
  )
}
