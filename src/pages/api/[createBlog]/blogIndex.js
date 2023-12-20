import Link from 'next/link';

export default function BlogIndex({ posts }) {
    return (
        <div>
            <h1>Blog</h1>
            {posts.map((post, index) => (
                <div key={index}>
                    <Link href={`/blog/${index}`}>
                        <a>{post.title}</a>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/getBlogPosts');
    const posts = await res.json();

    return {
        props: { posts },
    };
}