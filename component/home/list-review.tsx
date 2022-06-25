import { Box, Button, Container, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { Slide } from './slide';


export function ListReview() {
    return (
        <Box pb={25} >

            <Container className='edit-padding' sx={{ padding: '0px' }} >
                <Box  >
                    <Box>
                        <Typography component='h1' variant='h4' fontSize='40px' fontWeight='500' display='flex' justifyContent='center' >
                            Trusted by Thousands of
                        </Typography>
                        <Typography component='h1' variant='h4' fontSize='40px' fontWeight='500' display='flex' justifyContent='center'>Happy Customer</Typography>
                    </Box>
                    <Box pt={3}>
                        <Typography sx={{ color: '#4F5665' }} display='flex' justifyContent='center' alignItems='center' lineHeight='1.8'>
                            These are the stories of our customers who have joined us with great
                        </Typography>
                        <Typography sx={{ color: '#4F5665' }} display='flex' justifyContent='center' alignItems='center' lineHeight='1.8'>
                            pleasure when using this crazy feature.
                        </Typography>
                    </Box>
                </Box>
                <Slide />
                <Box  >
                    <Container className='box-subcribe' >
                        <Stack direction='row' width={'100%'} justifyContent={'space-between'} alignItems={'center'} >
                            <Box>
                                <Typography component='h1' variant='h5' fontWeight={'500'} marginBottom={'5px'} >Subscribe Now for <br /> Get Special Features!</Typography>
                                <Typography fontSize={'.8rem'} >Let&apos;s subscribe with us and find the fun.</Typography>
                            </Box>
                            <Box>
                                <Button className='btn-get-static' sx={{ width: '180px', height: '45px', boxShadow: '0px 27px 42px -12px #F53838' }} variant='contained' >Get Static</Button>
                            </Box>
                        </Stack>
                    </Container>
                </Box>
            </Container >
        </Box >
    );
}
