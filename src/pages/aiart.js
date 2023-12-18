import Head from 'next/head';

export default function AI_Art_Showcase() {
  const titleStyle = {
    fontSize: '2rem',
    margin: '1rem auto',
    color: '#FFFFFF',
    textAlign: 'center',
  };

  return (
    <div>
      <Head>
        <title>AI Art Showcase</title>
      </Head>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#000',
          paddingTop: '2rem',
        }}
      >
        <h1 style={titleStyle}>AI Art Showcase</h1>
        <img src="https://s11.gifyu.com/images/SgVhM.gif" alt="Artwork of St. Louis" style={{width: '200px', marginTop: '2rem'}} />
        <a href="/" style={titleStyle}>Back to Home</a>
      </div>
    </div>
  );
}
