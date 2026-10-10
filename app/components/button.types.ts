export type ButtonVariant =
  | 'primary'
  | 'aqua'
  | 'secondary'
  | 'danger'
  | 'warning'
  | 'success'
  | 'info'
  | 'light'
  | 'dark'
  | 'white'

export interface AppButtonProps {
  variant?: ButtonVariant
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
  block?: boolean
}

export interface AppIconButtonProps extends AppButtonProps {
  icon: string
  label: string
  showLabel?: boolean
}
