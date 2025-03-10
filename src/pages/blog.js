import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const BlogPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        document.body.style.backgroundColor = '#333';
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/getBlogPosts');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    const entryStyle = {
        textDecoration: 'underline',
        color: 'white',
        marginTop: '1rem',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        fontSize: '1.4rem'
    };

    const linkStyle = {
        color: '#FFFFFF',
        textDecoration: 'underline',
        fontSize: '20px',
        textAlign: 'center',
    };

    const listItemStyle = {
        marginBottom: '0.5rem'
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <Head>
                <title>My Blog</title>
            </Head>
            <div style={{ backgroundColor: 'black', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ color: 'white', marginTop: '0' }}>My Blog</h1>
                <Link href="/">
                    <button style={{ ...entryStyle, ...linkStyle }}>Go back home</button>
                </Link>
            </div>
            <div style={{ width: '2px', backgroundColor: 'white' }}></div>
            <div style={{ flex: 1, padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <ul style={{ listStyleType: 'disc', color: 'white', fontSize: '1.2rem', padding: '0 2rem', marginTop: '2rem' }}>
                    {posts.map((post, index) => (
                        <li key={index} style={listItemStyle}>
                            {post.link ? (
                                <a href={post.link} target="_blank" rel="noopener noreferrer" style={entryStyle}>
                                    {post.title}
                                </a>
                            ) : (
                                <Link href={`/blog/${index}`}>
                                    <span style={entryStyle}>{post.title}</span>
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BlogPage;