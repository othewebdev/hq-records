import { DynamicFooter, DynamicHeader } from "@/modules/dynamic";
import "@/styles/globals.css";
import { Inter } from "@next/font/google";
import Head from "next/head";
import Layout from "@/modules/layout";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AnimatePresence>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <Layout>
        <main className={inter.className} style={{ overflow: "hidden" }}>
          <motion.div
            key={router.route}
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit="exitState"
            transition={{
              duration: 0.75,
            }}
            variants={{
              initialState: {
                opacity: 0,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              },
              animateState: {
                opacity: 1,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              },
              exitState: {
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
              },
            }}
            className="basePageSize"
          >
            <DynamicHeader />
            <Component {...pageProps} />
            <DynamicFooter />
          </motion.div>
        </main>
      </Layout>
    </AnimatePresence>
  );
}
