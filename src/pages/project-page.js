import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
};

const projectStyle = {
  maxWidth: '800px',
  margin: '20px',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>My Portfolio Projects</title>
      </Head>
      <div style={containerStyle}>
        <h1>Portfolio Projects</h1>
        {/* Project 1: Auto Sunset */}
        <div style={projectStyle}>
          <h2>Auto Sunset - Google Calendar Extension</h2>
          <p>Schedule the sunset automatically into your Google Calendar.</p>
          <p><strong>Why:</strong> You only get one sunset a day. I grew up on Florida's Gulf coast, so I've been spoiled by sunsets gliding under Clearwater Beach's skyline while the sky and ocean turn gorgeous shades of purple. If you're working hard, you can miss the world passing by. There's only one sunset a day. Take the ten minutes and watch it, preferably someplace nice.</p>
          <a href="https://chromewebstore.google.com/detail/auto-sunset/nplhhaelnagjbbljmhijclndlnhecooj?hl=en" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        {/* Project 2: Rethinking Stereotypes */}
        <div style={projectStyle}>
          <h2>Rethinking Stereotypes: A Demographic Analysis of Sexual Violence Perpetrators in Prisons</h2>
          
          <p><strong>Methodology:</strong> The study employed advanced data visualization tools in Tableau to interpret and present the data. This approach allowed for an in-depth examination of patterns and trends that might otherwise be overlooked in traditional analysis methods. The visualizations were designed to be intuitive yet detailed, providing clear insights into the demographic distribution of sexual violence perpetrators.</p>
          
          <p><strong>Findings and Value:</strong> The findings of this study were significant in highlighting the diversity among sexual violence perpetrators in prisons, contradicting the common perception of these individuals being predominantly older white males. This project not only contributes to academic discourse but also has practical implications for policy-making and correctional strategies. It underscores the need for a more nuanced understanding of sexual violence in correctional facilities.</p>
                    
          <a href="https://docs.google.com/presentation/d/10et8P5tWzDsn5RTp6BkPAmeC6Df6psMsOMvOIBIQ9EM/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View Project</a>        </div>

        <Link href="/">Back to Home</Link>
      </div>
    </>
  );
}
