import type { ComponentPropsWithRef } from 'react';

const variantClasses = {
  primary: 'bg-pink-500 text-white enabled:active:bg-pink-600',
  secondary:
    'bg-white text-pink-500 inset-ring inset-ring-pink-500 enabled:active:bg-pink-50',
};

const sizeClasses = {
  medium: 'py-8 text-body-14sb',
  large: 'py-12 text-title-18sb',
};

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  size?: keyof typeof sizeClasses;
  variant?: keyof typeof variantClasses;
}

const Button = ({
  children,
  className = '',
  size = 'medium',
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      type={type}
      className={`w-full rounded-4 text-center ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
