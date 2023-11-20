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
        <title>LinkedIn and Resume</title>
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
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Visit LinkedIn
        </a>
        <a
          href="/jared_mantell_resumee.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          View Resume
        </a>
        <Link href="/" style={linkStyle}>Back to Home</Link>
      </div>
    </>
  );
}