import Head from 'next/head';

export default function SWOTAnalysis() {
  const linkStyle = {
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: '#FFFFFF',
    textDecoration: 'underline',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  };

  const boxStyle = {
    border: '1px solid white',
    padding: '20px',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#000',
  };

  return (
    <>
      <Head>
        <title>SWOT Analysis</title>
      </Head>
      <div style={containerStyle}>
        <a href="/" style={linkStyle}>Go back to home</a>
        <h1 style={{ color: '#FFFFFF' }}>SWOT Analysis</h1>
        <div style={gridStyle}>
          {/* Strengths */}
          <div style={boxStyle}>
            <h3 style={{ color: '#FFFFFF' }}>Strengths</h3>
            <p style={{ color: '#FFFFFF' }}>
              As a versatile (almost) full-stack developer, I bring a unique blend of skills to the table. My background in finance allows me to make informed decisions that go beyond the technical aspects of a project. I pride myself on my exceptional communication skills, which facilitate effective teamwork and problem-solving. Being a quick learner enables me to adapt to new technologies and methodologies swiftly.
            </p>
          </div>

          {/* Weaknesses */}
          <div style={boxStyle}>
            <h3 style={{ color: '#FFFFFF' }}>Weaknesses</h3>
            <p style={{ color: '#FFFFFF' }}>
              Despite my broad skill set, I recognize that my experience with specific technologies is somewhat limited. I'm still in the early stages of my coding career, and there are areas where I lack depth. This occasionally results in longer project timelines and an initial reliance on more experienced team members.
            </p>
          </div>

          {/* Opportunities */}
          <div style={boxStyle}>
            <h3 style={{ color: '#FFFFFF' }}>Opportunities</h3>
            <p style={{ color: '#FFFFFF' }}>
              The tech industry is dynamic, offering numerous opportunities for growth and improvement. Self-training, for instance, is a continuous journey that can significantly enhance my skills. Participating in hackathons provides a platform to experiment and innovate. Additionally, the rise of AI-assisted development tools and the potential for high-impact side projects offer avenues for advancement and diversification.
            </p>
          </div>

          {/* Threats */}
          <div style={boxStyle}>
            <h3 style={{ color: '#FFFFFF' }}>Threats</h3>
            <p style={{ color: '#FFFFFF' }}>
              The technology landscape is ever-changing, and there's a constant influx of new talent with a similar or better skill set. Furthermore, the increasing technical demands in the industry mean that constant upskilling is essential to stay relevant. The market is also becoming saturated with entry-level talent, making it challenging to stand out without specialized skills.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}