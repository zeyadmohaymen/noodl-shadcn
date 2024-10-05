import Noodl from '@noodl/noodl-sdk';
import { Navbar, NavLink } from './navbar';
import { createEnums } from '@/lib/utils';

export interface NavbarProps {
    logo: string; // URL of the logo image
    links: NavLink[];
    alignment?: "start" | "center" | "end"; // Alignment of the navigation links
    ctaLabel: string; // Label for the Call to Action button
    ctaHref: string; // URL for the Call to Action button
    }

export const NavbarNode = Noodl.defineReactNode({
    name: 'shadcn.navbar',
    displayName: 'Shadcn Navbar',
    category: 'Shadcn Blocks',
    initialize() {},
    getReactComponent() {
        return (props: NavbarProps) => {
            return <Navbar {...props} />;
        };
    },
    allowChildrenWithCategory: [],
    inputs: {
    },
    inputProps: {
        logo: {
            displayName: 'Logo',
            type: 'image',
            default: '',
            group: 'Content',
        },
        links: {
            displayName: 'Links',
            type: {
                name: 'array',
                codeeditor: 'javascript',
            },
            default: [
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
            ],
            group: 'Content',
        },
        alignment: {
            displayName: 'Alignment',
            type: createEnums(["start", "center", "end"]),
            default: 'center',
            group: 'Content',
        },
        ctaLabel: {
            displayName: 'CTA Label',
            type: 'string',
            default: 'CTA',
            group: 'CTA',
        },
        ctaHref: {
            displayName: 'CTA URL',
            type: 'string',
            default: '',
            group: 'CTA',
        },
    },
    outputProps: {},
});

Noodl.defineModule({
    reactNodes: [NavbarNode],
    nodes: [],
    setup() {},
  });