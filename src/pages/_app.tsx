import type { AppProps } from "next/app";
import Theme from "../styles/theme";
import { SocketProvider } from "@/contexts/SocketProvider";
import { Provider } from "react";
import { useContext } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SocketProvider>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </SocketProvider>
  );
}
