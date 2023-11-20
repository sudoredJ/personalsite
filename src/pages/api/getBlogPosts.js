import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method === 'GET') {
        const filePath = path.join(process.cwd(), 'blogPosts.json');
        try {
            const fileData = fs.readFileSync(filePath);
            const posts = JSON.parse(fileData.toString());
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({ message: "Error reading blog posts" });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
