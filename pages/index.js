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
        <Layout headerCls="transparent-header">
          <Head/>
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