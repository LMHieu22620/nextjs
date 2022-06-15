
import { useRouter } from 'next/router';
import * as React from 'react';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/component/common/header'), { ssr: false })

export interface AboutPageProps {
}

export default function AboutPage(props: AboutPageProps) {
    const [postList, setPostList] = React.useState([]);
    const router = useRouter();

    const page = (Number(router.query?.page) || 1)
    console.log("About Query: ", router.query);

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
        <div>
            <h1>About Page</h1>
            <Header />
            <button onClick={handleClik} >Next Page</button>
            <ul>
                {postList.map((post: any) => <li key={post.id} >{post.title}</li>)}
            </ul>
        </div>
    );
}

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