import * as React from 'react';
import { HeaderDesktop } from './header-destop';
import { HeaderMoble } from './header-mobile';

export default function Header() {
    return (
        <>
            <HeaderMoble />
            <HeaderDesktop />
        </>
    );
}
