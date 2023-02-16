import React from 'react'
import stlyes from '@/styles/Button.module.css'

const Button = ({text, onClick}) => {
  return (
    <button className={stlyes.primaryButton} onClick={() => onClick}>{text}</button>
  )
}

export default Button