import { Box, Grid, Stack, Typography } from '@mui/material';
import { Container, fontSize, fontWeight } from '@mui/system';
import Link from 'next/link';
import * as React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FooterContent } from '@/models/content-footer';
export function Footer() {

    const listContent: FooterContent[] = [
        {
            id: '1',
            title: 'Product',
            listItem: ['Download', 'Pricing', 'Locations', 'Server', 'Countries', 'Blog']
        },
        {
            id: '2',
            title: 'Engage',
            listItem: ['LaslesVPN ? ', 'FAQ', 'Tutorials', 'About Us', 'Privacy Policy', 'Terms of Service']
        },
        {
            id: '3',
            title: 'Earn Money',
            listItem: ['Affiliate', 'Become Partner']
        }
    ]

    return (
        <Box sx={{ backgroundColor: '#F8F8F8', height: '540px', display: 'flex', alignItems: 'flex-end' }} >
            <Container>
                <Box component="footer" py={2} textAlign="center"  >
                    <Grid container >
                        <Grid sm={5} >
                            <Box sx={{ cursor: 'pointer', display: 'flex' }} >
                                <Link href='/'><img src="/image/Logo.png" alt="" /></Link>
                            </Box>
                            <Box display={'flex'} padding={'25px 0'} >
                                <Typography color={'#4F5665'} >
                                    <span style={{ fontWeight: '500' }} >LaslesVPN</span> is a private virtual network that<br /> has unique features and has high security.
                                </Typography>
                            </Box>

                            <Stack direction='row' padding={'5px 0px 37px 0px'}>
                                <Box className='footer-icon '  >
                                    <i className="gg-facebook"></i>
                                </Box>
                                <Box className='footer-icon '
                                    sx={{
                                        margin: '0px 15px',
                                    }}
                                >
                                    <TwitterIcon />
                                </Box>
                                <Box className='footer-icon '>
                                    <InstagramIcon />
                                </Box>
                            </Stack>
                            <Box display='flex' >
                                <Typography color={'#AFB5C0'} >©2020LaslesVPN</Typography>
                            </Box>

                        </Grid>
                        {listContent.map((item) => (
                            <Grid sm={2} key={item.id} >
                                <Typography component='h3' display={'flex'} justifyItems={'start'} variant='h6' >{item.title}</Typography>
                                <Box padding={'15px 0'} >
                                    <Typography display={'grid'} justifyItems={'start'} >{item.listItem.map((list, index) => (
                                        <p key={index} style={{ margin: '10px 0' }} >{list}</p>
                                    ))}</Typography>
                                </Box>
                            </Grid>
                        ))}

                    </Grid>
                </Box>
            </Container >
        </Box >
    );
}
