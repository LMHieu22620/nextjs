import { Container, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import FiveGIcon from '@mui/icons-material/FiveG';

export function Infor() {
    return (
        <Box pt={4} pb={10}  >
            <Container>
                <Box sx={{
                    width: '100%',
                    height: '190px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '10px',
                    boxShadow: '0px 44px 143px -89px #0d1025',
                }} >
                    <Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', position: 'relative' }}>
                        <Stack direction='row' spacing={4} >
                            <Box sx={{
                                width: '55px', height: '55px',
                                backgroundColor: '#FFECEC',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '50px'
                            }} >
                                <PersonIcon sx={{ color: '#F53838' }} />
                            </Box>
                            <Box>
                                <Typography component='h1' variant='h5' fontWeight='bold' >
                                    90+
                                </Typography>
                                <Typography component='h1' variant='h6' fontWeight='300' color='#4F5665' >
                                    Users
                                </Typography>
                                <Typography className='tree-infor' ></Typography>
                            </Box>
                        </Stack>
                        <Stack direction='row' spacing={4} >
                            <Box sx={{
                                width: '55px', height: '55px',
                                backgroundColor: '#FFECEC',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '50px'
                            }} >
                                <AddLocationIcon sx={{ color: '#F53838' }} />
                            </Box>
                            <Box>
                                <Typography component='h1' variant='h5' fontWeight='bold' >
                                    30+
                                </Typography>
                                <Typography component='h1' variant='h6' fontWeight='300' color='#4F5665' >
                                    Locations
                                </Typography>
                                <Typography className='tree-infor-tow' ></Typography>
                            </Box>
                        </Stack>
                        <Stack direction='row' spacing={4} >
                            <Box sx={{
                                width: '55px', height: '55px',
                                backgroundColor: '#FFECEC',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '50px'
                            }} >
                                <FiveGIcon sx={{ color: '#F53838' }} />
                            </Box>
                            <Box>
                                <Typography component='h1' variant='h5' fontWeight='bold' >
                                    50+
                                </Typography>
                                <Typography component='h1' variant='h6' fontWeight='300' color='#4F5665' >
                                    Servers
                                </Typography>
                            </Box>
                        </Stack>
                    </Stack>
                </Box>
            </Container >
        </Box >
    );
}
