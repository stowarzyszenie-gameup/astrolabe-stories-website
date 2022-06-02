import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Astrolabe Stories</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Astrolabe Stories" />
        <meta property="og:url" content="https://astrolabestories.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Astrolabe Stories" />
        <meta
          property="og:description"
          content="It's all about stories. Our past, future, and present. Now we want to tell our stories - meaningful and unique"
        />
        {/* <meta property="og:image" content={facebookShareImg.src} /> */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="twitter:card" content="summary" />
        {/* <meta property="twitter:image" content={gameUpLogo.src} /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      {/*<About />
      <Workshops />
      <Astrolabe />
      <Team />
      <Contact /> */}
    </div>
  );
};

export default Home;
