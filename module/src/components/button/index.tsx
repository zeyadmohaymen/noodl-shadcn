import Noodl from "@noodl/noodl-sdk";
import { Button } from "./button";
import { createEnums } from "@/lib/utils";

export interface ButtonProps {
  label: string;
  variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size: "default" | "sm" | "lg" | "icon";
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  children?: React.ReactNode;
}

export const ButtonNode = Noodl.defineReactNode({
  name: "shadcn.button",
  displayName: "Shadcn Button",
  category: "Shadcn Components",
  initialize() {},
  getReactComponent() {
    return (props: ButtonProps) => (
      <Button variant={props.variant} size={props.size} onClick={props.onClick} className={props.className}>
        {props.children ?? props.label}
      </Button>
    );
  },
  inputs: {},
  inputProps: {
    label: {
      displayName: "Label",
      type: "string",
      default: "Label",
      group: "Label",
    },
    variant: {
      displayName: "Variant",
      default: "default",
      type: createEnums(["default", "destructive", "outline", "secondary", "ghost", "link"]),
      group: "Style",
    },
    size: {
      displayName: "Size",
      default: "default",
      type: createEnums(["default", "sm", "lg", "icon"]),
      group: "Style",
    },
    className: {
      displayName: "Class Name",
      type: "string",
      default: "",
      group: "Advanced",
    },
  },
  outputProps: {
    onClick: {
      type: "signal",
      group: "Events",
      displayName: "Click",
    },
  },
});

Noodl.defineModule({
  reactNodes: [ButtonNode],
  nodes: [],
  setup() {},
});
