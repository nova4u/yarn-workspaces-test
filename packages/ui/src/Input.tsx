import React, { FC } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ ...props }) => {
  return (
    <input
      {...props}
      className="w-full border border-neutral-500/20 rounded-lg pl-2 py-1.5"
    ></input>
  );
};

export default Input;
