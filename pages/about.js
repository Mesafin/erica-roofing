import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Slider from "react-slick"
const settings = {
    dots: true,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
}

export default function About() {

    return (
      <>
        <Layout
          breadcrumbTitle="About Us"
          imageUrl="/assets/img/hero/canada-day-md-min.jpg"
        >
          <section className="about-area inner-about-area pt-120 ">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-10 col-lg-10 order-0 order-lg-2">
                  <div className="section-title mb-25">
                    <span className="sub-title">We Are</span>
                    <h2 className="title">
                      The Roofing Contractors You Can Rely Upon
                    </h2>
                  </div>
                  <p>
                    Our company was founded by Calgary roofing contractors with
                    decades of combined experience. So we know what we’re doing.
                    But most importantly, we know exactly how to treat our
                    customers right, and we know how to tackle even the toughest
                    of jobs – no matter how tough.
                  </p>
                  <p>
                    The roofing industry is filled with contractors that don’t
                    pay attention to details, people who don’t offer any
                    warranty, and builders who don’t have a clear idea of what
                    they’re doing. We’re none of that. We’ve installed thousands
                    of these roofs already, always ensuring top support and
                    quality.
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
          <section className="about-area inner-about-area pt-120 pb-120">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                  <div className="about-img-wrap">
                    <img
                      src="/assets/img/erica/about-us-5.jpg"
                      alt=""
                      className="wow fadeInRight"
                      data-wow-delay=".4s"
                    />
                    <img
                      src="/assets/img/images/about_img02.jpg"
                      alt=""
                      className="wow fadeInRight"
                      data-wow-delay=".2s"
                    />
                    <div className="about-experiences-wrap">
                      <div className="experiences-item">
                        <div className="icon">
                          <img src="/assets/img/icon/about_icon01.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6 className="title">
                            We don’t only install roofs on homes. We also offer
                            the best service for commercial roofing Calgary.
                          </h6>
                        </div>
                      </div>
                      <div className="experiences-item">
                        <div className="icon">
                          <img src="/assets/img/icon/about_icon02.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6 className="title">
                            We use professional and experienced person
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6">
                  <div className="about-content">
                    <div className="section-title mb-25">
                      <span className="sub-title">About Our Company</span>
                      <h2 className="title">
                        We’re Committed to Roofing Excellence
                      </h2>
                    </div>
                    <p>
                      We’re the roofing service to ensure that kind of
                      problem-free experience. You won’t have to worry in the
                      slightest about the quality of your Roofing and Exteriors.
                      We follow the highest roofing standards, so they are made
                      to last.
                    </p>
                    <div className="about-list">
                      <ul className="list-wrap">
                        <li>
                          <i className="fas fa-check" />
                          We take pride in our ability to deliver the widest
                          array of services, ensuring all your needs are
                          tackled.
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Professional and experienced human resources.
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          Provide Reliable, fully insured and the best roof
                          services
                        </li>
                      </ul>
                    </div>
                    <Link href="/about" className="btn">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* about-area-end */}
          {/* work-area */}
          <section className="work-area">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="section-title text-center mb-50">
                    <span className="sub-title">Our Working Process</span>
                    <h2 className="title">Roof Plan Implementation</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-3 col-md-6">
                  <div className="work-item">
                    <div className="work-thumb">
                      <img
                        src="/assets/img/images/work_img01.png"
                        alt="Roof Plan Step 1"
                      />
                      <h4 className="number">01</h4>
                    </div>
                    <div className="work-content">
                      <h2 className="title">Plan for Roofing</h2>
                      <p>
                        Our expert team carefully analyzes your roofing needs
                        and develops a comprehensive plan to ensure optimal
                        functionality and aesthetic appeal.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="work-item">
                    <div className="work-thumb">
                      <img
                        src="/assets/img/images/work_img02.png"
                        alt="Roof Plan Step 2"
                      />
                      <h4 className="number">02</h4>
                    </div>
                    <div className="work-content">
                      <h2 className="title">Schedule Estimate</h2>
                      <p>
                        We provide detailed estimates, including timelines and
                        costs, ensuring transparency and clarity throughout the
                        entire roofing project.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="work-item">
                    <div className="work-thumb">
                      <img
                        src="/assets/img/images/work_img03.png"
                        alt="Roof Plan Step 3"
                      />
                      <h4 className="number">03</h4>
                    </div>
                    <div className="work-content">
                      <h2 className="title">Install New Roof</h2>
                      <p>
                        Our skilled team executes the plan meticulously,
                        ensuring the installation of a durable and reliable roof
                        that meets the highest standards.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="work-item">
                    <div className="work-thumb">
                      <img
                        src="/assets/img/images/work_img04.png"
                        alt="Roof Plan Step 4"
                      />
                      <h4 className="number">04</h4>
                    </div>
                    <div className="work-content">
                      <h2 className="title">Enjoy Roofing</h2>
                      <p>
                        Sit back and enjoy the benefits of your new roof, backed
                        by our commitment to quality and customer satisfaction.
                        Your comfort and peace of mind are our priorities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* work-area-end */}
       
          {/* area-bg */}
          <div
            className="area-bg-five"
            data-background="/assets/img/bg/area_bg05.jpg"
          >
         
          </div>
          {/* area-bg-end */}

          <div className="">
            <div id="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25080.25316447707!2d-114.04068820800247!3d51.1677321022108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f0c2e3281c7%3A0x99244aae3e68d633!2s36%20Redstone%20Dr%20NE%2C%20Calgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sus!4v1678975266976!5m2!1sen!2sus"
                height="670"
                style={{ border: 0, width: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Layout>
      </>
    );
}