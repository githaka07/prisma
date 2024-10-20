import Link from 'next/link';
import { NavigationItemStyles } from '@styles';

export default function NavigationItem({
    URL,
    name,
    active,
}: NavigationItemProps) {
    return (
        <Link
            href={URL}
            className={
                active
                    ? NavigationItemStyles.NavigationItemActive
                    : NavigationItemStyles.NavigationItem
            }
        >
            {name}
        </Link>
    );
}
