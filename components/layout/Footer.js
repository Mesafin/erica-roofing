import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer>
        <div
          className="footer-area footer-bg"
          data-background="/assets/img/bg/footer_bg.jpg"
        >
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-7">
                  <div className="footer-widget">
                    <h2 className="fw-title">About Us</h2>
                    <div className="footer-content">
                      <p>
                        Whether you're in need of roof installations, repairs,
                        or a complete exterior makeover, we're here to bring
                        your vision to life. At ERICA, we blend expertise with a
                        passion for quality to create lasting impressions on
                        every project
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-6">
                  <div className="footer-widget">
                    <h2 className="fw-title">Our Services</h2>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        <li>
                          <Link href="/metal-roofing-services">
                            <i className="fas fa-angle-double-right" />
                            Single Ply Roofing
                          </Link>
                        </li>
                        <li>
                          <Link href="/roof-repairing-services">
                            <i className="fas fa-angle-double-right" />
                            Modified Roofing
                          </Link>
                        </li>
                        <li>
                          <Link href="/flat-roofing-services">
                            <i className="fas fa-angle-double-right" />
                            Built-Up Roofing
                          </Link>
                        </li>
                        <li>
                          <Link href="/metal-roofing-services">
                            <i className="fas fa-angle-double-right" />
                            Metal Roofing
                          </Link>
                        </li>
                        <li>
                          <Link href="/rubber-roofing-services">
                            <i className="fas fa-angle-double-right" />
                            Vegetative Roofing
                          </Link>
                        </li>
                        <li>
                          <Link href="/metal-roofing-services">
                            <i className="fas fa-angle-double-right" />
                            Specialty Metal
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                  <div className="footer-widget">
                    <h2 className="fw-title">Quick Links</h2>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        <li>
                          <Link href="/">
                            <i className="fas fa-angle-double-right" />
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link href="/about">
                            <i className="fas fa-angle-double-right" />
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link href="/services">
                            <i className="fas fa-angle-double-right" />
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link href="/roof-repairing-services">
                            <i className="fas fa-angle-double-right" />
                            Roof Repair
                          </Link>
                        </li>
                        <li>
                          <Link href="/flat-roofing-services">
                            <i className="fas fa-angle-double-right" />
                            Flat Roofing
                          </Link>
                        </li>
                        <li>
                          <Link href="/metal-roofing-services">
                            <i className="fas fa-angle-double-right" />
                            Metal Roofing
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <i className="fas fa-angle-double-right" />
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-logo-area">
                <div className="row align-items-center">
                  <div className="col-xl-4 col-lg-4 col-md-12">
                    <div className="logo bg-white">
                      <Link href="/index">
                        <img
                          src="/assets/img/erica/logo/eri-1.png"
                          className="rounded-4"
                          alt="roofing service in Calgary"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="footer-contact">
                      <div className="icon">
                        <i className="fas fa-phone-alt" />
                      </div>
                      <div className="content">
                        <span>Phone No</span>
                        <a href="tel:+14036302629">+1 (403) 630 2629</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="footer-social">
                      <h2 className="title">Follow Us:</h2>
                      <ul className="list-wrap">
                        <li>
                          <Link
                            href="https://www.facebook.com/profile.php?id=61555940798994"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://twitter.com/EricaRoofi99133"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <a
                            href="https://wa.me/+14036302629"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-whatsapp" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-md-6">
                  <div className="copyright-text">
                    <p>
                      © Copyright {new Date().getFullYear()}. All Right Reserved
                    </p>
                  </div>
                </div>

                <div className="col-md-6 text-center text-sm-end">
                  Developed By :{" "}
                  <a href="https://mesafin.github.io/Mesafint.tech/">
                    Mesafint Minwagaw
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
