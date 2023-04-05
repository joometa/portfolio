import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Header, Footer } from "@components/layout";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <div className="bg-primary">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
