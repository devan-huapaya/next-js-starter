import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount
} from '../../store/slices/counter'
import { DefaultButton, PrimaryButton, Stack, IStackTokens, Text } from '@fluentui/react';
import styles from './Counter.module.scss'
import { useRouter } from 'next/router';

const stackTokens: IStackTokens = { childrenGap: 40 };

export default function Counter() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')
	const router = useRouter()
  
  return (
    <Stack className={styles.counter} horizontal tokens={stackTokens}>
      <DefaultButton text="-" aria-label="Decrement value" onClick={() => dispatch(decrement())} />
      <Text variant={'large'} >{count}</Text>
      <DefaultButton text="+" aria-label="Increment value" onClick={() => dispatch(increment())} />
      <PrimaryButton text="Go to profile" aria-label="Async Increment value" onClick={() => router.push(`/profile/${count}`)} />
    </Stack>
  )
}