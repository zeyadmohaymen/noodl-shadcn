import { forwardRef } from 'react';
import { Link } from "react-router-dom";

export interface LinkProps {
    label: string;
    href: string;
    className?: string;
}

export const ShadcnLink = forwardRef<HTMLAnchorElement, LinkProps>(
    ({ label, href, className }, ref) => {
        return (
            <Link to={href} className={className}>
                {label}
            </Link>
        )
    }
)