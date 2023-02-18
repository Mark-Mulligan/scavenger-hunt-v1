import '@/styles/globals.scss';
import '@/styles/tube.scss';
import type { AppProps } from 'next/app';

import { Inter } from '@next/font/google';
import localFont from '@next/font/local';

const inter = Inter({ subsets: ['latin'] });
// const myFont = localFont({ src: '../PolygonParty-3KXM.ttf' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
