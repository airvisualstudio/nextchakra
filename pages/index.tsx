import Navbar from "../components/Navbar";
import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Features from "../components/FeaturesSection";
import FeaturesTwo from "../components/FeaturesSectionTwo";


export default function Home() {
  return(
    <>
    <Head>
        <title>Test SEO Performance</title>
        <meta property="og:title" content="My page title" key="title" />
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