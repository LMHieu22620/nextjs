import { LayoutProps } from '@/models/index';
import Link from 'next/link';
import * as React from 'react';


export function AdminLayout({ children }: LayoutProps) {
    return (
        <div>
            <h1>admin layout</h1>
            <div>Sidebar</div>

            <Link href="/">
                <a >home</a>
            </Link>
            <Link href="/about">
                <a>about</a>
            </Link>
            <div>{children}</div>
        </div>
    );
}
