import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";

const GA_ID = "G-LVHSN5LRTR";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics  gaId={GA_ID} />
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}
