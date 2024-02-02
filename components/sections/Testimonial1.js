import Slider from "react-slick"
const settings = {
    dots: true,
	infinite: true,
	speed: 1000,
	autoplay: false,
	arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,
}


export default function Testimonial1() {
    return (
      <>
        <section className="testimonial-area pt-115 pb-120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                <div className="testimonial-img">
                  {/* <img src="/assets/img/images/testimonial_img.jpg" alt="" /> */}
                  <img
                    src="/assets/img/erica/testimonial.jpg"
                    alt="roofing services in Calgary testimonials"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="testimonial-content">
                  <div className="section-title mb-45 tg-heading-subheading animation-style3">
                    <span className="sub-title tg-element-title">
                      Our Testimonial
                    </span>
                    <h2 className="title tg-element-title">
                      Some of Our Respected Happy Clients Says
                    </h2>
                  </div>
                  <Slider {...settings} className="testimonial-active">
                    <div className="testimonial-item">
                      <div className="testimonial-icon">
                        <i className="fas fa-quote-left" />
                      </div>
                      <div className="testimonial-content">
                        <p>
                          One of the best roofers in Calgary. I've worked with
                          numerous roofers in Calgary but Erica Roofing tops the
                          list!
                        </p>
                      </div>
                      <div className="testimonial-avatar">
                        <div className="avatar-content">
                          <h6 className="title">Erick Thang</h6>
                          <p>Customer</p>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-item">
                      <div className="testimonial-icon">
                        <i className="fas fa-quote-left" />
                      </div>
                      <div className="testimonial-content">
                        <p>
                          We had to re roof our house in Calgary. After receiving some
                          pretty high quotes, Erica roofing came with a fast
                          estimate and decent quote. Recommended!
                        </p>
                      </div>
                      <div className="testimonial-avatar">
                        <div className="avatar-content">
                          <h6 className="title">Darrell Steward</h6>
                          <p>Roofing Expert</p>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-item">
                      <div className="testimonial-icon">
                        <i className="fas fa-quote-left" />
                      </div>
                      <div className="testimonial-content">
                        <p>
                          Competitive pricing, warranty received for the new
                          roof, fast and professional company in Calgary.
                        </p>
                      </div>
                      <div className="testimonial-avatar">
                        <div className="avatar-content">
                          <h6 className="title">Albert Hallahan</h6>
                          <p>Customer</p>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
