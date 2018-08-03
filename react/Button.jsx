import React from 'react'
import {pick} from '../lib/utils'

const Button = () => {
  const mods = pick(this.props, ['primary', 'secondary', 'disabled', 'outline', 'text'])
  const {children, as, primary, secondary, disabled, outline, text, ...rest} = this.props
  const As = as || 'button'
  return <As block='b' mods={mods} {...rest}>{children}</As>
}

export default Button
