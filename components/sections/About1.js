import Link from "next/link"

export default function About1() {
    return (
      <>
        <section className="about-area pb-120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                <div className="about-img-wrap">
                  <img
                    src="/assets/img/erica/about-us.jpg"
                    alt=""
                    className="wow fadeInRight w-50"
                    data-wow-delay=".4s"
                  />
                  <img
                    src="/assets/img/erica/home-banner.jpg"
                    alt="roofing services in Calgary"
                    className="wow fadeInRight w-50"
                    data-wow-delay=".2s"
                  />
                  <div className="about-experiences-wrap">
                    <div className="experiences-item">
                      <div className="icon">
                        <img
                          src="/assets/img/icon/about_icon01.svg"
                          alt="roofing services in Calgary"
                        />
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
                        <img
                          src="/assets/img/icon/about_icon02.svg"
                          alt="roofing services in Calgary"
                        />
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
                  <div className="section-title mb-25 tg-heading-subheading animation-style3">
                    <span className="sub-title tg-element-title">
                      About Our Company
                    </span>
                    <h2 className="title tg-element-title">
                      We’re Committed to Roofing Excellence
                    </h2>
                  </div>
                  <p>
                    We’re the roofing service to ensure that kind of
                    problem-free experience. You won’t have to worry in the
                    slightest about the quality of your Roofing and Exteriors.
                    We follow the highest roofing standards, so they are made to
                    last.
                  </p>
                  <div className="about-list">
                    <ul className="list-wrap">
                      <li>
                        <i className="fas fa-check" />
                        We take pride in our ability to deliver the widest array
                        of services, ensuring all your needs are tackled.
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
      </>
    );
}
