import localFont from 'next/font/local';

export const font = localFont({
    src: [
        {
            path: '../../public/font/normal.ttf',
            style: 'normal',
        },
        {
            path: '../../public/font/italic.ttf',
            style: 'italic',
        },
    ],
});
