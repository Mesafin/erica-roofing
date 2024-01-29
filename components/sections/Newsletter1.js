import Link from "next/link";


export default function Newsletter1() {
    return (
        <>
            <section className="newsletter-area jarallax newsletter-bg" data-background="/assets/img/bg/newsletter_bg.jpg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5">
                            <div className="newsletter-content">
                                <div className="section-title white-title-two tg-heading-subheading animation-style3">
                                    <span className="sub-title tg-element-title">Quality Roofing Contact From</span>
                                    <h2 className="title tg-element-title">Need Roofing Any Services?</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="newsletter-form">
                                <form action="#">
                                
                                    <Link href="/contact" >
                                    <button type="submit" className="btn btn-two">Contact Now</button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
