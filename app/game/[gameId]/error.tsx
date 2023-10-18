'use client';

import Link from 'next/link';

import { Button } from '@/app/components/UI/Button';

import styles from './error.module.scss';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Что-то пошло не так!</h1>
            <Button
                onClick={reset}
            >
                Попробовать ещё раз
            </Button>
            <Link href='/'>
                <Button>
                    На главную
                </Button>
            </Link>
        </div>
    );
}