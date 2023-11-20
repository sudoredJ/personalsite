import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { title, body } = req.body;

        // Path to your JSON file
        const filePath = path.join(process.cwd(), 'blogPosts.json');
        const fileData = fs.readFileSync(filePath);
        const posts = JSON.parse(fileData.toString());

        // Add new post
        posts.push({ title, body });
        fs.writeFileSync(filePath, JSON.stringify(posts));

        res.status(200).json({ message: 'Blog post created' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
