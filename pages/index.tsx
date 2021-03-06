import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import { LegacyRef, useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";
import anime from "animejs";

import { AnimatePresence, motion } from "framer-motion";

const Home: NextPage = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const btn2Ref = useRef<HTMLButtonElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<SVGSVGElement>(null);
  useEffect(() => {
    let firstTime = true;
    let morphoing = anime({
      targets: ".morph",
      d: [
        {
          value:
            "M0,0S153.534,610.728,496.819,443.077s613.709,153.68,981.955,67.859S1925.892,0,1925.892,0",
        },
        {
          value:
            "M0,0S108.34,895.136,503.518,887.152s497.95-69.854,866.2-155.676S1925.892,0,1925.892,0",
        },
        {
          value:
            "M0,0S-367.955,1095.718,27.223,1087.735s1480.916-15.967,1864.118,0S1925.892,0,1925.892,0",
        },
      ],
      easing: "easeInOutQuint",
      duration: 1000,
      loop: false,
      autoplay: false,
    });
    btnRef.current?.onclick = () => {
      !firstTime && morphoing.reverse();
      morphoing.restart();
      overlayRef.current?.classList.add("pointer");
      btn2Ref.current?.classList.remove("pointer-none", "displayNon");
      btn2Ref.current?.classList.add("pointer", "display");
    };
    btn2Ref.current?.onclick = () => {
      morphoing.reverse();
      morphoing.play();
      btn2Ref.current?.classList.add("pointer-none", "displayNon");
      overlayRef.current?.classList.remove("pointer");
      firstTime = false;
    };
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.13.1/umd/react.production.min.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom.production.min.js"></Script>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js"
        integrity="sha256-hBMojZuWKocCflyaG8T19KBq9OlTlK39CTxb8AUWKhY="
        crossOrigin="anonymous"
      ></Script>

      <svg
        width={"100%"}
        height="100%"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
        id="morph"
        ref={overlayRef}
      >
        <path
          className="morph"
          fill="#8B63DA"
          d="M0,0S125.594-2,552.705,0s494.969-2,866.2,0,506.991,0,506.991,0"
        />
      </svg>

      <section ref={sectionRef} id="sect1">
        <AnimatePresence exitBeforeEnter>
          <motion.button
            initial={{
              scale: 1.3,
              opacity: 0,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              scale: 1,
              opacity: 1,
              translateX: "-50%",
              translateY: "-50%",
            }}
            whileHover={{ scale: 1.1, translateX: "-50%", translateY: "-50%" }}
            ref={btnRef}
            id="btn-click"
          >
            Tappy tappy
          </motion.button>
        </AnimatePresence>
      </section>
      <AnimatePresence exitBeforeEnter>
        <motion.button
          initial={{ opacity: 0, translateX: "-50%", translateY: "-50%" }}
          exit={{ opacity: 0, translateX: "-50%", translateY: "-50%" }}
          animate={{ opacity: 1, translateX: "-50%", translateY: "-50%" }}
          whileHover={{ scale: 1.1, translateX: "-50%", translateY: "-50%" }}
          ref={btn2Ref}
          id="btn2-click"
        >
          {" "}
          Reverse
        </motion.button>
      </AnimatePresence>
    </div>
  );
};

export default Home;
