import type { AppProps } from "next/app";
import "@fontsource/open-sans";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "react-toastify/dist/ReactToastify.css";
import "@assets/main.css";
import { SettingsProvider } from "@contexts/settings.context";
import ErrorMessage from "@components/ui/error-message";
import PageLoader from "@components/ui/page-loader/page-loader";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { useRef } from "react";
import { useSettingsQuery } from "@data/settings/use-settings.query";
import { ReactQueryDevtools } from "react-query/devtools";

const Noop: React.FC = ({ children }) => <>{children}</>;

const AppSettings: React.FC = (props) => {
  const { data, isLoading: loading, error } = useSettingsQuery();
  if (loading) return <PageLoader />;
  if (error) return <ErrorMessage message={error.message} />;
  return <SettingsProvider initialValue={data?.options} {...props} />;
};

function CustomApp({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<any>(null);
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  const Layout = (Component as any).Layout || Noop;
  const authProps = (Component as any).authenticate;
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <AppSettings>
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </AppSettings>
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default CustomApp;
