import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './ButtonMedix.css';

interface ButtonMedixProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'accent';
  href?: string;
  target?: string;
  rel?: string;
}

export const ButtonMedix: React.FC<ButtonMedixProps> = ({ children, variant = 'primary', className = '', href, target, rel, ...props }) => {
  const classes = `btn-medix btn-medix-${variant} ${className}`;
  const content = (
    <>
      <span className="btn-medix-text">{children}</span>
      <span className="btn-medix-icon">
        <ArrowUpRight size={20} strokeWidth={2.5} />
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} style={{ textDecoration: 'none' }}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};
