import { LogoStyles } from '@styles';
import Image from 'next/image';

export default function Logo() {
    return (
        <div className={LogoStyles.logo}>
            <Image
                src={'/logo.svg'}
                alt='Logo'
                width={35}
                height={35}
            />
            <p>Prisma</p>
        </div>
    );
}
