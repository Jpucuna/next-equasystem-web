import "../node_modules/bootstrap/dist/css/bootstrap.css";
import '../styles/global.css'
import SSRProvider from "react-bootstrap/SSRProvider";

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}