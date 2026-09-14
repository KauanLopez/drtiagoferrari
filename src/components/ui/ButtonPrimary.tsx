import React from 'react';
import { ArrowRight } from 'lucide-react';
import './ButtonPrimary.css';

interface ButtonPrimaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  withArrow?: boolean;
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ children, withArrow, className = '', ...props }) => {
  return (
    <button className={`btn-primary ${className}`} {...props}>
      <span className="btn-text">{children}</span>
      {withArrow && <ArrowRight size={20} className="btn-icon" />}
    </button>
  );
};
