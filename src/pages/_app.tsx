import { TrackingHeadScript } from "@phntms/next-gtm";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

const GA_ID = "GTM-MLQ58GB3";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <TrackingHeadScript id={GA_ID} isGTM={true} />
      <Component {...pageProps} />
    </>
  );
}
