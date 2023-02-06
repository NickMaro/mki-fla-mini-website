import "../styles/globals.css";
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://player.vimeo.com/video/795834795?h=58ed90dafa&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
