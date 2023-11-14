import Head from 'next/head';
import Cursor from '../components/Cursor';

export default function Contact() {
  const linkStyle = {
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: '#FFFFFF',
    textDecoration: 'none',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#000',
  };

  const emailStyle = {
    fontSize: '2rem',
    color: '#FFFFFF',
    textDecoration: 'underline',
    textAlign: 'center',
    margin: '20px 0',
  };

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div style={containerStyle}>
        <a href="/" style={linkStyle}>Go back to home</a>
        <h1 style={{ color: '#FFFFFF' }}>Contact</h1>
        <p style={{ color: '#FFFFFF' }}>
          Feel free to reach out to me via email:
        </p>
        <a href="mailto:j.mantell@wustl.edu" style={emailStyle}>j.mantell@wustl.edu</a>
      </div>
    </>
  );
}
