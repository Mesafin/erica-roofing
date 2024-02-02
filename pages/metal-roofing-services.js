import Layout from "@/components/layout/Layout";
import Head from "next/head";
export default function MetalRoofing() {
  return (
    <>
      <Head>
        <title>Metal Roofing Solutions - Erica</title>
        <meta
          name="description"
          content="Discover the benefits of metal roofing with Our Company. We offer expert metal roofing installation and services. Explore durable, energy-efficient, and stylish metal roof options for your property."
        />
      </Head>
      <Layout
        breadcrumbTitle="Metal Roofing"
        imageUrl="/assets/img/hero/montreal-river-dusk.jpg"
      >
        <div>
          <section className="project-details-area pt-120 pb-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="project-details-wrap">
                    <div className="project-details-thumb">
                      <img
                        src="/assets/img/hero/metal-roofing.jpeg"
                        alt="metal roofing image"
                      />
                    </div>
                    <div className="project-details-content">
                      <h2 className="title">
                        Metal Roofing Calgary: Installation and Maintenance
                      </h2>
                      <p className="info-one pb-3">
                        Beautiful and robust, metal roofs stand up to our
                        harshest weather events. It is an environmentally friend
                        choice as it is recyclable, long lasting, and can be
                        engineered to be solar ready!
                      </p>
                      <p className="info-two">
                        With metal roofing Calgary, you can make even the
                        dullest of buildings look fantastic. The unique
                        appearance, durability, and low maintenance metal roofs
                        offer will make your roof much better in every way. But
                        you need expertise, the right set of skills, and a deep
                        focus on quality results to install this type of roof.
                        And these aren’t easy to come by. Luckily for you, we
                        are precisely the roofing company you’re looking for. We
                        can make your house or business stand out with
                        professional metal roofing services.
                      </p>
                      <div className="project-challenge-wrap">
                        <div className="row">
                          <div className="col-xl-5">
                            <div className="challenge-content">
                              <h2 className="title">Why Choose Us</h2>
                              <p className="info-three">
                                With our installation services, we make that
                                your metal roof is exactly what you need. Using
                                the best materials for the job and premium tools
                                to ensure a long-lasting result, you won’t have
                                a problem with your metal roofing after we
                                install it.
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-7">
                            <div className="challenge-img">
                              <img
                                src="/assets/img/erica/metal/red-roof.jpg"
                                alt="red-roof img"
                              />
                              <img
                                src="/assets/img/erica/metal/metal-roofing-3.jpg"
                                alt="roofing services in Calgary"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <h2 className="title-two">
                        {" "}
                        Advantages of installing metal roofing
                      </h2>
                      <p className="info-five">
                        Most people think of metal roofing as a sheet of thin
                        metal that covers large industrial spaces. And that’s
                        completely wrong. Metal roofing is one of the most
                        technologically-advanced types of roofing nowadays. It
                        offers a wide array of benefits over the short and long
                        term, which traditional roofing methods don’t.
                      </p>
                      <ul className="list-wrap">
                        <li>
                          <i className="fas fa-check-circle" />
                          Unbeatable Durability
                        </li>
                        <li>
                          <i className="fas fa-check-circle" />
                          Better Looks
                        </li>
                        <li>
                          <i className="fas fa-check-circle" />
                          Higher Safety
                        </li>
                        <li>
                          <i className="fas fa-check-circle" />
                          More Efficiency
                        </li>
                        <li>
                          <i className="fas fa-check-circle" />
                          Fantastic Warranty
                        </li>
                        <li>
                          <i className="fas fa-check-circle" />
                          Less Maintenance
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <aside className="project-sidebar">
                    <div className="project-widget">
                      <h4 className="widget-title">Exterior Services</h4>
                      <div className="project-info-list">
                        <ul className="">
                          <li>
                            <span>Vinyl Siding</span>
                          </li>
                          <li>
                            <span>Fibre Cement Siding</span>
                          </li>
                          <li>
                            <span>Gutters/Eavestrough</span>
                          </li>
                          <li>
                            <span>Soffit and Fasica</span>
                          </li>
                          <li>
                            <span>Downspouts</span>
                          </li>
                          <li>
                            <span>Repairs and Maintaninance</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="project-widget">
                      <h4 className="widget-title">Need Free Estimate ?</h4>
                      <div className="project-contact">
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-phone-alt" />
                            +1 (403) 630-2629
                          </li>
                          <li>
                            <i className="fas fa-envelope" />
                            ericaroofing91@gmail.com
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt" />
                            36 Redstone Drive NE, Calgary AB
                          </li>
                        </ul>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
