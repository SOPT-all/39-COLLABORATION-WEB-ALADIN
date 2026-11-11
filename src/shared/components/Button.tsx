import type { ComponentPropsWithRef } from 'react';

const sizeClasses = {
  medium: 'py-8 text-body-14sb',
  large: 'py-12 text-title-18sb',
};

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  size?: keyof typeof sizeClasses;
}

const Button = ({
  children,
  className = '',
  size = 'medium',
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      type={type}
      className={`w-full rounded-4 bg-pink-500 text-center text-white ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
