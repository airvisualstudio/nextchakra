import Navbar from "../components/Navbar";
import Html from 'next/document';
import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Features from "../components/FeaturesSection";
import FeaturesTwo from "../components/FeaturesSectionTwo";


export default function Home() {
  return(
    <>
    <Html lang="en"></Html>
    <Head>
        <title>Test SEO Performance</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta name="description" content="Airvisual Creative Studio,  The Other, Digital Marketing 
        Agency from Bandung, 
        West Java, Indonesia">

        </meta>
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
    </Head>
    <Hero></Hero>
    <Features></Features>
    <Features></Features>
    <FeaturesTwo></FeaturesTwo>
    <FeaturesTwo></FeaturesTwo>
    <Footer></Footer>
    </>
  )
}