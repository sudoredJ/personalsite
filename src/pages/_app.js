import Stars from '../components/Stars';
import Cursor from '../components/Cursor';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Stars />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;