import { Header, Main } from '@layout';
import { Navigation, NavigationItem } from '@ui';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Prisma',
};

export default function Home() {
    return (
        <>
            <Header>
                <Navigation>
                    <NavigationItem
                        URL=''
                        name='Home'
                        active
                    />
                    <NavigationItem
                        URL=''
                        name='Docs'
                    />
                </Navigation>
            </Header>
            <Main>
                <></>
            </Main>
        </>
    );
}
