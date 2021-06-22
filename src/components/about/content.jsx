import * as React from 'react'
import { GET_TOKENS_URL } from '../../utils/config'
import { OutlineLink } from '../buttons/outline'

export const Content = () => {
  return (
    <div className='lg:col-span-3'>
      <p className='mb-6'>
        Wix believes in the 
    <strong>Binance Smart Chain</strong>{' '}
        network and feels it will become stronger.
      </p>
      <p className='mb-6'>
        Wix works for people who look to the future with hope and never gets tired.
      </p>

      <ul className='pl-6 list-disc list-outside mb-8'>
        <li>Use WIX to stake and create contracts and markets</li>
        <li>Burn WIX to create contracts and markets</li>
        <li>Use WIX to vote in the governance of the platform’s future</li>
        <li>
          Lock NEP to provide liquidity, secure the protocol, and yield
          additional rewards
        </li>
        <li>Hold NEP in your wallet to purchase and claim coverage</li>
      </ul>
      <OutlineLink
        href={GET_TOKENS_URL}
        external
        className='mb-4'
        data-sal-duration='400'
        data-sal='zoom-out'
      >
        Get nep tokens
      </OutlineLink>
    </div>
  )
}
