import { ComponentPropsWithoutRef } from 'react'
import s from './recaptcha.module.scss'
import { CheckmarkOutline, Recaptchalogo1 } from '@/assets/components'
import { clsx } from 'clsx'

export type RecaptchaProps = {
  errorMsg?: string
  expiredMsg?: string
  type?: 'default' | 'checked' | 'loading'
  label?: string
  isChecked?: boolean
} & ComponentPropsWithoutRef<'div'>

const Recaptcha = ({
  className,
  label,
  type = 'default',
  isChecked,
  expiredMsg,
  errorMsg,
  ...rest
}: RecaptchaProps) => {
  return (
    <div {...rest} className={errorMsg && s.error}>
      <div className={clsx(s.recaptchaRoot, className)}>
        {expiredMsg && <div className={expiredMsg ? s.expiredMsg : ''}>{expiredMsg}</div>}
        <div className={clsx(s[type], className)}>
          <label className={s.containerLeft}>
            {type === 'default' && (
              <input
                className={s.checkbox}
                type="checkbox"
                name="checkbox"
                id="checkbox"
                checked={isChecked}
              />
            )}
            {type === 'checked' && (
              <div className={s.checkedIcon}>
                <CheckmarkOutline />
              </div>
            )}
            {type === 'loading' && (
              <div className={s.loadingIcon}>
                <span className={s.loader}></span>
              </div>
            )}
            <span className={s.label}>{label}</span>
          </label>

          <div className={s.containerRight}>
            <Recaptchalogo1 className={s.logo} />
            <p className={s.privacy}>
              <a href="#">Privacy</a> - Terms
            </p>
          </div>
        </div>
      </div>
      <div className={errorMsg ? s.errorMsg : ''}>{errorMsg}</div>
    </div>
  )
}

export default Recaptcha
