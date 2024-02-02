import Layout from "@/components/layout/Layout"
import { useState } from 'react'
import Services1 from "@/components/sections/Services1"
import Counter1 from "@/components/sections/Counter1"
import Head from "next/head"

export default function Service() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
      <>
        <Head>
          <title>Roofing and exterior Services - Erica</title>
          <meta
            name="description"
            content="Explore our comprehensive roofing services, including roof repair, flat roofing, metal roofing, rubber roofing, vinyl siding, fibre cement siding, gutters, and more."
          />
        </Head>
        <Layout
          breadcrumbTitle="Services"
          imageUrl="/assets/img/hero/city-winter.jpg"
        >
          <div>
            <Services1 />
            <div className="area-bg">
              <div
                className="area-background-img jarallax"
                data-background="/assets/img/bg/area_bg01.jpg"
              />
              <Counter1 />
            </div>
            {/* area-bg-end */}
            {/* support-area */}
            <section className="support-area pt-115 pb-70">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-4 col-md-6">
                    <div className="support-item">
                      <div className="support-icon">
                        <img
                          src="/assets/img/icon/support_icon01.svg"
                          alt="Quick Response Icon"
                        />
                      </div>
                      <div className="support-content">
                        <h4 className="title">Quick Response</h4>
                        <p>
                          Our team is committed to providing swift and efficient
                          responses. We understand the urgency of your inquiries
                          and strive to address them promptly, ensuring your
                          satisfaction.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="support-item">
                      <div className="support-icon">
                        <img
                          src="/assets/img/icon/support_icon02.svg"
                          alt="Expert Guidance Icon"
                        />
                      </div>
                      <div className="support-content">
                        <h4 className="title">Expert Guidance</h4>
                        <p>
                          Benefit from our team's expertise. We offer
                          comprehensive guidance and solutions tailored to your
                          needs, ensuring informed decisions and successful
                          outcomes for your projects.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="support-item">
                      <div className="support-icon">
                        <img
                          src="/assets/img/icon/support_icon03.svg"
                          alt="24/7 Support Icon"
                        />
                      </div>
                      <div className="support-content">
                        <h4 className="title">24/7 Support</h4>
                        <p>
                          Our support doesn't rest. Whether it's day or night,
                          we are here to assist you. Count on us for reliable
                          and round-the-clock support to address your queries
                          and concerns.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* exteriors */}

            <section className="support-area pt-5 pb-70">
              <div className="container">
                <div className="row justify-content-center align-items-center">
                  <div className="col-xl-5 col-md-6">
                    <div className="support-item">
                      <div className="support-icon"></div>
                      <div className="">
                        <h4 className="title">Roofing Services: </h4>
                        <li>General Residential Roofing</li>
                        <li>Metal Cladding</li>
                        <li>Metal Roofing Cedar Shakes Roofs</li>{" "}
                        <li>Asphalt & Fiberglass</li>
                        <li>Roofs Rubber Roofs Lightweight </li>
                        <li>Concrete Roofs</li>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="support-item">
                      <img
                        src="/assets/img/services/roofing-services.jpg"
                        alt="roofing"
                        className="rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="support-area pt-5 pb-70">
              <div className="container">
                <div className="row justify-content-center g-5 align-items-center">
                  <div className="col-xl-4 col-md-6">
                    <div className="support-item">
                      <img
                        src="/assets/img/services/exterior.jpg"
                        alt="exterior services"
                        className="rounded"
                      />
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6 ps-lg-5 ms-lg-5">
                    <div className="support-item">
                      <div className="support-icon"></div>
                      <div className="">
                        <h4 className="title">Exterior Services: </h4>
                        <li>Vinyl Siding</li>
                        <li>Fibre Cement Siding</li>
                        <li>Gutters/Eavestrough and Downspouts</li>
                        <li>Soffit and Fasica</li>
                        <li>Repairs and Maintenance</li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="support-area pt-5 pb-70">
              <div className="container">
                <div className="row justify-content-center align-items-center">
                  <div className="col-xl-5 col-md-6">
                    <div className="support-item">
                      <div className="support-icon"></div>
                      <div className="">
                        <h4 className="title">Additional Services: </h4>
                        <li>Rooftop cleaning up</li>
                        <li>Gutter/Eavestrough Replacement and cleanup </li>
                        <li>summer buck-yard cleaning services</li>{" "}
                        <li>waste desposal</li>
                        <li>garbage bins pressure washing </li>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="support-item">
                      <img
                        src="/assets/img/services/cleaning-services.jpg"
                        alt="roofing"
                        className="rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Layout>
      </>
    );
}