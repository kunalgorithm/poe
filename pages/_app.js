import "antd/dist/antd.css";

import "aos/dist/aos.css"; // You can also use <link> for styles
// import "../styles/antd.less";
// import "../styles/styles.scss";
import "../styles.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The Tell Tale Heart </title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
