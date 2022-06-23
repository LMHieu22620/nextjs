
import { useRouter } from 'next/router';
import * as React from 'react';
import dynamic from 'next/dynamic';
import { MainLayout } from '@/component/layout';
import { Box, Typography } from '@mui/material';

const Header = dynamic(() => import('@/component/common/header/index'), { ssr: false })

export interface AboutPageProps {
}

export default function AboutPage(props: AboutPageProps) {
    const [postList, setPostList] = React.useState([]);
    const router = useRouter();

    const page = (Number(router.query?.page) || 1)
    // console.log("About Query: ", router.query);

    React.useEffect(() => {
        (async () => {
            const reposive = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await reposive.json();
            setPostList(data)
        })()
    }, [])

    const handleClik = () => {
        router.push({
            pathname: '/about',
            query: {
                page: (Number(router.query?.page) || 1) + 1
            }
        }, undefined, { shallow: true })
    }

    return (

        <Box>
            <Typography component="h1" variant='h3' color="primary.main" >About Page</Typography>
            <button onClick={handleClik} >Next Page</button>
            <ul>
                {postList.map((post: any) => <li key={post.id} >{post.title}</li>)}
            </ul>
        </Box>


    );
}

AboutPage.Layout = MainLayout

export async function getStaticProps() {
    console.log('get static props');

    return {
        props: {}, // will be passed to the page component as props
    }
}

// export async function getServerSideProps() {
//     return {
//         props: {}, // will be passed to the page component as props
//     }
// }