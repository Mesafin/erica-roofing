import Link from "next/link"
import { useState } from "react"

export default function Banner1() {
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
        <section className="banner-area">
          <div
            className="banner-shape"
            data-background="/assets/img/banner/banner_shape.jpg"
          />
          <div
            className="banner-bg"
            data-background="/assets/img/erica/index-banner.jpg"
          >
            <div className="banner-content">
              <h2 className="title wow fadeInDown" data-wow-delay=".2s">
                Best Roofing and Exterior Services and Consulting
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".2s">
                Looking for the best roofing contractors in Calgary to tackle
                your residential or commercial roofing needs? Then you’ve come
                to the right place.
              </p>
              <Link
                href="/contact"
                className="btn wow fadeInUp"
                data-wow-delay=".4s"
              >
                Contact Us
              </Link>
            </div>
            <div className="banner-tooltip-wrap">
              <div
                className={
                  isActive.key == 1
                    ? "tooltip-item top active"
                    : "tooltip-item top"
                }
                onClick={() => handleToggle(1)}
              >
                <div className="tooltip-btn pulse">
                  <i className="fas fa-plus" />
                </div>
                <div className="tooltip-content">
                  <h2 className="title">Metal Roofing </h2>
                  <p>
                    Traditional roofing methods are becoming obsolete. They’re
                    not as efficient, practical, or good-looking as metal roofs.
                  </p>
                </div>
              </div>
              <div
                className={
                  isActive.key == 2 ? "tooltip-item active" : "tooltip-item"
                }
                onClick={() => handleToggle(2)}
              >
                <div className="tooltip-btn pulse">
                  <i className="fas fa-plus" />
                </div>
                <div className="tooltip-content">
                  <h2 className="title">Roof Repair</h2>
                  <p>
                    Roofs get damaged. Whether by time or weather conditions,
                    they will sooner or later need some repair. And when that
                    happens, you’ll want to hire the best roof repair Calgary
                    service available. We are the company that offers that kind
                    of service.
                  </p>
                </div>
              </div>
              <div
                className={
                  isActive.key == 3 ? "tooltip-item active" : "tooltip-item"
                }
                onClick={() => handleToggle(3)}
              >
                <div className="tooltip-btn pulse">
                  <i className="fas fa-plus" />
                </div>
                <div className="tooltip-content">
                  <h2 className="title">Flat Roofing</h2>
                  <p>
                    Roofs with no slope are hard to maintain. They are hard to
                    install. And get damaged more easily than sloped roofs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
