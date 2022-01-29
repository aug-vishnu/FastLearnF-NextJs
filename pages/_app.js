import TopNav from "../components/TopNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import axios from "axios";
import "../styles/styles.css";
import "../styles/antd.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "../context";
import Head from "next/head";

axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "https://fastlearn-api.herokuapp.com/";
axios.defaults.baseURL = "http://localhost:8000/";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Head>
        <title>FastLearn </title>
      </Head>
      <ToastContainer position="top-center" />
      <TopNav />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
