import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};
const linkStyle = {
  fontSize: '2rem',
  margin: '1rem auto',
  color: '#FFFFFF',
  textDecoration: 'underline',
  textAlign: 'center',
};
export default function About() {
  return (
    <>
      <Head>
        <title>Carbon - About</title>
      </Head>
      {/* Header */}
      <header className="pt-10 lg:pt-8">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between font-medium">
            {/* ... */}
          </nav>
        </div>
      </header>
      {/* Title Section */}
      <section className="pt-8 md:pt-28 pb-8">
        <div className="container mx-auto px-4 grid grid-cols-12 gap-8">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-medium col-span-12 lg:col-span-8">Who am I?</h1>
        </div>
      </section>
      {/* Cover Image */}
      <section className="h-64 lg:h-screen-90 w-full bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url(./images/portrait_big.jpg)' }}>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
    <a href="https://www.linkedin.com/in/jaredmantell/" target="_blank" rel="noopener noreferrer" style={linkStyle}>LinkedIn</a>
  </div>
</section>
      {/* Content */}
      <section className="mt-8 lg:mt-24 pb-16">
        <div className="container mx-auto px-4 grid grid-cols-12 gap-8">
          {/* ... */}
        </div>
      </section>
      {/* Footer */}
      <footer className="pt-24 pb-8 bg-bg">
        <div className="container mx-auto px-4 relative grid grid-cols-12 gap-8">
          {/* ... */}
          <div style={containerStyle}>
        <Link href="/" style={linkStyle}>Back to Home</Link>
      </div>
        </div>
      </footer>
    </>
  );
}