import Link from 'next/link';

export default function Button({ URL, name }) {
    return <Link href={URL}>{name}</Link>;
}
