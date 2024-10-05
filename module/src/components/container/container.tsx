import React, { forwardRef, ReactElement } from 'react';
import { BrowserRouter } from "react-router-dom";
import { cn } from '@/lib/utils';

export interface ContainerProps {
    children: React.ReactNode,
    className?: string,
    tag?: "div" | "section" | "article" | "aside" | "header" | "footer" | "main" | "nav" | "span",
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
    ({ children, className, tag }, ref) => {

        const Tag = tag || "div";

        return (
            <Tag ref={ref} className={className}>
                {children}
            </Tag>
            
        )
    }
)
