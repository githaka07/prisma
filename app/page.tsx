import { Header, Main } from '@layout';
import { Button, Navigation, NavigationItem } from '@ui';
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
                    <Button
                        URL=''
                        name='Account'
                    />
                </Navigation>
            </Header>
            <Main>
                <></>
            </Main>
        </>
    );
}
