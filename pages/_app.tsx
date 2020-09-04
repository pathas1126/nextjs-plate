import type { AppProps, NextWebVitalsMetric } from "next/app";

import store from "../store/index";
import { Provider } from "react-redux";

// 넥스트 앱 상태 체크 함수
export function reportWebVitals(metric: NextWebVitalsMetric) {
  const webVital = "web-vital";
  if (metric.label === webVital) console.log(metric);
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
