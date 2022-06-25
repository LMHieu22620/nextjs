import { Box, Button, Stack, Typography } from '@mui/material';
import { Container, width } from '@mui/system';
import Image from 'next/image';
import * as React from 'react';
import Illustration from '@/images/Illustration.png'
export function HeroSection() {
    return (
        <Box pt={23} pb={6} >
            <Container>
                <Stack direction='row' >
                    <Box flex={1} >
                        <Typography component='h2' variant='h3' fontWeight='400' mb={5} >Want anything to be<br /> easy with
                            <Typography display='contents' fontWeight='500' component='h2' variant='h3' >LaslesVPN.</Typography>
                        </Typography>
                        <Typography mb={8} >Provide a network for all your needs with ease and fun using
                            <Typography display='contents' fontWeight='500'  > LaslesVPN</Typography>
                            <br /> discover interesting features from us.
                        </Typography>
                        <Button className='btn-get-static' sx={{ width: '200px', height: '50px', boxShadow: '0px 27px 42px -12px #F53838' }} variant='contained' >Get Static</Button>
                    </Box>
                    <Box minWidth='280px' flex={1} >
                        <Image height={120} width={200} src={Illustration} layout='responsive' alt='Illustration' />
                    </Box>
                </Stack>
            </Container>
        </Box >
    );
}
