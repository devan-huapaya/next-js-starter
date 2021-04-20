import { ContextualMenu, Persona, PersonaSize, Stack } from '@fluentui/react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthUser, logoutUser } from '~slices/auth'
import style from './index.module.scss'

export default function ActionBar(): JSX.Element {
	const auth = useSelector(getAuthUser)
	const dispatch = useDispatch()
	const [personaMenuOpen, setPersonaMenuOpen] = useState(false)
	const personaComponent = useRef(null)
	const router = useRouter()

	if (!auth.user?.data) return null

	const { firstName } = auth.user.data

	return (
		<div>
			<div
				onClick={() => setPersonaMenuOpen(true)}
				className={cx(style.persona, 'd-flex align-items-center')}
			>
				<Stack className='d-flex align-items-center' horizontal tokens={{ childrenGap: 8 }}>
					<div className='pr-3'>Hello, {firstName}</div>
					<Persona
						ref={personaComponent}
						text={firstName}
						size={PersonaSize.size32}
						hidePersonaDetails={true}
					/>
				</Stack>
			</div>
			<ContextualMenu
				items={[
					{
						key: 'viewAccount',
						text: 'Account',
						onClick: () => router.push('/account')
					},
					{
						key: 'logoutUserPersonaMenu',
						text: 'Logout',
						onClick: () => {
							dispatch(logoutUser())
						}
					}
				]}
				hidden={!personaMenuOpen}
				target={personaComponent}
				onItemClick={() => setPersonaMenuOpen(false)}
				onDismiss={() => setPersonaMenuOpen(false)}
			/>
		</div>
	)
}
