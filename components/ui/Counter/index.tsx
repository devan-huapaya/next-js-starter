import { DefaultButton, IStackTokens, PrimaryButton, Stack, Text } from '@fluentui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, selectCount } from '~store/slices/counter'
import styles from './index.module.scss'

const stackTokens: IStackTokens = { childrenGap: 40 }

export default function Counter(): JSX.Element {
	const count = useSelector(selectCount)
	const dispatch = useDispatch()
	const router = useRouter()

	return (
		<Stack className={styles.counter} horizontal tokens={stackTokens}>
			<DefaultButton text='-' aria-label='Decrement value' onClick={() => dispatch(decrement())} />
			<Text variant={'large'}>{count}</Text>
			<DefaultButton text='+' aria-label='Increment value' onClick={() => dispatch(increment())} />
			<PrimaryButton
				text='Go to profile'
				aria-label='Async Increment value'
				onClick={() => router.push(`/profile/${count}`)}
			/>
		</Stack>
	)
}
