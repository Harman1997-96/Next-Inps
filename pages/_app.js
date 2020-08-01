import "bootstrap/dist/css/bootstrap.min.css";
import Pages from "./pages-header";
// import Pages from "../.next/components/pages-header"
import "../style.css";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Pages />
      <Component {...pageProps} />;
    </>
  );
}
