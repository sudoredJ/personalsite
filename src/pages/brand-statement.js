import Head from 'next/head';

export default function Introduction() {
  const linkStyle = {
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: '#000',
    textDecoration: 'none',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#FFFFFF',
    padding: '20px',
  };

  const responseStyle = {
    color: '#000',
    textAlign: 'left',
    maxWidth: '800px',
    margin: '20px',
  };

  const smallScreenStyle = {
    padding: '10px', // Adjusted padding for smaller screens
  };

  return (
    <>
      <Head>
        <title>Introduction</title>
      </Head>
      <div style={containerStyle}>
        <a href="/" style={linkStyle}>Go back to home</a>
        <h1 style={{ color: '#000' }}>Introduction</h1>
        <div style={responseStyle}>
          <p>
            Hello, I'm Jared Mantell. I am currently a sophomore at Washington University in St. Louis, where I am pursuing a major in Finance along with minors in Computer Science and Geospatial Science. My passion lies at the intersection of technology and people, and I've had the privilege of gaining valuable experience in various areas.
          </p>
          <p>
            Currently, I hold the position of the first employee at Radiant AI, a role in which I've made significant contributions to fundraising and project management. My efforts have been focused on securing a $2 million seed round for the company and overseeing the development of a cutting-edge medical AI query engine.
          </p>
          <p>
            Additionally, I've acted as a strategic liaison between AWS (Amazon Web Services) and the WashU startup ecosystem. In this capacity, I've been involved in identifying high-potential startups that are eligible for AWS credit grants, fostering innovation within our entrepreneurial community.
          </p>
          <p>
            Beyond my professional pursuits, I am deeply passionate about entrepreneurship and technology. Outside of the business world, I find solace in the wilderness and enjoy hiking.
          </p>
          <p>
            I welcome connections on LinkedIn and invite you to reach out to me at jmantel@wustl.edu. I'm always eager to engage in meaningful discussions and explore new opportunities in the fields that I am passionate about.
          </p>
          <p>
            Thank you for your time, and I look forward to connecting with you.
          </p>
        </div>
      </div>
    </>
  );
}
