import { DynamicFooter, DynamicHeader } from "@/modules/dynamic";
import "@/styles/globals.css";
import { Inter } from '@next/font/google';
import { useState } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  const [transitionEffect, setTransitionEffect] = useState(1);
  

  return (
      <main className={inter.className}>
        <DynamicHeader />
          <Component {...pageProps} />
        <DynamicFooter />
      </main>
  );
}
