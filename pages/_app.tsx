import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@/app/store';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
