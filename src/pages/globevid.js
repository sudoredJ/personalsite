import Head from 'next/head';
import Link from 'next/link';
import VideoComponent from '../components/VideoComponent';
import Cursor from '../components/Cursor';

export default function Resume() {
  const linkStyle = {
    fontSize: '2rem',
    margin: '1rem auto',
    color: '#FFFFFF',
    textDecoration: 'underline',
    textAlign: 'center',
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
        <title>My Story So Far</title>
      </Head>
      
      <div style={containerStyle}>
        <VideoComponent />
        <Link href="/" style={linkStyle}>Back to Home</Link>
      </div>
    </>
  );
}