import { HeaderStyles } from '@styles';
import { Logo } from '@ui';

export default function Header({ children }: HeaderProps) {
    return (
        <header className={HeaderStyles.header}>
            <Logo />
            {children}
        </header>
    );
}
