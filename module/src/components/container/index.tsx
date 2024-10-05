import Noodl from "@noodl/noodl-sdk";
import type { ReactNode } from "react";
import { Container } from "./container";
import { createEnums } from "@/lib/utils";

export interface ContainerProps {
    children: ReactNode[];
    className?: string;
    tag?: "div" | "section" | "article" | "aside" | "header" | "footer" | "main" | "nav" | "span";
}

export const ContainerNode = Noodl.defineReactNode({
    name: "shadcn.Container",
    displayName: "Utility Container",
    category: "Utility",
    initialize() {},
    getReactComponent() {
        return (props: ContainerProps) => (
            <Container className={props.className} tag={props.tag}>{props.children}</Container>
        );
    },
    inputs: {},
    inputProps: {
        className: {
            type: "string",
            default: "",
            displayName: "Class Name",
            group: "Styling",
        },
        tag: {
            default: "div",
            displayName: "Tag",
            group: "General",
            type: createEnums(["div", "section", "article", "aside", "header", "footer", "main", "nav", "span"]),
        },
    },
    outputProps: {},
});

Noodl.defineModule({
    reactNodes: [ContainerNode],
    nodes: [],
    setup() {},
});