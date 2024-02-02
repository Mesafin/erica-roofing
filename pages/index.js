import Layout from "@/components/layout/Layout"

import Banner1 from "@/components/sections/Banner1"
import Features1 from "@/components/sections/Features1"
import About1 from "@/components/sections/About1"
import Services1 from "@/components/sections/Services1"
import Project1 from "@/components/sections/Project1"
import Counter1 from "@/components/sections/Counter1"
import Testimonial1 from "@/components/sections/Testimonial1"
import Newsletter1 from "@/components/sections/Newsletter1"
import AddService from "@/components/sections/AddService"
import Head from "next/head"

export default function Home() {

    return (
      <>
        <Head>
          <title>ERICA - Best roofing services in Calgary</title>
          <meta
            name="description"
            content="Welcome to Your Company Name - Calgary's trusted roofing contractor. We provide top-quality residential and exterior services with decades of combined experience."
          />
        </Head>
        <Layout headerCls="transparent-header">
          <Banner1 />
          <Features1 />
          <About1 />
          <Services1 />
          <AddService />
          <Project1 />
          <Counter1 />
          <Testimonial1 />
          <Newsletter1 />
        </Layout>
      </>
    );
}