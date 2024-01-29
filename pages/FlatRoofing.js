import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function FlatRoofing() {
  return (
    <>
      <Layout
        breadcrumbTitle="Flat Roofing"
        imageUrl="/assets/img/hero/home_h2_roofings.jpg"
      >
        <div>
          <section className="about-area inner-about-area">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-8 col-lg-8 order-0 order-lg-2">
                  <div className="section-title mb-25 mt-5 pt-lg-5">
                    <span className="sub-title">Flat Roofing</span>
                    <h2 className="title">
                      Flat Roofing Calgary: Dependable Expert Services
                    </h2>
                  </div>
                  <p>
                    Roofs with no slope are hard to maintain. They are hard to
                    install. And get damaged more easily than sloped roofs.
                  </p>
                  <p>
                    Because snow, water, and debris build up more quickly on a
                    flat roof, the number of problems you may encounter are
                    higher than with any other type of roof. That’s why having a
                    flat roofing Calgary company ready to tackle any related job
                    will save you tons of money, a lot of time, and an
                    incredible amount of effort. We offer any installation,
                    repair, emergency, maintenance, or inspection service you
                    may need. Whether residential or commercial flat roof –
                    we’re the perfect fit for your needs.
                  </p>

                  <p>
                    As the best Calgary roofers, we want to always do things
                    right. For that, we pay attention to all your demands,
                    needs, and standards. And we use the latest industry
                    practices to provide technologically advanced and resilient
                    roofs that won’t let you down in the slightest.
                  </p>

                  <Link href="/contact" className="btn mt-5">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="services-details-area pt-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="services-details-wrap">
                    <div className="services-details-content">
                      <h2 className="title">
                        Residential Flat Roof Installation
                      </h2>
                      <p>
                        Few homes use flat roofs. So few contractors know how to
                        tackle the installation of these roofs in residential
                        areas. Because we’ve worked on this kind of roof for
                        years, we know precisely how to tackle this endeavor.
                      </p>

                      <p className="pt-3">
                        Our focus is to provide the best flat roof installation
                        that matches our client’s needs and the surrounding
                        structure’s potential.
                      </p>

                      <p className="pt-3">
                        Our focus is to provide the highest responsiveness and
                        availability in the industry. No matter the level of
                        roof install you’re looking for, we can help you. Below,
                        we explain a bit more about our services and why we are
                        your best bet.
                      </p>

                      <div className="services-process-wrap pb-3">
                        <div className="row justify-content-center">
                          <div className="col-lg-8 col-md-8">
                            <div className="services-process-img">
                              <img
                                src="/assets/img/erica/flat/flat-3.jpg"
                                alt=""
                              />
                              <img
                                src="/assets/img/erica/flat/flat-2.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                
                        </div>
                      </div>
                      <h2 className="title-two">
                        Flat Roofing Maintenance & Inspection
                      </h2>
                      <p>
                        Keeping flat roofs in pristine condition is not an easy
                        endeavor. It takes a lot of time and effort. And most
                        importantly, it takes tons of knowledge and experience
                        to know what to maintain and what to overlook. As a
                        professional flat-roofing service, we know exactly what
                        to pay attention to and what to keep working on in a
                        flat roof. Our focus is to reduce costs over time,
                        improve the effectiveness of the roof and its
                        durability. For properties with shingle roofs in need of
                        repairs please go here. To achieve this kind of flat
                        roof quality, you need to perform the proper
                        maintenance. But even more important, you need to know
                        what to focus on with an initial inspection.
                      </p>
                      <div className="service-benefits-wrap pb-5">
                        <div className="row">
                          <div className="col-lg-7 order-0 order-lg-2">
                            <div className="benefits-img">
                              <img
                                src="/assets/img/services/sb_img01.jpg"
                                alt=""
                              />
                              <img
                                src="/assets/img/erica/flat/flat-4.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-5">
                            <div className="benefits-content">
                              <h2 className="title">
                                Here’s how we can help you out:
                              </h2>
                              <ul className="list-wrap">
                                <li>
                                  <i className="fas fa-check-circle" />
                                  Insulation Improvement
                                </li>
                                <li>
                                  <i className="fas fa-check-circle" />
                                  Moisture Stain Removal
                                </li>
                                <li>
                                  <i className="fas fa-check-circle" />
                                  Small Leak Repair
                                </li>
                                <li>
                                  <i className="fas fa-check-circle" />
                                  Preventative Weatherproofing
                                </li>
                                <li>
                                  <i className="fas fa-check-circle" />
                                  Monthly Maintenance
                                </li>
                                <li>
                                  <i className="fas fa-check-circle" />
                                  Routine Inspections
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
