import localFont from 'next/font/local';

export const workSans = localFont({
    src: [
        {
            path: '../../public/fonts/work_sans/normal.ttf',
            style: 'normal',
        },
        {
            path: '../../public/fonts/work_sans/italic.ttf',
            style: 'italic',
        },
    ],
});
