import { GetStaticProps, GetStaticPropsContext } from 'next';
import * as React from 'react';
import Link from 'next/link';
export interface PostListPageProps {
    posts: []
}

export default function PostListPage({ posts }: PostListPageProps) {
    // console.log("post: ", posts);
    interface listItem {
        id: number;
        title: string
    }
    return (
        <div>
            <h1>Post List Page</h1>
            <ul>
                {posts.map((item: listItem) => (

                    <li key={item.id} >
                        <Link href={`/post/${item.id}`} >
                            <a >{item.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div >
    );
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (context: GetStaticPropsContext) => {

    const reposive = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await reposive.json();
    // console.log(data);


    return {
        props: {
            posts: data
        }
    }
}