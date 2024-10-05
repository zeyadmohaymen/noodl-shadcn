import Noodl from "@noodl/noodl-sdk";
import { DynamicLucideIcon } from "./lucide";

export interface LucideIconProps {
  icon: string;
  size: number;
  color: string;
}

export const LucideIconNode = Noodl.defineReactNode({
  name: "shadcn.lucideIcon",
  displayName: "Lucide Icon",
  category: "Lucide Icon",
  initialize() {},
  getReactComponent() {
    return (props: LucideIconProps) => <DynamicLucideIcon iconName={props.icon} size={props.size} color={props.color} />;
  },
  inputs: {},
  inputProps: {
    icon: {
      type: "string",
      displayName: "Icon",
    },
    size: {
      type: "number",
      displayName: "Size",
    },
    color: {
      type: "color",
      displayName: "Color",
    },
    },
    outputProps: {},
    });

Noodl.defineModule({
    reactNodes: [LucideIconNode],
    nodes: [],
    setup() {},
    });