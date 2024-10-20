import { ButtonStyles } from '@styles';
import Link from 'next/link';

export default function Button({ URL, name }: ButtonProps) {
    return (
        <Link
            className={ButtonStyles.Button}
            href={URL}
        >
            {name}
        </Link>
    );
}
