import Stars from '../components/Stars';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Stars />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;