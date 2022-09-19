import React, { FC } from "react";

interface ComponentProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Component: FC<React.PropsWithChildren<ComponentProps>> = ({
  children,
  onClick,
  ...rest
}) => {
  return (
    <button
      className="border border-blue-600 py-4 px-6 rounded-md"
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Component;
