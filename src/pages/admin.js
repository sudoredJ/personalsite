import React, { useState } from 'react';

const AdminPage = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/createBlog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, body }),
            });
            const data = await response.json();
            console.log(data.message);
            // Reset form or handle success as needed
            setTitle('');
            setBody('');
        } catch (error) {
            console.error('Error submitting blog post', error);
        }
    };

    return (
        <div>
            <h1>Create a New Blog Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter post title"
                    />
                </div>
                <div>
                    <label htmlFor="body">Body</label>
                    <textarea
                        id="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder="Enter post content"
                    ></textarea>
                </div>
                <button type="submit">Submit Post</button>
            </form>
        </div>
    );
};

export default AdminPage;
