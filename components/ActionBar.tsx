import Link from 'next/link'
import Counter from '../components/Counter'
import Persona from './Persona'

import { DefaultButton, PrimaryButton, Stack, IStackTokens } from '@fluentui/react';

import { useSelector } from 'react-redux';
import { useState } from 'react';
import { getAuthUser } from '../store/slices/auth';
import CRC from '../components/CRC'

const stackTokens: IStackTokens = { childrenGap: 40 };

export default function ActionBar({children}) {
	const auth = useSelector(getAuthUser)
	
  return (
    <div className={'actionBar'}>
			<CRC>
				<div className='d-flex justify-content-between align-items-center'>

				<Link href="/" >
					home
				</Link>

				{children}
				
				<Persona />
				</div>
			</CRC>
    </div>
  )
}
