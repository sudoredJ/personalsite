import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const BlogPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Set the background color to dark grey
        document.body.style.backgroundColor = '#333';

        // Fetch posts from the API
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
        fontSize: '1.4rem' // Increase the font size
    };

    const linkStyle = {
        color: '#FFFFFF',
        textDecoration: 'underline',
        fontSize: '20px',
        textAlign: 'center',
    };

    const listItemStyle = {
        marginBottom: '0.5rem' // Add margin to the list items
    };

// This is a React component for a blog page
return (
    // This is a container div that uses flexbox to layout its children. It has a height of 100vh, which means it takes up the full height of the viewport.
    <div style={{ display: 'flex', height: '100vh' }}>
        {/* This is the Head component from Next.js. It allows you to modify the head of the HTML document. */}
        <Head>
            {/* This sets the title of the page to "My Blog". */}
            <title>My Blog</title>
        </Head>
        {/* This div contains the title of the blog and a button to go back home. It uses flexbox to center its children both vertically and horizontally. */}
        <div style={{ backgroundColor: 'black', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            {/* This is the title of the blog. */}
            <h1 style={{ color: 'white', marginTop: '0' }}>My Blog</h1>
            {/* This is a Link component from Next.js. It allows you to create a link to another page in your Next.js app. */}
            <Link href="/">
                {/* This is a button that takes you back to the home page. */}
                <button style={{ ...entryStyle, ...linkStyle }}>Go back home</button>
            </Link>
        </div>
        {/* This is a vertical divider. */}
        <div style={{ width: '2px', backgroundColor: 'white' }}></div>
        {/* This div contains a list of blog posts. It uses flexbox to layout its children. */}
        <div style={{ flex: 1, padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {/* This is an unordered list of blog posts. */}
            <ul style={{ listStyleType: 'disc', color: 'white', fontSize: '1.2rem', padding: '0 2rem', marginTop: '2rem' }}>
                {/* This maps over the array of posts and creates a list item for each one. */}
                {posts.map((post, index) => (
                    // Each list item has a key, which helps React optimize re-rendering.
                    <li key={index} style={listItemStyle}>
                        {/* This is a Link component that links to the page for this specific blog post. */}
                        <Link href={`/blog/${index}`}>
                            {/* This displays the title of the blog post. */}
                            <span style={entryStyle}>{post.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);}
// This exports the BlogPage component so it can be used in other parts of the app.
export default BlogPage;