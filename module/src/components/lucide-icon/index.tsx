import Noodl from "@noodl/noodl-sdk";
import { DynamicLucideIcon } from "./lucide";

export interface LucideIconProps {
  icon: string;
  size: number;
  color: string;
  fill: string;
  className?: string;
}

export const LucideIconNode = Noodl.defineReactNode({
  name: "shadcn.lucideIcon",
  displayName: "Lucide Icon",
  category: "Lucide Icon",
  initialize() {},
  getReactComponent() {
    return (props: LucideIconProps) => <DynamicLucideIcon className={props.className} iconName={props.icon} size={props.size} color={props.color} fill={props.fill} />;
  },
  inputs: {},
  inputProps: {
    icon: {
      type: "string",
      displayName: "Icon",
      group: "Icon",
    },
    size: {
      type: "number",
      displayName: "Size",
      group: "Style",
    },
    color: {
      type: "color",
      displayName: "Color",
      group: "Style",
    },
    fill: {
      type: "color",
      displayName: "Fill",
      group: "Style",
    },
    className: {
      type: "string",
      displayName: "Class Name",
      group: "Advanced",
    },
  },
    outputProps: {},
    });

Noodl.defineModule({
    reactNodes: [LucideIconNode],
    nodes: [],
    setup() {},
    });