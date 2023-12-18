import Head from 'next/head';
import Link from 'next/link';

export default function LinkedIn() {
  const linkStyle = {
    fontSize: '2rem',
    margin: '1rem auto',
    color: '#FFFFFF',
    textDecoration: 'underline',
    textAlign: 'center',
  };

  return (
    <>
      <Head>
        <title>LinkedIn</title>
      </Head>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#000',
        }}
      >
        <a
          href="https://www.linkedin.com/in/jaredmantell/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Visit LinkedIn
        </a>
        <a href="/" style={linkStyle}>Back to Home</a>
      </div>
    </>
  );
}