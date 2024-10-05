import Noodl from "@noodl/noodl-sdk";
import type { ReactNode } from "react";
import { ShadcnUtilityWrapper } from "./wrapper";
import { createEnums } from "@/lib/utils";

export interface ShadcnUtilityWrapperProps {
    children: ReactNode[];
    className?: string;
    tag?: "div" | "section" | "article" | "aside" | "header" | "footer" | "main" | "nav" | "span";
}

export const ShadcnUtilityWrapperNode = Noodl.defineReactNode({
    name: "shadcn.utilityWrapper",
    displayName: "Shadcn Utility Wrapper",
    category: "Shadcn Utility",
    initialize() {},
    getReactComponent() {
        return (props: ShadcnUtilityWrapperProps) => (
            <ShadcnUtilityWrapper className={props.className} tag={props.tag}>{props.children}</ShadcnUtilityWrapper>
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
            group: "Advanced",
            type: createEnums(["div", "section", "article", "aside", "header", "footer", "main", "nav", "span"]),
        },
    },
    outputProps: {},
});

Noodl.defineModule({
    reactNodes: [ShadcnUtilityWrapperNode],
    nodes: [],
    setup() {},
});