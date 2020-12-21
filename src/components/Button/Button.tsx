import React, { ButtonHTMLAttributes, FC } from 'react';
import './Button.scss';

const Button:FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <button {...props} />
);

export default Button;
