import "~config/globals.css";
import type { AppProps } from "next/app";
import Loading from "~components/other/loading";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DefaultSeo } from "next-seo";
import DefaultSeoProps from "~config/DefaultSeoProps";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  const [state, setState] = useState({
    isRouteChanging: false,
    loadingKey: 0,
  });

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }));
    };

    const handleRouteChangeEnd = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }));
    };
    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeEnd);
    router.events.on("routeChangeError", handleRouteChangeEnd);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeEnd);
      router.events.off("routeChangeError", handleRouteChangeEnd);
    };
  }, [router.events]);

  console.log("%cHold Up!", "color: #7289DA; font-weight: bold; font-size: 3em;");
  console.log("%cYou shouldn't be here.", "font-size: 1.5em;");
  console.log("%cBut thanks for visiting.\nIf you found bug, please let me know in https://github.com/dhafitf.", "font-size: 1em;");

  return (
    <>
      <DefaultSeo {...DefaultSeoProps} />
      <Loading isRouteChanging={state.isRouteChanging} key={state.loadingKey} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
