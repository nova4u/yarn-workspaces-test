// src/Button.tsx
import { jsx } from "react/jsx-runtime";
var Component = ({
  children,
  onClick,
  ...rest
}) => {
  return /* @__PURE__ */ jsx("button", {
    className: "border border-blue-600 py-4 px-6 rounded-md",
    onClick,
    ...rest,
    children
  });
};
var Button_default = Component;

// src/Input.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Input = ({ ...props }) => {
  return /* @__PURE__ */ jsx2("input", {
    ...props,
    className: "w-full border border-neutral-500/20 rounded-lg pl-2 py-1.5"
  });
};
var Input_default = Input;
export {
  Button_default as Button,
  Input_default as Input
};
