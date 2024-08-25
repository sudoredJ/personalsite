import React from 'react';
import Link from 'next/link';
import Stars from '../components/Stars';
import { Hero } from '../components/Hero';
import CustomCursor from "../components/CustomCursor";

export default function ProjectPage() {
  const projects = [
    { name: 'RadiantAI', link: 'https://radiantai.health/' },
    { name: 'ConnectAlum', link: 'https://www.connectalum.com/' },
    {
      name: 'Auto Sunset - Google Calendar Extension',
      link: 'https://chromewebstore.google.com/detail/auto-sunset/nplhhaelnagjbbljmhijclndlnhecooj?hl=en'
    },
    { 
      name: 'DefineAloud',
      description: 'Use ctrl + space on highlighted text to see the definition of what you\'re reading',
      link: 'https://chromewebstore.google.com/detail/definealoud/dfkakcohmbmmgogkfjdkikpjjfkfmehb'
    },
    { 
      name: 'HLAI',
      description: 'Highlight AI, use ctrl + space on highlighted text to see an AI-powered explanation of what you\'re reading',
      link: 'https://chromewebstore.google.com/detail/hlai/dkppddahgjflcipegjnjbladmgmimkpa'
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
      <CustomCursor />
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
              <div key={index} style={{ 
                width: '80%', 
                maxWidth: '500px', 
                margin: '1rem auto', 
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                padding: '1.5rem', 
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(5px)',
                transition: 'transform 0.3s ease-in-out',
              }}
              className="hover:transform hover:scale-105"
              >
                <h2 style={{ color: '#FFFFFF', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.name}</h2>
                {project.description && <p style={{ color: '#CCCCCC', marginBottom: '1rem' }}>{project.description}</p>}
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                      color: '#FFFFFF', 
                      textDecoration: 'none',
                      backgroundColor: 'rgba(59, 130, 246, 0.5)',
                      padding: '0.5rem 1rem',
                      borderRadius: '5px',
                      transition: 'background-color 0.3s ease-in-out',
                    }}
                    className="hover:bg-blue-600"
                  >
                    View Project
                  </a>
                )}
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto', marginTop: '2rem' }}>
              <Link href="/">
                <span style={{ color: '#FFFFFF', fontSize: '1.5rem', cursor: 'pointer', textDecoration: 'underline' }}>Go back home</span>
              </Link>
            </div>
          </Hero>
        </div>
      </div>
    </div>
  );
}