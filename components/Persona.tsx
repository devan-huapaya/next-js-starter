import Link from 'next/link'
import Counter from '../components/Counter'

import { DefaultButton, PrimaryButton, Stack, IStackTokens, ContextualMenu,
	Persona,
	PersonaSize, Text } from '@fluentui/react';
import { getAuthUser, logoutUser } from '../store/slices/auth'

import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import cn from 'classnames'
import style from './Persona.module.scss'
import { useRouter } from 'next/router';

const stackTokens: IStackTokens = { childrenGap: 8 };

export default function ActionBar() {
	const auth = useSelector(getAuthUser)
	const dispatch = useDispatch()
	const [personaMenuOpen,setPersonaMenuOpen,] = useState(false)
	const personaComponent = useRef(null)
	const router = useRouter()

	if(!auth.user?.data)
		return null

	const {firstName, lastName} = auth.user.data;
	
  return (
    <div>
			<div
				onClick={() => setPersonaMenuOpen(true)}
				className={cn(style.persona, 'd-flex align-items-center')}
			>
				<Stack className='d-flex align-items-center' horizontal tokens={{ childrenGap: 8 }}>
					<div className='pr-3'>
						Hello, {auth.user.data.firstName}
					</div>
					<Persona
						ref={personaComponent}
						text={auth.user.data.firstName}
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
						onClick: () => { 	dispatch(logoutUser()) },
					},
				]}
				hidden={!personaMenuOpen}
				target={personaComponent}
				onItemClick={() => setPersonaMenuOpen(false)}
				onDismiss={() => setPersonaMenuOpen(false)}
			/>
    </div>
  )
}
