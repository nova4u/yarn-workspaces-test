import React, { FC } from 'react';

interface ComponentProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
}
declare const Component: FC<React.PropsWithChildren<ComponentProps>>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
declare const Input: FC<InputProps>;

export { Component as Button, Input };
