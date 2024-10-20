'use client';
import { useState } from 'react';
import { NavigationStyles } from '@styles';
import Image from 'next/image';

export default function Navigation({ children }: NavigationProps) {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    };
    return (
        <nav className={NavigationStyles.navigation}>
            <nav className={NavigationStyles.navigation_lg}>{children}</nav>
            <nav className={NavigationStyles.navigation_md}>
                <div
                    className={NavigationStyles.navigation_md_trigger}
                    onClick={() => toggleMenu()}
                >
                    {menu ? (
                        <Image
                            src={'/icons/close.svg'}
                            width={25}
                            height={25}
                            alt='Menu Icon'
                        />
                    ) : (
                        <Image
                            src={'/icons/menu.svg'}
                            width={25}
                            height={25}
                            alt='Menu Icon'
                        />
                    )}
                </div>
                {menu ? (
                    <div className={NavigationStyles.navigation_md_navigation}>
                        {children}
                    </div>
                ) : (
                    <></>
                )}
            </nav>
        </nav>
    );
}
