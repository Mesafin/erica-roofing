import Link from "next/link"
import { useEffect, useState } from 'react'
import Sidebar from "./Sidebar"

export default function Header({ headerCls, headerTop }) {
    const [scroll, setScroll] = useState(0)

    const [isToggled, setToggled] = useState(false)
    const handleToggled = () => {
        setToggled(!isToggled)
        !isToggled ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }


    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return (
      <>
        {/* {headerTop && ( */}
        <div className="header-top-wrap">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-9">
                <div className="header-top-left">
                  <ul className="list-wrap">
                    <li className="welcome">Welcome to Erica Roofing and Exteriors</li>
                    <li>
                      <i className="fas fa-phone-alt" />
                      <Link href="tel:+14034705239">+1 (403) 630 2629</Link>
                    </li>
                    <li>
                      <i className="fas fa-envelope" />
                      <Link href="mailto:ericaroofing91@gmail.com">
                        ericaroofing91@gmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-3">
                <div className="header-top-right">
                  <div className="header-social">
                    <ul className="list-wrap">
                      <li>
                        <a
                          href="https://www.facebook.com/profile.php?id=61555940798994"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
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
                      <li>
                        <Link
                          href="https://twitter.com/EricaRoofi99133"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* )} */}
        <header>
          <div
            id="sticky-header"
            className={`menu-area  ${scroll ? "sticky-menu" : ""}
             ${headerCls ? headerCls : ""}`}
          >
            <div className="container">
              <div className="row">
                <div className="col-12 mini-screen">
                  <div className="mobile-nav-toggler" onClick={handleToggled}>
                    <i className="fas fa-bars" />
                  </div>
                  <div className="menu-wrap">
                    <nav className="menu-nav">
                      <div
                        className="logo different-logo"
                        // style={{ zoom: "100%" }}
                      >
                        <Link href="/">
                          <img
                            src="/assets/img/erica/logo/eri-1.png"
                            alt="Logo"
                          />
                        </Link>
                      </div>
                      <div className="logo d-none">
                        <Link href="/">
                          <img src="/assets/img/erica/logo-1.png" alt="Logo" />
                        </Link>
                      </div>
                      <div className="navbar-wrap main-menu d-none d-lg-flex">
                        <ul className="navigation">
                          <li>
                            <Link href="/">Home</Link>
                          </li>
                          <li>
                            <Link href="/about-us">About us</Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link href="/our-services">Services</Link>
                            <ul className="sub-menu">
                              <li>
                                <Link href="/roof-repairing-services">Roof Repair</Link>
                              </li>
                              <li>
                                <Link href="/flat-roofing-services">Flat Roofing</Link>
                              </li>
                              <li>
                                <Link href="/metal-roofing-services">Metal Roofing</Link>
                              </li>
                              <li>
                                <Link href="/rubber-roofing-services">
                                  Rubber Roofing
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link href="/contact">Contact</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="header-action d-none d-md-block">
                        <ul className="list-wrap">
                          <li className="header-btn">
                            <Link href="/contact" className="btn">
                              Get a Quoute
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  {/* Mobile Menu  */}
                  <div className="mobile-menu">
                    <nav className="menu-box">
                      <div className="close-btn" onClick={handleToggled}>
                        <i className="fas fa-times" />
                      </div>
                      <div className="nav-logo">
                        <Link href="/">
                          <img src="/assets/img/erica/logo-1.png" alt="Logo" />
                        </Link>
                      </div>
                      <div className="menu-outer">
                        <Sidebar />
                      </div>
                      <div className="social-links">
                        <ul className="clearfix list-wrap">
                          <li>
                            <a
                              href="https://www.facebook.com/profile.php?id=61555940798994"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/EricaRoofi99133"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-twitter" />
                            </a>
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
                    </nav>
                  </div>
                  <div className="menu-backdrop" />
                  {/* End Mobile Menu */}
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
}
