import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    // Read local blog posts
    const fullPath = path.join(process.cwd(), 'blogPosts.json');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const localPosts = JSON.parse(fileContents);

    // Add external blog posts
    const externalPosts = [
      {
        title: 'Your idol is your ceiling',
        link: 'https://www.tumblr.com/whokilledjared/777474580255227904/your-idol-is-your-ceiling'
      },
      {
        title: 'How we built a VR Headset that sees people through walls. (Treehacks \'25)',
        link: 'https://0xredj.medium.com/how-we-built-a-vr-headset-that-sees-people-through-walls-treehacks-25-e517cb805b9c'
      },
      {
        title: 'A moodboard of musings on mediums',
        link: 'https://0xredj.medium.com/a-moodboard-of-musings-on-mediums-14cf2612cb37'
      },
      {
        title: 'Lab 4: Conway\'s Game of You',
        link: 'https://0xredj.medium.com/lab-4-conways-game-of-you-b8e0fd11ef45'
      }
    ];

    // Combine local and external posts
    const allPosts = [...localPosts, ...externalPosts];
    
    res.status(200).json(allPosts);
  } catch (error) {
    console.error('Error reading blog posts:', error);
    res.status(500).json({ error: 'Unable to fetch blog posts' });
  }
}