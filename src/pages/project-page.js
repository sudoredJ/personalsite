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
  
  <p>
    The "Auto Sunset" project involved the creation of a Google Calendar extension using CSS and JavaScript. This extension was designed to automatically schedule sunset times based on the user's geographical location. The development process required an in-depth understanding of Google Calendar's API and the intricacies of working with time zones and geolocation data. The challenge was to create a seamless and intuitive user experience that could dynamically adjust to different locations and provide accurate sunset times.
  </p>
  
  <p>
    <strong>Key Learnings:</strong> This project was a significant learning journey in browser extension development, deepening my skills in JavaScript and CSS. I gained valuable experience in handling APIs, particularly in extracting and manipulating time and location data. The project also enhanced my understanding of user interface design, focusing on creating a simple yet effective user experience. Working on this project helped me appreciate the importance of precision and efficiency in coding, especially when dealing with real-time data and user interactions.
  </p>
  
  <p>
    <strong>Value:</strong> The "Auto Sunset" extension offers substantial value by enhancing the user experience in planning and organizing events in Google Calendar. By automating the process of scheduling events based on natural occurrences like sunsets, the extension provides a unique and practical tool for users. It's particularly beneficial for photographers, event planners, and outdoor enthusiasts who rely on natural light conditions. This project underscores the potential of integrating natural environmental factors into digital scheduling tools, opening up new possibilities for automated event planning.
  </p>
  
  <a href="https://chromewebstore.google.com/detail/auto-sunset/nplhhaelnagjbbljmhijclndlnhecooj?hl=en" target="_blank" rel="noopener noreferrer">View Project</a>
</div>
        {/* Project 2: Rethinking Stereotypes */}
        <div style={projectStyle}>
          <h2>Rethinking Stereotypes: A Demographic Analysis of Sexual Violence Perpetrators in Prisons</h2>
          <p>This project, conducted using Tableau, involved a comprehensive analysis of the demographics of sexual violence perpetrators in prison settings. The primary objective was to challenge and expand upon the common stereotypes, particularly focusing on age and racial demographics. The analysis was rooted in a substantial dataset, encompassing various correctional facilities across different regions.</p>
          
          <p><strong>Methodology:</strong> The study employed advanced data visualization tools in Tableau to interpret and present the data. This approach allowed for an in-depth examination of patterns and trends that might otherwise be overlooked in traditional analysis methods. The visualizations were designed to be intuitive yet detailed, providing clear insights into the demographic distribution of sexual violence perpetrators.</p>
          
          <p><strong>Findings and Value:</strong> The findings of this study were significant in highlighting the diversity among sexual violence perpetrators in prisons, contradicting the common perception of these individuals being predominantly older white males. This project not only contributes to academic discourse but also has practical implications for policy-making and correctional strategies. It underscores the need for a more nuanced understanding of sexual violence in correctional facilities.</p>
          
          <p><strong>Personal Learning:</strong> This project was instrumental in enhancing my skills in data analysis and visualization. Working with Tableau provided a hands-on experience in dealing with complex datasets and translating them into comprehensible visual reports. The project also deepened my understanding of the societal and systemic issues surrounding sexual violence in correctional institutions.</p>
          
          <a href="https://docs.google.com/presentation/d/10et8P5tWzDsn5RTp6BkPAmeC6Df6psMsOMvOIBIQ9EM/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View Project</a>        </div>

        <Link href="/">Back to Home</Link>
      </div>
    </>
  );
}
