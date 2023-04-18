import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Header, Footer } from "@components/layout";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={queryClient}>
        <div className="bg-primary">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
