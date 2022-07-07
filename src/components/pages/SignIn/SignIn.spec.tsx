/**
 * This is a test file for SignIn
 */
import { render, screen } from '@testing-library/react'
import '__mocks__/index'
import { ClientSafeProvider } from 'next-auth/react'
import React from 'react'
import { SignIn } from './index'

const MOCK_PROVIDER: ClientSafeProvider = {
	id: '1',
	name: 'Credentials',
	type: 'credentials',
	signinUrl: '/auth/signin',
	callbackUrl: 'https://localhost:3000/'
}

describe('SignIn Component', () => {
	it('renders on the page', () => {
		render(<SignIn providers={{ credentials: MOCK_PROVIDER }} csrfToken={''} />)

		const component = screen.getByTestId('SignInForm')

		expect(component).toBeInTheDocument()
	})
})
