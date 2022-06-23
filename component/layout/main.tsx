import { LayoutProps } from '@/models/index';
import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import * as React from 'react';
import { Footer } from '../common';
import Header from '../common/header'
export interface IMainLayoutProps {
}

export function MainLayout({ children }: LayoutProps) {
    React.useEffect(() => {
        console.log('main mounting');
        return () => console.log('main unmounting');

    }, [])


    return (
        <Stack minHeight="100vh" >
            <Header />
            <Box component="main" flexGrow={1} >
                {children}
            </Box>
            <Footer />
        </Stack >
    );
}
