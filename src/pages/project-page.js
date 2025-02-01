import React from 'react';
import Link from 'next/link';
import Stars from '../components/Stars';
import { Hero } from '../components/Hero';
import CustomCursor from "../components/CustomCursor";

export default function ProjectPage() {
  const projects = [
    {
    name: 'Algorithmic Analysis of Research Virality in Science Communication',
    description: 'Quantitative study of memetic patterns in how scientific research spreads on r/science, analyzing the impact of recommendation engines and content framing on information propagation. Research produced under Jonathan Stray, CHAI at UC Berkeley CS 294: Designing Algorithmic Media.',
    link: 'https://github.com/vetlewj/algorithmic-media'
    },
    {
      name: 'Intertial Interface: a Ludic UX for Digital Artists',
      description: 'Leveraging unconventional methods of human-computer interaction to power novel UX in digital art systems. Research produced under Dr. Kimiko Ryokai, UC Berkeley BCNM.',
      link: 'https://github.com/jaredmantell/IntertialInterface'
    },
    {
      name: 'Simple Berkeley Food Finder',
      description: 'Whipped up a one-file site to list local meals under $10 around Berkeley. At its peak, the site had 4k MAU, averaging 2k MAU throughout the semester. Everything in the Bay Area was expensive, so I wanted to help people not go broke for every meal.',
      link: 'https://imgur.com/gallery/cheapfoodberkeley-simple-site-GK0LviF',
    },
    {
      name: 'Wii Nunchuk Mouse',
      description: 'Modified a Bulgarian Adafruit Wii Nunchuk project. I added adjustable sensitivity, scroll mode using accelerometer data, and fixed directional movement bugs. Features dual-button sensitivity control and accelerometer-based scrolling.',
      link: 'https://github.com/jaredmantell/anavi-handle-improved',
      videoLink: 'https://x.com/0xredJ/status/1853183472371896799'
    },
    {
      name: '3D ASCII Shapes in C++ with Webcam Integration',
      description: 'A project that generates 3D ASCII art shapes using C++ and integrates with a webcam for real-time interaction.',
      link: 'https://github.com/jaredmantell/cppCube',
      videoLink: 'https://x.com/redj_red/status/1825608725274755277'
    },
    {
      name: 'VideoSnipper',
      description: 'A C++ screen-recorder that functions exactly like the Windows Snip tool (win + shift + s)',
      link: 'https://github.com/jaredmantell/winShiftV',
      videoLink: 'https://youtube.com/shorts/cQXab7depDU'
    },
    {
      name: 'Connect',
      description: 'Built edtech software with friends, sold to a few high schools, backed by BLCK VC, Maxine Clark, et al.',
      link: 'https://www.connectalum.com/'
    },
    {
      name: 'HLAI',
      description: 'Highlight AI, use ctrl + space on highlighted text to see an AI-powered explanation of what you\'re reading',
      link: 'https://chromewebstore.google.com/detail/hlai/dkppddahgjflcipegjnjbladmgmimkpa'
    },
    { 
      name: 'RadiantAI', 
      description: 'AI Query Engine for Medical Purposes. Internship; collaborated with ex-FAANG engineers & an ML PhD',
      link: 'https://youtu.be/oLPFchAx3bI',
    },
    { 
      name: 'VRClub', 
      description: 'Project ended Jan. 2023. Formerly second-largest Virtual-Reality forum on Discord. Custom bots w/ 9000+ users' 
    },
    {
      name: 'Animated Buzz Aldrin Wallpaper',
      link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3232212198'
    },
    {
      name: 'DefineAloud',
      description: 'Use ctrl + space on highlighted text to see the definition of what you\'re reading',
      link: 'https://chromewebstore.google.com/detail/definealoud/dfkakcohmbmmgogkfjdkikpjjfkfmehb'
    },
    {
      name: 'Auto Sunset',
      description: 'Google Calendar Extension; automatically schedules the sunset each week based on user loaction',
      link: 'https://chromewebstore.google.com/detail/auto-sunset/nplhhaelnagjbbljmhijclndlnhecooj?hl=en'
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
                <div style={{ display: 'flex', gap: '1rem' }}>
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
                  {project.videoLink && (
                    <a
                      href={project.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        padding: '0.5rem 1rem',
                        borderRadius: '5px',
                        transition: 'background-color 0.3s ease-in-out',
                      }}
                      className="hover:bg-red-600"
                    >
                      Watch Video
                    </a>
                  )}
                </div>
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