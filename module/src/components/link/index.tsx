import Noodl from "@noodl/noodl-sdk";
import { ShadcnLink } from "./link";

interface ShadcnLinkProps {
    label: string;
    href: string;
    className?: string;
}

export const ShadcnLinkNode = Noodl.defineReactNode({
    name: "shadcn.link",
    displayName: "Shadcn Link",
    category: "Shadcn Utility",
    initialize() {},
    getReactComponent() {
        return (props: ShadcnLinkProps) => (
            <ShadcnLink label={props.label} href={props.href} className={props.className} />
        );
    },
    inputs: {},
    inputProps: {
        label: {
            type: "string",
            default: "Label",
            displayName: "Label",
            group: "Content",
        },
        href: {
            type: "string",
            default: "/",
            displayName: "Path",
            group: "Content",
        },
        className: {
            type: "string",
            default: "",
            displayName: "Class Name",
            group: "Styling",
        },
    },
    outputProps: {},
});

Noodl.defineModule({
    reactNodes: [ShadcnLinkNode],
    nodes: [],
    setup() {},
});