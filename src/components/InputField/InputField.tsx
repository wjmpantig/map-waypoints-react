import React, { HTMLProps, FC } from 'react';
import './InputField.scss';

interface Props extends HTMLProps<HTMLInputElement> {
  label: string,
}
const InputField:FC<Props> = ({ id, label, ...props }) => (
  <div className="input-field">
    <label htmlFor={id}>
      {label}
    </label>
    <input id={id} {...props} />
  </div>
);

export default InputField;