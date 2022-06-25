import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { ListPlan } from '@/models/post';

export interface ListChooseProps {
    item: ListPlan
}

export function ListChoose({ item }: ListChooseProps) {
    return (
        <Card sx={{ maxWidth: 345 }} className='choose-plan'>
            <CardActionArea className='choose-card' sx={{ position: 'unset', cursor: 'auto' }} >
                <CardMedia
                    component="img"
                    height="140"
                    image="/image/Free.png"
                    alt="green iguana"
                    sx={{
                        height: '250px',
                        padding: '65px 65px 23px 65px',
                        /* display: flex; */
                        margin: 'auto',
                        width: 'auto'
                    }}
                />
                <CardContent sx={{
                    display: 'flex',
                    /* justify-content: space-between; */
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '0 16px'
                }} >
                    <Typography gutterBottom variant="h6" component="h1" justifyContent='center' display='flex' pb={3}>
                        {item.title}
                    </Typography>
                    <Box>
                        <Stack direction='row' flexDirection='column' justifyContent='flex-start' pb={2.3} height={'245px'} >
                            {item.chooseList.map((item: string, index: string) => (
                                <Typography key={index} display={'flex'} alignItems={'center'} >
                                    <CheckIcon sx={{ color: '#2FAB73', marginRight: '10px' }} />
                                    <p  >{item}</p>
                                </Typography>
                            ))}
                        </Stack>

                    </Box>
                    <Typography gutterBottom variant="h5" component="h1" fontWeight='500' justifyContent='center' display='flex' pt={18}>
                        {item.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className='btn-choose-person' sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '45px' }}  >
                <Button className='btn-choose' sx={{ border: '1px solid #F53838', borderRadius: '50px', padding: '10px 65px' }} size="small" color="primary">
                    Select
                </Button>
            </CardActions>
        </Card>
    );
}
