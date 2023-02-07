import "../node_modules/bootstrap/dist/css/bootstrap.css";
import '../styles/global.css'
import SSRProvider from "react-bootstrap/SSRProvider";
import { Lato, Inter } from "@next/font/google";

const lato = Lato({
    subsets: ['latin'],
    style: 'normal',
    weight: ['400', '700'],
    variable: '--latoFont',
});


export default function App({ Component, pageProps }) {

  return (
    <SSRProvider>
      <main className={lato.variable}>
      <Component {...pageProps} />
    </main>
    </SSRProvider>
  );
}
