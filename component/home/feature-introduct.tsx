import { Container, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import * as React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Illustration2 from '@/images/Illustration2.png'


export function Introduct() {
    return (
        <Container>
            <Box pb={15} >
                <Stack direction='row'>
                    <Box flex='1' >
                        <Image src={Illustration2} width='500px' />
                    </Box>
                    <Box flex='1' margin='70px 0px 0px 145px  '>
                        <Typography component='h1' variant='h4' fontWeight='500' >
                            We Provide Many <br />Features You Can Use
                        </Typography>
                        <Typography p='30px 0' lineHeight='1.8' >
                            You can explore the features that we provide with fun <br /> and have their own functions each feature.
                        </Typography>
                        <Box  >
                            <Stack direction='row' pb={2} >
                                <CheckCircleIcon sx={{ color: '#2FAB73', marginRight: '10px' }} />
                                <Typography>
                                    Powerfull online protection.
                                </Typography>
                            </Stack>
                            <Stack direction='row' pb={2} >
                                <CheckCircleIcon sx={{ color: '#2FAB73', marginRight: '10px' }} />
                                <Typography>
                                    Internet without borders.
                                </Typography>
                            </Stack>
                            <Stack direction='row' pb={2} >
                                <CheckCircleIcon sx={{ color: '#2FAB73', marginRight: '10px' }} />
                                <Typography>
                                    Supercharged VPN
                                </Typography>
                            </Stack>
                            <Stack direction='row' >
                                <CheckCircleIcon sx={{ color: '#2FAB73', marginRight: '10px' }} />
                                <Typography>
                                    No specific time limits.
                                </Typography>
                            </Stack>
                        </Box>
                    </Box>
                </Stack >
            </Box >
        </Container>
    );
}
