import "../node_modules/bootstrap/dist/css/bootstrap.css";
import '../styles/global.css'
import SSRProvider from "react-bootstrap/SSRProvider";
import Script from 'next/script';
import { useEffect, useState} from 'react';

export default function App({ Component, pageProps }) {

  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}
