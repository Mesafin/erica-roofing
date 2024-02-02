import Link from "next/link"
import { useState } from 'react'

export default function Project1() {
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
        <section
          className="project-area project-bg"
          data-background="/assets/img/bg/project_bg.jpg"
        >
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-8">
                <div className="section-title white-title mb-50 tg-heading-subheading animation-style3">
                  <span className="sub-title tg-element-title">
                    Latest Projects
                  </span>
                  <h2 className="title tg-element-title">
                    Explore Our Latest Projects
                  </h2>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="view-all-btn text-end mb-50">
                  <Link href="/services" className="btn">
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="project-item wow fadeInUp"
                  data-wow-delay=".2s"
                  onMouseEnter={() => handleToggle(1)}
                  onMouseLeave={() => handleToggle(1)}
                >
                  <div
                    className="project-thumb text-end"
                    style={{
                      display: `${isActive.key == 1 ? "block" : "none"}`,
                    }}
                  >
                    <img
                      src="/assets/img/erica/project-1.jpg"
                      className="w-75"
                      alt="erica roofing services in Calgary projects"
                    />
                  </div>
                  <div className="project-content">
                    <div className="left-side-content">
                      <span>Projects V1</span>
                      <h2 className="title">
                        <Link href="#">New Roof Installation Excellence</Link>
                      </h2>
                      <p
                        style={{
                          display: `${isActive.key == 1 ? "block" : "none"}`,
                        }}
                      >
                        Introducing our latest triumph – the New Roof
                        Installation project! Our adept team seamlessly executed
                        the installation of cutting-edge roofing materials,
                        elevating the property's aesthetics and ensuring
                        unmatched durability. Explore how our expertise
                        transformed this roof into a symbol of excellence.
                      </p>
                    </div>
                    <div className="project-link"></div>
                  </div>
                </div>
                <div
                  className="project-item wow fadeInUp"
                  data-wow-delay=".3s"
                  onMouseEnter={() => handleToggle(2)}
                  onMouseLeave={() => handleToggle(2)}
                >
                  <div
                    className="project-thumb text-end"
                    style={{
                      display: `${isActive.key == 2 ? "block" : "none"}`,
                    }}
                  >
                    <img
                      src="/assets/img/erica/project-2.jpg"
                      className="w-75"
                      alt="erica roofing projects in Calgary"
                    />
                  </div>
                  <div className="project-content">
                    <div className="left-side-content">
                      <span>Projects V2</span>
                      <h2 className="title">
                        <Link href="#">Completed Roof Replacement Project</Link>
                      </h2>
                      <p
                        style={{
                          display: `${isActive.key == 2 ? "block" : "none"}`,
                        }}
                      >
                        Celebrate the success of our recent Roof Replacement and
                        New Roof Installation projects! Our dedicated team
                        seamlessly executed the installation of high-quality
                        roofing materials, enhancing the property's aesthetics
                        and ensuring long-term durability. Explore how our
                        expertise transformed these roofs into standout
                        features.
                      </p>
                    </div>
                    <div className="project-link"></div>
                  </div>
                </div>
                <div
                  className="project-item wow fadeInUp"
                  data-wow-delay=".4s"
                  onMouseEnter={() => handleToggle(3)}
                  onMouseLeave={() => handleToggle(3)}
                >
                  <div
                    className="project-thumb text-end"
                    style={{
                      display: `${isActive.key == 3 ? "block" : "none"}`,
                    }}
                  >
                    <img
                      src="/assets/img/erica/project-3.jpg"
                      className="w-75"
                      alt="erica roofing projects and services in Calgary"
                    />
                  </div>
                  <div className="project-content">
                    <div className="left-side-content">
                      <span>Projects V3</span>
                      <h2 className="title">
                        <Link href="#">
                          Emergency Roof Repairs Success Story
                        </Link>
                      </h2>
                      <p
                        style={{
                          display: `${isActive.key == 3 ? "block" : "none"}`,
                        }}
                      >
                        Proudly sharing our success in an Emergency Roof Repairs
                        and New Roof Installation project! Our skilled
                        technicians swiftly addressed leaks, storm damage, and
                        installed a new roof, providing effective solutions that
                        safeguarded the property
                      </p>
                    </div>
                    <div className="project-link"></div>
                  </div>
                </div>
                <div
                  className="project-item wow fadeInUp mb-lg-5"
                  data-wow-delay=".5s"
                  onMouseEnter={() => handleToggle(4)}
                  onMouseLeave={() => handleToggle(4)}
                >
                  <div
                    className="project-thumb text-end"
                    style={{
                      display: `${isActive.key == 4 ? "block" : "none"}`,
                    }}
                  >
                    <img
                      src="/assets/img/erica/project-4.jpg"
                      className="w-75"
                      alt="erica roofing projects in Calgary"
                    />
                  </div>
                  <div className="project-content">
                    <div className="left-side-content">
                      <span>Projects V4</span>
                      <h2 className="title">
                        <Link href="#">
                          Roof Inspection and Maintenance Excellence
                        </Link>
                      </h2>
                      <p
                        style={{
                          display: `${isActive.key == 4 ? "block" : "none"}`,
                        }}
                      >
                        Reflecting on a successful Roof Inspection and
                        Maintenance project, alongside our ongoing commitment to
                        excellence in New Roof Installations! Our comprehensive
                        assessments and proactive maintenance measures preserved
                        the roofs' longevity. Dive into the details of how our
                        meticulous care and new installations kept potential
                        issues at bay, ensuring the continued well-being of the
                        property.
                      </p>
                    </div>
                    <div className="project-link"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
