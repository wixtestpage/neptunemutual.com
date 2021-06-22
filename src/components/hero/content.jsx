import * as React from 'react'
import { Trans } from '@lingui/macro'
import { APP_URL, SEED_INVESTMENT_URL } from '../../utils/config'
import { FilledLink } from '../buttons/filled'
import { OutlineLink } from '../buttons/outline'
import * as styles from './styles.module.css'

export const Content = () => {
  return (
    <div className='text-center w-full max-w-5xl flex flex-col items-center'>
      <h1 className={styles.content_h1}>
        <Trans>
          Are you ready to shed light on the future!
        </Trans>
      </h1>
      <p className={styles.content_p}>
        <Trans>
          Wix Finance provides you with{' '}
          <span className='text-gray-100'>guaranteed stablecoin liquidity</span>{' '}
          to reduce your risk exposure by hedging against possible capital risks
          and smart contract vulnerabilities.
        </Trans>
      </p>
      <div className={styles.content_cta}>
        <OutlineLink href={SEED_INVESTMENT_URL} className='px-7 py-3'>
          <Trans>Seed Investment</Trans>
        </OutlineLink>
        <FilledLink href={APP_URL} className='px-7 py-3' external>
          <Trans>LAUNCH APP</Trans>
        </FilledLink>
      </div>
    </div>
  )
}
