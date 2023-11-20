import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const BlogPost = ({ post }) => {
    return (
        <div>
            <Head>
                <title>{post.title}</title>
            </Head>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href="/">
                <a>Back to Home</a>
            </Link>
        </div>
    );
};

export async function getStaticProps(context) {
    const { id } = context.params;
    const res = await fetch(`http://localhost:3000/api/getBlogPosts/${id}`);
    const post = await res.json();

    return {
        props: { post },
    };
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/getBlogPosts');
    const posts = await res.json();

    const paths = posts.map((_, index) => ({
        params: { id: index.toString() },
    }));

    return {
        paths,
        fallback: false
    };
}

export default BlogPost;
