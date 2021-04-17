
import { useSelector, useDispatch } from 'react-redux'
import { getAuthUser } from '../../store/slices/auth'
import SignIn from '../SignIn'
import ActionBar from '../ActionBar'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function DefaultLayout({children}) {
	const router = useRouter()
  const auth = useSelector(getAuthUser)

	useEffect(() => {
		if(!auth.signedIn && !auth.isLoading && router.route !== '/login') {
			router.push('/login')
		}
	}, [auth.signedIn, auth.isLoading, router.pathname])
	
  return (
    <>
      <ActionBar />
      
      {children}
    </>
  )
}