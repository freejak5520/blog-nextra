import { TrackingHeadScript } from "@phntms/next-gtm";
import type { AppProps } from "next/app";

const GA_ID = "GTM-MLQ58GB3";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TrackingHeadScript id={GA_ID} isGTM={true} />
      <Component {...pageProps} />
    </>
  );
}
