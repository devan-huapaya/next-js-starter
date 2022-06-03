/*!
 * SignIn
 */
import { SignInResponse, signIn, useSession } from 'next-auth/react'
import { ClientSafeProvider } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { SigninError } from 'types/Error'
import { AlertError } from 'common/AlertError'
import { Button } from 'common/Button'
import { Input } from 'common/Input'
import { SignInFormProps } from './SignInForm.types'

const LOGIN_ERRORS: Record<string, string> = {
	CredentialsSignin: 'Username or password not valid.',
	UserAlreadyExists: 'User with this email already exists.',
	failedLogin: 'Failed to login.'
}

export const SignInForm = ({ providers, csrfToken, className }: SignInFormProps) => {
	const { status } = useSession()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loginErrors, setLoginErrors] = useState<SigninError[]>([])
	const router = useRouter()
	const { callbackUrl, error } = router.query

	useEffect(() => {
		if (status !== 'loading') {
			if (error) {
				if (Array.isArray(error)) {
					setLoginErrors(
						error.map((e) => ({
							id: e,
							message: LOGIN_ERRORS[e]
						}))
					)
				} else {
					setLoginErrors([
						{
							id: error,
							message: LOGIN_ERRORS[error]
						}
					])
				}
			}
		}
		if (status === 'authenticated') {
			const redirectUrl = callbackUrl || '/'
			router.push(redirectUrl as string)
		}
	}, [status, router, callbackUrl, error, setLoginErrors])

	const createAccount = async (provider: ClientSafeProvider) => {
		const signInResponse: SignInResponse | undefined = await signIn(provider.id, {
			email,
			password,
			createAccount: true,
			redirect: false
		})

		if (!signInResponse) {
			setLoginErrors([
				...loginErrors,
				{
					id: 'failedLogin',
					message: LOGIN_ERRORS['failedLogin']
				}
			])
		}

		const error = (signInResponse as unknown as SignInResponse)?.error as string

		if (error)
			setLoginErrors([
				...loginErrors,
				{
					id: error,
					message: LOGIN_ERRORS[error]
				}
			])

		console.log('~ signInResponse', signInResponse)
	}

	return (
		<div data-testid='SignInForm' className={className}>
			<div style={{ overflow: 'hidden', position: 'relative' }} data-testid='SignIn'>
				<div>
					{/* TODO: add logo */}
					<img className='h-36 mx-auto' src='/images/NBDC_logo_full.svg' alt='NBDC Logo' />

					<div>
						<input name='csrfToken' type='hidden' defaultValue={csrfToken} />
						{Object.values(providers).length &&
							Object.values(providers).map((provider) => (
								<div
									className='grid grid-cols-1 gap-6'
									key={provider.name}
									style={{ marginBottom: 0 }}
								>
									{provider.id === 'credentials' && (
										<div className='mb-5'>
											<label className='label' htmlFor='email'>
												Email
											</label>
											<Input
												id='email'
												className='w-full mb-2'
												placeholder='Email'
												type='email'
												data-testid='signin-email'
												value={email}
												onChange={(e) => setEmail(e.target.value)}
											/>
											<label className='label' htmlFor='password'>
												Password
											</label>

											<Input
												className='w-full mb-2'
												id='password'
												placeholder='Password'
												type='password'
												data-testid='signin-password'
												value={password}
												onChange={(e) => setPassword(e.target.value)}
											/>
										</div>
									)}
									<div className='grid grid-cols-1 gap-4'>
										{loginErrors &&
											loginErrors.map((err) => <AlertError key={err.id}>{err.message}</AlertError>)}
									</div>

									<div className='grid grid-cols-1 gap-4'>
										<Button
											className='w-full'
											onClick={() => signIn(provider.id, { email, password })}
										>
											Sign in with {provider.name}
										</Button>
										<Button className='w-full' onClick={() => createAccount(provider)}>
											Create account
										</Button>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	)
}
