import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import { Label } from "./label";

export interface LabelProps {
  htmlFor: string;
  text: string;
  className?: string;
}

export const LabelNode = Noodl.defineReactNode({
  name: "shadcn.label",
  displayName: "SH_Label",
  category: "shadcn",
  initialize() {},
  getReactComponent() {
    return (props: LabelProps) => (
      <Label htmlFor={props.htmlFor} className={props.className}>{props.text}</Label>
    );
  },
  inputs: {},
  inputProps: {
    htmlFor: {
      type: "string",
    },
    text: {
      type: "string",
    },
    className: {
      type: "string",
      default: "",
    },
  },
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [LabelNode],
  nodes: [],
  setup() {},
});
