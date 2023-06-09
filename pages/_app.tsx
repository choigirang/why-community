import '@/styles/App.css';
import { QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';
import { QueryClient } from 'react-query';
import Header from '@/components/Header';
import { worker } from '@/mocks/server';

if (process.env.NODE_ENV === 'development') {
  worker.listen();
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 1000 * 60 * 5,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
