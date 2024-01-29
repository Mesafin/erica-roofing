import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle, imageUrl }) {
  return (
    <>
      <section
        className="breadcrumb-area breadcrumb-bg"
          // data-background="/assets/img/bg/breadcrumb_bg.jpg"
        data-background={imageUrl}
      >
        <div
          className="breadcrumb-shape"
          data-background="/assets/img/images/breadcrumb_shape.png"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <h2 className="title">{breadcrumbTitle}</h2>
                <nav aria-label="breadcrumb" style={{width: "250px", borderRadius: "10px", backgroundColor: "white"}}>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link className="text-dark ps-5" href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {breadcrumbTitle}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
