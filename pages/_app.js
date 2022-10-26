import '../styles/globals.css';
import FormData from 'form-data';

function MyApp({ Component, pageProps }) {
  // just make sure it's used by bundler
  console.log(FormData);
  return <Component {...pageProps} />;
}

export default MyApp;
