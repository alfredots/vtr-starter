import React from 'react';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', className = '' }) => {
  return (
    <button type={type} onClick={onClick} className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition ${className}`}>
      {label}
    </button>
  );
};
