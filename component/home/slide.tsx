import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { ListReviewPerson } from "@/models/list-review-person";
import StarIcon from '@mui/icons-material/Star';
import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { Navigation, Pagination } from "swiper";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export function Slide() {

    const ListReview: ListReviewPerson[] = [
        {
            id: '1',
            image: '/image/person1.png',
            title: 'Viezh Robert',
            address: 'Warsaw, Poland',
            content: '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.',
        },
        {
            id: '2',
            image: '/image/person2.png',
            title: 'Yessica Christy',
            address: 'Shanxi, China',
            content: '“I like it because I like to travel far and still can connect with high speed.”',
        },
        {
            id: '3',
            image: '/image/person3.png',
            title: 'Kim Young Jou',
            address: 'Seoul, South Korea',
            content: '“This is very unusual for my business that currently requires a virtual private network that has high security.”',
        },
        {
            id: '4',
            image: '/image/person2.png',
            title: 'Robert',
            address: 'Warsaw, Poland',
            content: '“ LaslesVPN always the best”.',
        },
        {
            id: '5',
            image: '/image/person3.png',
            title: ' Robert',
            address: 'Warsaw, Poland',
            content: '“This is very unusual for my business that currently requires a virtual private network that has high security far there have been no problems. LaslesVPN always the best”.',
        },
        {
            id: '6',
            image: '/image/person1.png',
            title: 'Young',
            address: 'Warsaw, Poland',
            content: '“This is very unusual for my business that currently requires a virtual private network that has high security LaslesVPN always the best”.',
        }

    ]
    const [swiper, setSwiper] = React.useState<any>(null);
    const [prev, setPrev] = React.useState<any>(null);

    const nexto = () => {
        swiper.slideNext();
    };
    const prevto = () => {
        prev.slidePrev();
    };
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                onSwiper={(s) => {
                    console.log("initialize swiper", s);
                    setSwiper(s);
                    setPrev(s);
                }}


            >
                {ListReview.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Card sx={{
                            width: '400px',
                            height: '230px',
                            padding: '20px',
                            border: '1px solid #DDDDDD'
                        }}>
                            <CardContent  >
                                <Stack direction='row' alignItems={'center'} >
                                    <Box>
                                        <img src={`${item.image}`} alt="" />
                                    </Box>
                                    <Stack>
                                        <Box className="list-review-top" >
                                            <Typography>{item.title}</Typography>
                                            <Typography>{item.address}</Typography>

                                        </Box>
                                    </Stack>
                                    <Box display='flex' alignItems={'flex-start'} >
                                        <Typography>4.5</Typography>
                                        <StarIcon sx={{ fontSize: '1.2rem', marginLeft: '10px', color: 'gold' }} />
                                    </Box>
                                </Stack>
                                <Typography sx={{ fontSize: 14, textAlign: 'left', padding: '20px 0' }} color="text.secondary" gutterBottom>
                                    {item.content}
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Box display={'flex'} justifyContent={'flex-end'} sx={{
                marginTop: '-45px',
                position: 'absolute',
                zIndex: '10000',
                right: '410px',
            }} >
                <Button className="btn-prev " onClick={prevto}>
                    <ArrowBackIcon />
                </Button>
                <Button className="btn-prev next" onClick={nexto}>
                    <ArrowForwardIcon />
                </Button>
            </Box>


        </>
    );
}

