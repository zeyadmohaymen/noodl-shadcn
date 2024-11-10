import React, { forwardRef, ReactElement } from 'react';
import { BrowserRouter } from "react-router-dom";
import { cn } from '@/lib/utils';

export interface GroupProps {
    children: React.ReactNode,
    className?: string,
    tag?: "div" | "section" | "article" | "aside" | "header" | "footer" | "main" | "nav" | "span",
}

export const ShadcnUtilityWrapper = forwardRef<HTMLDivElement, GroupProps>(
    ({ children, className, tag }, ref) => {

        // Apply the passed className to each child element
        const childrenWithClassName = React.Children.map(children, child => {
            if (React.isValidElement(child)) {
                // Type assertion to add className to the props object
                const childWithClassName = React.cloneElement(child as ReactElement<any>, {
                    className: cn((child as ReactElement<any>).props.className, className || ''),
                });
                return childWithClassName;
            }
            // If it's not a valid React element, return as is
            return child;
        });

        const Tag = tag || "div";

        return (
            tag === "header" ? (
            <BrowserRouter>
                <Tag ref={ref} className={className}>
                {childrenWithClassName}
                </Tag>
            </BrowserRouter>
            ) : (
            <Tag ref={ref} className={className}>
                {childrenWithClassName}
            </Tag>
            )
        )
    }
)
