"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var ui_exports = {};
__export(ui_exports, {
  Button: () => Button_default,
  Input: () => Input_default
});
module.exports = __toCommonJS(ui_exports);

// src/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Component = ({
  children,
  onClick,
  ...rest
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
    className: "border border-blue-600 py-4 px-6 rounded-md",
    onClick,
    ...rest,
    children
  });
};
var Button_default = Component;

// src/Input.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Input = ({ ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", {
    ...props,
    className: "w-full border border-neutral-500/20 rounded-lg pl-2 py-1.5"
  });
};
var Input_default = Input;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Input
});
