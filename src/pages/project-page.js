import React from 'react';
import Link from 'next/link';
import Stars from '../components/Stars';
import { Hero } from '../components/Hero';
import CustomCursor from "../components/CustomCursor";
import Toggler from "../components/toggler";
import AnimatedLink from '../components/AnimatedLink';

export default function ProjectPage() {
  const projects = [
    { name: 'H@W — Hackathons @ WashU', link: 'https://hackathonsatwustl.vercel.app/' },
    { name: 'RadiantAI', link: 'https://radiantai.health/' },
    { name: 'ConnectAlum', link: 'https://www.connectalum.com/' },
    { name: '48hr.dev', link: 'https://github.com/Centrifuge-Micro' },
    {
      name: 'Auto Sunset - Google Calendar Extension',
      description: `
        Schedule the sunset automatically into your Google Calendar. ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀              
        Why: I grew up on Florida's Gulf coast, so I've been spoiled by sunsets gliding under Clearwater Beach's skyline while the sky and ocean turn gorgeous shades of purple. If you're working hard, you can miss the world passing by. There's only one sunset a day. Take the ten minutes and watch it, preferably someplace nice.
      `,
      link: 'https://chromewebstore.google.com/detail/auto-sunset/nplhhaelnagjbbljmhijclndlnhecooj?hl=en'
    },
    { name: 'VRClub', description: 'Project ended Jan. 2023. Formerly second-largest Virtual-Reality forum on Discord. Custom bots w/ 9000+ users' },
    {
      name: '3D ASCII Shapes in C++ with Webcam Integration',
      description: 'A project that generates 3D ASCII art shapes using C++ and integrates with a webcam for real-time interaction.',
      link: 'https://x.com/redj_red/status/1825608725274755277'
    },
  ];

  return (
    <div className="page-wrapper">
      <CustomCursor style={{ position: 'fixed', top: 0, left: 0 }} />
      <Stars />
      <header className="pt-2 lg:pt-2">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between font-medium">
            {/* Empty Navigation */}
          </nav>
        </div>
      </header>
      <div className="container">
        <div className="hero-wrapper" style={{ marginTop: '1px' }}>
          <Hero title="My Projects" index className="bouncy">
            {projects.map((project, index) => (
              <div key={index} style={{ width: '40%', margin: '0 auto', backgroundColor: '#FFFFFF', padding: '1rem', marginTop: '1rem' }}>
                <h2 style={{ color: '#000000' }}>{project.name}</h2>
                {project.description && <p style={{ color: '#000000' }}>{project.description}</p>}
                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#000000', textAlign: 'center' }}>View Project</a>}
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto' }}>
              <Link href="/">
                <p style={{ color: '#FFFFFF', fontSize: '2rem', textAlign: 'center' }}>Go back home</p>
              </Link>
            </div>
          </Hero>
        </div>
      </div>
    </div>
  );
}
