import React from 'react'
import PropTypes from 'prop-types'

function Button({children, version, type, isDisabled}) {
  return (
    <button className={`btn btn-${version}`} disabled={isDisabled} type={type}  >{children}</button>
  )
}

Button.defaultProps = {
    version: 'primary',
    isDisabled: false,
    type: 'button'
}

Button.protoTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
    version: PropTypes.string
}

export default Button