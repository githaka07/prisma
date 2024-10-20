import { Header, Main } from '@layout';
import { Navigation } from '@ui';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Prisma',
};

export default function Home() {
    return (
        <>
            <Header>
                <Navigation>
                    <p>Home</p>
                    <p>About</p>
                    <button>Account</button>
                </Navigation>
            </Header>
            <Main>
                <></>
            </Main>
        </>
    );
}
