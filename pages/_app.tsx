import type { AppProps, NextWebVitalsMetric } from "next/app";

// 넥스트 앱 상태 체크 함수
export function reportWebVitals(metric: NextWebVitalsMetric) {
  const webVital = "web-vital";
  if (metric.label === webVital) console.log(metric);
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
