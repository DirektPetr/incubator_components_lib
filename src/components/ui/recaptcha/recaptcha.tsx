import { ComponentPropsWithoutRef } from 'react'
import s from './recaptcha.module.scss'
import { Recaptchalogo1 } from '@/assets/components'
import { clsx } from 'clsx'

export type RecaptchaProps = {
  errorMsg?: string
  variant?: 'default' | 'error' | 'checked' | 'loading' | 'expired'
  label?: string
} & ComponentPropsWithoutRef<'div'>

export function Recaptcha({ className, variant = 'default', ...rest }: RecaptchaProps) {
  return (
    <div {...rest} className={clsx(s.recaptchaRoot, s[variant], className)}>
      <div className={s.containerLeft}>
        <input className={s.checkbox} type="checkbox" name="checkbox" id="checkbox" />
        <label className={s.label}></label>
      </div>
      <div className={s.containerRight}>
        <Recaptchalogo1 className={s.logo} />
        <p className={s.privacy}>
          <a href="#">Privacy</a> - Terms
        </p>
      </div>
    </div>
  )
}
