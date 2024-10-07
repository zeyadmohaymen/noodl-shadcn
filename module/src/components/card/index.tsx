import type { ReactNode } from "react";

import Noodl from "@noodl/noodl-sdk";
import * as Card from "./card";

export interface CardProps {
  title?: string;
  description?: string;
  children: ReactNode[];
  className?: string;
}

export const CardNode = Noodl.defineReactNode({
  name: "Shadcn Card",
  category: "Shadcn Components",
  initialize() {},
  getReactComponent() {
    return (props: CardProps) => {
      return <Card.Card className={props.className}>{props.children}</Card.Card>;
    };
  },
  allowChildren: true,
  allowChildrenWithCategory: ["shadcn Card"],
  inputs: {},
  inputProps: {
    className: {
      displayName: "Class Name",
      type: "string",
      default: "",
      group: "Advanced",
    },
  },
  outputProps: {},
});

export const CardHeaderNode = Noodl.defineReactNode({
  name: "shadcn.cardHeader",
  displayName: "SH_CardHeader",
  category: "shadcn Card",
  initialize() {},
  getReactComponent() {
    return (props: CardProps) => (
      <Card.CardHeader className={props.className}>{props.children}</Card.CardHeader>
    );
  },
  inputs: {},
  inputProps: {
    className: {
      displayName: "Class Name",
      type: "string",
      default: "",
      group: "Advanced",
    },
  },
  outputProps: {},
});

export const CardTitleNode = Noodl.defineReactNode({
  name: "shadcn.cardTitle",
  displayName: "SH_CardTitle",
  category: "shadcn Card",
  initialize() {},
  getReactComponent() {
    return (props: CardProps) => (
      <Card.CardTitle className={props.className}>{props.title}</Card.CardTitle>
    );
  },
  inputs: {},
  inputProps: {
    title: {
      displayName: "Title",
      type: "string",
      default: "Card Title",
    },
    className: {
      displayName: "Class Name",
      type: "string",
      default: "",
      group: "Advanced",
    },
  },
  outputProps: {},
});

export const CardDescriptionNode = Noodl.defineReactNode({
  name: "shadcn.cardDescription",
  displayName: "SH_CardDescription",
  category: "shadcn Card",
  initialize() {},
  getReactComponent() {
    return (props: CardProps) => (
      <Card.CardDescription className={props.className}>{props.description}</Card.CardDescription>
    );
  },
  inputs: {},
  inputProps: {
    description: {
      displayName: "Description",
      type: "string",
      default: "Card Description",
    },
    className: {
      displayName: "Class Name",
      type: "string",
      default: "",
      group: "Advanced",
    },
  },
  outputProps: {},
});

export const CardContentNode = Noodl.defineReactNode({
  name: "shadcn.cardContent",
  displayName: "SH_CardContent",
  category: "shadcn Card",
  initialize() {},
  getReactComponent() {
    return (props: CardProps) => (
      <Card.CardContent className={props.className}>{props.children}</Card.CardContent>
    );
  },
  inputs: {},
  inputProps: {
    className: {
      displayName: "Class Name",
      type: "string",
      default: "",
      group: "Advanced",
    },
  },
  outputProps: {},
});

export const CardFooterNode = Noodl.defineReactNode({
  name: "shadcn.cardFooter",
  displayName: "SH_CardFooter",
  category: "shadcn Card",
  initialize() {},
  getReactComponent() {
    return (props: CardProps) => (
      <Card.CardFooter className="flex justify-between items-center gap-2">
        {props.children}
      </Card.CardFooter>
    );
  },
  inputs: {},
  inputProps: {},
  outputProps: {},
});

Noodl.defineModule({
  reactNodes: [
    CardNode,
    CardHeaderNode,
    CardTitleNode,
    CardDescriptionNode,
    CardContentNode,
    CardFooterNode,
  ],
  nodes: [],
  setup() {},
});
