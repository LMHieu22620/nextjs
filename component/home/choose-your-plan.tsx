import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Stack, Typography, Grid } from '@mui/material';
import { Container } from '@mui/system';
import * as React from 'react';
import { ListPlan } from '@/models/post';
import ListChoose from './list_choose';



export default function ChooseYourPlan() {

    const ListPlan: ListPlan[] = [
        {
            id: '1',
            title: 'Free Plan',
            chooseList: ['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices'],
            price: 'Free'
        },
        {
            id: '2',
            title: 'Standard Plan',
            chooseList: ['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices', 'Connect Anyware'],
            price: '$9 / mo'
        },
        {
            id: '3',
            title: 'Premium Plan',
            chooseList: ['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices', 'Connect Anyware', 'Get New Features'],
            price: '$12 / mo'
        }
    ]

    return (
        <Box pt={13} pb={10} sx={{ backgroundColor: '#F6F6F6' }} >

            <Container >
                <Box  >
                    <Typography component='h1' variant='h4' fontSize='40px' fontWeight='500' display='flex' justifyContent='center' >
                        Choose Your Plan
                    </Typography>
                    <Box pt={3}>
                        <Typography sx={{ color: '#4F5665' }} display='flex' justifyContent='center' alignItems='center' lineHeight='1.8'>
                            Let's choose the package that is best for you and explore it happily and
                        </Typography>
                        <Typography sx={{ color: '#4F5665' }} display='flex' justifyContent='center' alignItems='center' >  cheerfully.</Typography>

                    </Box>
                    <Grid container pt={10} >
                        {ListPlan.map((item) => (
                            <Grid xs={4} key={item.id} >
                                <ListChoose item={item} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container >
        </Box >
    );
}
