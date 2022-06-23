import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

interface PostPageProps {
    post: any
}

export default function PostDetailPage({ post }: PostPageProps) {
    const router = useRouter()
    if (!post) return null
    return (
        <div>
            <h1>PostDetailPage</h1>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>

        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {

    // console.log('\nGET STATIC PATHS');
    const reposive = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await reposive.json();
    return {
        paths: data && data.slice(0, 10).map((post: any) => ({ params: { postId: post.id.toString() } })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<PostPageProps> = async (context: GetStaticPropsContext) => {

    console.log('\nGET STATIC PATHS', context.params?.postId);
    // console.log("context", context)
    const postId = context.params?.postId

    if (!postId) return { notFound: true }

    const reposive = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = await reposive.json();
    // console.log(data);


    return {
        props: {
            post: data
        }
    }
}
