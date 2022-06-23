import { Box, Container, Typography } from '@mui/material';
import * as React from 'react';
import Image from 'next/image';
import HugeGlobal from '@/images/HugeGlobal.png'


export interface NetWorkImgProps {
}

export default function NetWorkImg(props: NetWorkImgProps) {
    return (
        <Container >
            <Box pt={10} >
                <Box>
                    <Typography component='h1' variant='h4' fontSize='40px' fontWeight='500' display='flex' justifyContent='center' >
                        Huge Global Network
                    </Typography>
                    <Typography component='h1' variant='h4' fontSize='40px' fontWeight='500' display='flex' justifyContent='center'>of Fast VPN</Typography>
                </Box>
                <Box pt={3}>
                    <Typography sx={{ color: '#4F5665' }} display='flex' justifyContent='center' alignItems='center' lineHeight='1.8'>
                        See <span style={{ padding: '0px 5px', fontWeight: '500' }} >LaslesVPN  </span> everywhere to make it easier for you when you move locations.
                    </Typography>
                    <Typography sx={{ color: '#4F5665' }} display='flex' justifyContent='center' alignItems='center' >  locations.</Typography>

                </Box>
            </Box>
            <Box sx={{
                marginTop: '150px',
                display: 'flex',
                justifyContent: 'center'
            }} >
                <Image src={HugeGlobal} />
            </Box>
        </Container >
    );
}
