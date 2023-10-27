import React from 'react'
import './Button.css'
interface ButtonProps {
  text: string
  onClick: () => void
  disabled?: boolean
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled,
  className,
}) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}

export default Button
