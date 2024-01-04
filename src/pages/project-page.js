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
      <div style={containerStyle}>
        <h1>My Projects:</h1>
        {/* Project 0: Centrifuge */}
        <div style={projectStyle}>
          <h2>Centrifuge</h2>
          <a href="https://github.com/organizations/Centrifuge-Micro" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        {/* Project 1: Auto Sunset */}
        <div style={projectStyle}>
          <h2>Auto Sunset - Google Calendar Extension</h2>
          <p>Schedule the sunset automatically into your Google Calendar.</p>
          <p><strong>Why:</strong> You only get one sunset a day. I grew up on Florida's Gulf coast, so I've been spoiled by sunsets gliding under Clearwater Beach's skyline while the sky and ocean turn gorgeous shades of purple. If you're working hard, you can miss the world passing by. There's only one sunset a day. Take the ten minutes and watch it, preferably someplace nice.</p>
          <a href="https://chromewebstore.google.com/detail/auto-sunset/nplhhaelnagjbbljmhijclndlnhecooj?hl=en" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        {/* Proj 3 VRClub*/}
        <div style={projectStyle}>
          <h2>VRClub</h2>
          <p>Project ended Jan. 2023. Formerly second-largest Virtual-Reality forum on Discord. <br></br>Member of Discord Partner Program</p>
                  </div>
        {/* Project 2: Rethinking Stereotypes */}
        <div style={projectStyle}>
          <h2>Rethinking Stereotypes: Demographic Analysis of Sexual Violence Perpetrators in Prisons</h2>
          <p>Project Conducted in Tableau</p>
          <a href="https://docs.google.com/presentation/d/10et8P5tWzDsn5RTp6BkPAmeC6Df6psMsOMvOIBIQ9EM/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>

        <Link href="/">Back to Home</Link>
      </div>
    </>
  );
}