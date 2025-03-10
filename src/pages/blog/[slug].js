import React from 'react';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export async function getStaticPaths() {
    const fullPath = path.join(process.cwd(), 'blogPosts.json');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const posts = JSON.parse(fileContents);

    // Only create paths for local posts (ones without external links)
    const paths = posts
        .filter(post => !post.link)
        .map((post, index) => ({
            params: { slug: index.toString() }
        }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const fullPath = path.join(process.cwd(), 'blogPosts.json');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const posts = JSON.parse(fileContents);
    const post = posts[parseInt(params.slug)];

    // Read the content file
    const contentPath = path.join(process.cwd(), 'src/pages/blog/content', `${post.contentFile || post.title.toLowerCase().replace(/ /g, '-')}.md`);
    const content = fs.readFileSync(contentPath, 'utf8');

    return {
        props: {
            post: {
                ...post,
                content
            }
        }
    };
}

export default function BlogPost({ post }) {
    return (
        <div style={{ 
            backgroundColor: '#333',
            minHeight: '100vh',
            color: 'white',
            padding: '2rem'
        }}>
            <h1 style={{ 
                fontSize: '2rem',
                marginBottom: '1rem'
            }}>
                {post.title}
            </h1>
            {post.date && (
                <p style={{ 
                    color: '#CCC',
                    marginBottom: '2rem'
                }}>
                    {post.date}
                </p>
            )}
            <div style={{ 
                whiteSpace: 'pre-wrap',
                lineHeight: '1.6'
            }}>
                {post.content}
            </div>
            <div style={{ 
                marginTop: '3rem'
            }}>
                <Link href="/blog">
                    <span style={{ 
                        color: 'white',
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }}>
                        ← Back to blog
                    </span>
                </Link>
            </div>
        </div>
    );
}