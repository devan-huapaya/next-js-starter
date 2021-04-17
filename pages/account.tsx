import Layout from '../components/Layouts/ContainerLayout'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {
	getAuthUser,
  loginUser,
} from '../store/slices/auth'
import { PrimaryButton } from '@fluentui/react'

export default function AccountPage() {
  const auth = useSelector(getAuthUser)
  const dispatch = useDispatch()
  const router = useRouter()
	const {firstName, lastName} = auth.user?.data || {};
	
	const handleLogin = () => {
		dispatch(loginUser())
	}

  return (
    <Layout title='Account Info'>
			<p>
				name: {firstName} {lastName}
			</p>
			<p>
				accessToken: {auth.user?.credential?.accessToken}
			</p>
    </Layout>
  )
}
