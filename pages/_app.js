import "../styles/globals.css";
// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import 'antd/dist/antd.css';
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
