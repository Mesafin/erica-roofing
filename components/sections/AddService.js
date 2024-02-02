import React from 'react'

const AddService = () => {
  return (
    <>
      {/* exteriors */}

      {/* <section className="support-area pt-5 pb-70">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-5 col-md-6">
              <div className="support-item">
                <div className="support-icon"></div>
                <div className="">
                  <h4 className="title">Roofing: </h4>
                  <p>General Residential Roofing</p>
                  <p>Metal Cladding</p>
                  <p>Metal Roofing Cedar Shakes Roofs</p>{" "}
                  <p>Asphalt & Fiberglass</p>
                  <p>Roofs Rubber Roofs Lightweight </p>
                  <p>Concrete Roofs</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="support-item">
                <img
                  src="/assets/img/services/roofing-services.jpg"
                  alt="roofing"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      */}

      <section className="support-area pt-5 pb-70">
        <div className="container">
          <div className="row justify-content-center g-5 align-items-center">
            <div className="col-xl-4 col-md-6">
              <div className="support-item">
                <img
                  src="/assets/img/services/exterior.jpg"
                  alt="erica exterior services"
                  className='rounded'
                />
              </div>
            </div>
            <div className="col-xl-5 col-md-6 ps-lg-5 ms-lg-5">
              <div className="support-item">
                <div className="support-icon"></div>
                <div className="">
                  <h4 className="title">Exterior Services: </h4>
                  <li>Vinyl Siding</li>
                  <li>Fibre Cement Siding</li>
                  <li>Gutters/Eavestrough and Downspouts</li>
                  <li>Soffit and Fasica</li>
                  <li>Repairs and Maintainance</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="support-area pt-5  pb-70">
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
                <img src="/assets/img/services/garbage.jpg"
                className='rounded' alt="erica additional services" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddService
