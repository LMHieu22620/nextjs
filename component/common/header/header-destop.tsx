import { Box, Link as MuiLink, Stack } from '@mui/material';
import { Container } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ROUTER_LIST } from './router';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { ClassNames } from '@emotion/react';

export interface HeaderDesktopProps {
}

export function HeaderDesktop(props: HeaderDesktopProps) {
    const router = useRouter();
    const headerRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef(null);
    const topRef = useRef(null);


    const [classs, setClass] = useState<string>('');

    useEffect(() => {

        const onScroll = () => {
            if (headerRef.current) {
                if (
                    document.body.scrollTop > 50 ||
                    document.documentElement.scrollTop > 50
                ) {

                    headerRef.current.classList.add("shrink");
                } else {

                    headerRef.current.classList.remove("shrink");
                }
            }
        }
        window.addEventListener("scroll", () => onScroll());

        return () => {
            window.removeEventListener("scroll", () => onScroll());
        };

    }, []);
    return (
        <Box display={{ xs: 'none', md: 'block' }} ref={headerRef} className='header-ctn' >
            <Container >
                <Stack direction='row' justifyContent='space-between' display='flex' alignItems='center' sx={{ width: '100%' }} >
                    <Box sx={{ cursor: 'pointer', display: 'flex' }} >
                        <Link href='/'><img src="/image/Logo.png" alt="" /></Link>
                    </Box>
                    <Box margin='0 98px'  >
                        {ROUTER_LIST.map(route => (
                            <Link key={route.path} passHref href={route.path} >
                                <MuiLink className={`header-text ${clsx({ active: router.pathname === route.path })}`} sx={{
                                    textDecoration: 'none',
                                    color: '#4F5665'
                                }}
                                    margin='0px 20px' >
                                    {route.lable}
                                </MuiLink>
                            </Link>
                        ))}
                    </Box>
                    <Box>
                        <Stack direction='row' >
                            <Box className='header-singup' sx={{
                                fontWeight: '500',
                                display: 'flex',
                                alignItems: 'center',
                                cursor: 'pointer'
                            }} ><Link href='/' >Sign In</Link>
                            </Box>
                            <Box className='header-singup' sx={{
                                marginLeft: '20px',
                                border: '1px solid #F53838',
                                // padding: '8px 47px ',
                                width: '150px',
                                height: '41px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '50px',
                                color: 'primary.main',
                                cursor: 'pointer'
                            }} > <Link href='/'>Sing Up</Link>
                            </Box>
                        </Stack>
                    </Box>
                </Stack >
            </Container >
        </Box >
    );
}
