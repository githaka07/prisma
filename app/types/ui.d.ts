import { ReactNode } from 'react';

declare global {
    interface NavigationProps {
        children: ReactNode;
    }
    interface NavigationItemProps {
        URL: string;
        name: string;
        active?: boolean;
    }
    interface ButtonProps {
        URL: string;
        name: string;
    }
}
export {};
