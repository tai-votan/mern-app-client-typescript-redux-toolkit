import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
// import { appWithTranslation } from 'next-i18next';
import { ToastContainer } from 'react-toastify';
import 'tailwindcss/tailwind.css';
import 'react-toastify/dist/ReactToastify.min.css';
import dynamic from 'next/dynamic';

import store from '@/redux/store';

const TopProgressBar = dynamic(() => import('@/components/top-progress-bar'), {
  ssr: false,
});

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <TopProgressBar />
      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  );
}

export default App;
// export default appWithTranslation(App);
