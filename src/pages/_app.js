// app.js
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importez le fichier CSS de Bootstrap
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js').then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      }).catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
    }
  }, []);

  return <Component {...pageProps} />;
}


export default MyApp;
