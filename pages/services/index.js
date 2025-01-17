import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Nav, Tab } from "react-bootstrap";

const Pricing = () => {
  const [cloudServices, setCloudServices] = useState([]);

  useEffect(() => {
    console.log("useEffect is running ");

    fetch("http://localhost:3000/api/services/cloudengineering/services")
      .then((response) => response.json())
      .then((parsed) => {

        console.log("helloooooooooooooooooooooo",parsed);
        setCloudServices(parsed);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);
  const [dataServices, setDataServices] = useState([]);
  // console.log(parsed);

  useEffect(() => {
    console.log("useEffect is running ");

    fetch("http://localhost:3000/api/services/dataengineering/services")
      .then((response) => response.json())
      .then((parsed) => {
        setDataServices(parsed);
        console.log("helloooooooo",parsed)
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  const [aiServices, setAiServices] = useState([]);

  useEffect(() => {
    console.log("useEffect is running ");

    fetch("http://localhost:3000/api/services/generativeaiandml/services")
      .then((response) => response.json())
      .then((parsed) => {
        setAiServices(parsed);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  return (
    <Layout>
      ,
      <PageBanner pageName={"Services"} />{" "}
      <section className="price-plan-page-top pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15"> Cloud Pro AI Provides </span>
            <h2>Cloud Pro AI Services</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item style-three wow fadeInUp delay-0-2s">
                <span className="badge">Best Package</span>
                <Link href="/services/dataengineering">
                  <h4 className="title">Data Engineering</h4>
                </Link>

                <span className="price-count">5 Services Included</span>
                <span className="price">29.85</span>
                <h5>This Servicces Included :</h5>

                <ul>
                  {dataServices.slice(0,5).map((service) => (
                    <li key={service.slug}>
                      <Link href={`/services/dataengineering/${service.slug}`}>
                        <h3>{service.title}</h3>
                      </Link>

                      {/* <p>{service.description}</p> */}
                    </li>
                  ))}
                </ul>

                {/* <ul>
                  <li>
                    <a href="/services/dataengineering/data-analytics">
                      Data Analytics
                    </a>
                  </li>
                  <li>
                    <a href="/services/dataengineering/data-lakes-and-warehousing">
                      Data Lakes and Warehousing
                    </a>
                  </li>
                  <li>
                    <a href="/services/dataengineering/data-ops">
                      Data Operations
                    </a>
                  </li>
                  <li>
                    <a href="/services/dataengineering/data-pipelining">
                      Data Pipelining
                    </a>
                  </li>
                  {/* <li>
                    <a href="#">User &amp; Market Research</a>
                  </li> */}

                <Link legacyBehavior href="/services/dataengineering">
                  <a className="theme-btn style-two">
                    View More <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item style-three wow fadeInUp delay-0-4s">
                <span className="badge">Best Package</span>
                <h4 className="title">Generative AI and ML</h4>
                <span className="price-count">7 Services Included</span>
                <span className="price">49.64</span>
                <h5>This Plan Included :</h5>
                
                  <ul>
                    {aiServices.slice(0,5).map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/generativeaiandml/${service.slug}`}
                        >
                          <h3>{service.title}</h3>
                        </Link>

                        {/* <p>{service.description}</p> */}
                      </li>
                    ))}
                  </ul>
                
                <Link legacyBehavior href="/services/generativeaiandml">
                  <a className="theme-btn style-two">
                    View More <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item style-three wow fadeInUp delay-0-6s">
                <span className="badge">Best Package</span>
                <h4 className="title">Cloud Engineering </h4>
                <span className="price-count">7 Services Included</span>
                <span className="price">98.73</span>
                <h5>This Plan Included :</h5>
                <ul>
                    {cloudServices.slice(0,5).map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/cloudengineering/${service.slug}`}
                        >
                          <h3>{service.title}</h3>
                        </Link>

                        {/* <p>{service.description}</p> */}
                      </li>
                    ))}
                  </ul>
                
                <Link legacyBehavior href="../services/cloudengineering">
                  <a className="theme-btn style-two">
                    Show More<i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Plan Area end */}
      {/* Pricing Plan Area start */}
      <section className="price-plan-page-middle bgc-lighter pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <Tab.Container defaultActiveKey="monthly">
            <div className="row">
              <div className="col-xl-4 col-lg-8 col-md-10">
                <div className="pricing-tab-wrap mt-75 wow fadeInUp delay-0-2s">
                  <div className="section-title mb-25">
                    <span className="sub-title mb-15">
                      Amazing Pricing Plan
                    </span>
                    <h2>Affordable Pricing Packages</h2>
                  </div>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus voluptate
                    accusantium doloremque laudantium totam aperaus abillo
                    inventore veritatis quasi architecto
                  </p>
                  <Nav as="ul" className="nav pricing-tab mt-15" role="tablist">
                    <li>
                      <Nav.Link
                        as="button"
                        className="nav-link"
                        data-bs-toggle="tab"
                        eventKey="monthly"
                      >
                        Monthly <i className="fas fa-long-arrow-right" />
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        as="button"
                        className="nav-link"
                        data-bs-toggle="tab"
                        eventKey="yearly"
                      >
                        Yearly <i className="fas fa-long-arrow-right" />
                      </Nav.Link>
                    </li>
                  </Nav>
                </div>
              </div>
              <div className="col-xl-8">
                <Tab.Content className="tab-content wow fadeInUp delay-0-4s">
                  <Tab.Pane className="tab-pane fade" eventKey="monthly">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="pricing-plan-item">
                          <span className="badge">Best Package</span>
                          <h4 className="title">standard Plan</h4>
                          <span className="price-count">
                            7 Services Included
                          </span>
                          <span className="price">49.64</span>
                          <Link legacyBehavior href="/pricing">
                            <a className="theme-btn style-two">
                              Choose Package{" "}
                              <i className="fas fa-long-arrow-right" />
                            </a>
                          </Link>
                          <h5>This Plan Included :</h5>
                          <ul>
                            <li>
                              <a href="#">Premium Quality Supports (24/7)</a>
                            </li>
                            <li>
                              <a href="#">IT Consultations (Business Growth)</a>
                            </li>
                            <li>
                              <a href="#">Web Design &amp; Development</a>
                            </li>
                            <li>
                              <a href="#">Search Engine Optimization (SEO )</a>
                            </li>
                            <li>
                              <a href="#">User &amp; Market Research</a>
                            </li>
                            <li>
                              <a href="#">
                                UX/UI Strategy (Design &amp; Develop)
                              </a>
                            </li>
                            <li>
                              <a href="#">Product Engineering</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="pricing-plan-item">
                          <span className="badge">Best Package</span>
                          <h4 className="title">Golden Package</h4>
                          <span className="price-count">
                            7 Services Included
                          </span>
                          <span className="price">98.73</span>
                          <Link legacyBehavior href="/pricing">
                            <a className="theme-btn style-two">
                              Choose Package{" "}
                              <i className="fas fa-long-arrow-right" />
                            </a>
                          </Link>
                          <h5>This Plan Included :</h5>
                          <ul>
                            <li>
                              <a href="#">Premium Quality Supports (24/7)</a>
                            </li>
                            <li>
                              <a href="#">IT Consultations (Business Growth)</a>
                            </li>
                            <li>
                              <a href="#">Web Design &amp; Development</a>
                            </li>
                            <li>
                              <a href="#">Search Engine Optimization (SEO )</a>
                            </li>
                            <li>
                              <a href="#">User &amp; Market Research</a>
                            </li>
                            <li>
                              <a href="#">
                                UX/UI Strategy (Design &amp; Develop)
                              </a>
                            </li>
                            <li>
                              <a href="#">Product Engineering</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane className="tab-pane fade yearly" eventKey="yearly">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="pricing-plan-item">
                          <span className="badge">Best Package</span>
                          <h4 className="title">standard Plan</h4>
                          <span className="price-count">
                            7 Services Included
                          </span>
                          <span className="price">49.64</span>
                          <Link legacyBehavior href="/pricing">
                            <a className="theme-btn style-two">
                              Choose Package{" "}
                              <i className="fas fa-long-arrow-right" />
                            </a>
                          </Link>
                          <h5>This Plan Included :</h5>
                          <ul>
                            <li>
                              <a href="#">Premium Quality Supports (24/7)</a>
                            </li>
                            <li>
                              <a href="#">IT Consultations (Business Growth)</a>
                            </li>
                            <li>
                              <a href="#">Web Design &amp; Development</a>
                            </li>
                            <li>
                              <a href="#">Search Engine Optimization (SEO )</a>
                            </li>
                            <li>
                              <a href="#">User &amp; Market Research</a>
                            </li>
                            <li>
                              <a href="#">
                                UX/UI Strategy (Design &amp; Develop)
                              </a>
                            </li>
                            <li>
                              <a href="#">Product Engineering</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="pricing-plan-item">
                          <span className="badge">Best Package</span>
                          <h4 className="title">Golden Package</h4>
                          <span className="price-count">
                            7 Services Included
                          </span>
                          <span className="price">98.73</span>
                          <Link legacyBehavior href="/pricing">
                            <a className="theme-btn style-two">
                              Choose Package{" "}
                              <i className="fas fa-long-arrow-right" />
                            </a>
                          </Link>
                          <h5>This Plan Included :</h5>
                          <ul>
                            <li>
                              <a href="#">Premium Quality Supports (24/7)</a>
                            </li>
                            <li>
                              <a href="#">IT Consultations (Business Growth)</a>
                            </li>
                            <li>
                              <a href="#">Web Design &amp; Development</a>
                            </li>
                            <li>
                              <a href="#">Search Engine Optimization (SEO )</a>
                            </li>
                            <li>
                              <a href="#">User &amp; Market Research</a>
                            </li>
                            <li>
                              <a href="#">
                                UX/UI Strategy (Design &amp; Develop)
                              </a>
                            </li>
                            <li>
                              <a href="#">Product Engineering</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
        </div>
        <div className="price-page-shapes">
          <img
            className="shape one"
            src="assets/images/shapes/price-page-bottom.png"
            alt="Shape"
          />
          <img
            className="shape two"
            src="assets/images/shapes/price-page-right.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Pricing Plan Area end */}
      {/* Pricing Plan Area start */}
      <section className="price-plan-page-bottom pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Amazing Pricing Plan</span>
            <h2>Affordable Pricing Packages</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-2s">
                <h4 className="title">Basic Plan</h4>
                <span className="price-count">5 Services Included</span>
                <span className="price">0.0</span>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn style-two">
                    Choose Package <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <br />
                <h5>This Plan Included :</h5>
                <ul>
                  <li>
                    <a href="#">Quality Supports</a>
                  </li>
                  <li>
                    <a href="#">IT Consultations</a>
                  </li>
                  <li>
                    <a href="#">Product Design</a>
                  </li>
                  <li>
                    <a href="#">Search Engine (SEO )</a>
                  </li>
                  <li>
                    <a href="#">Market Research</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-2s">
                <h4 className="title">Standard Plan</h4>
                <span className="price-count">7 Services Included</span>
                <span className="price">19.5</span>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn style-two">
                    Choose Package <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <br />
                <h5>This Plan Included :</h5>
                <ul>
                  <li>
                    <a href="#">Quality Supports</a>
                  </li>
                  <li>
                    <a href="#">IT Consultations</a>
                  </li>
                  <li>
                    <a href="#">Product Design</a>
                  </li>
                  <li>
                    <a href="#">Search Engine (SEO )</a>
                  </li>
                  <li>
                    <a href="#">Market Research</a>
                  </li>
                  <li>
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <a href="#">Mobile Applications</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-2s">
                <h4 className="title">silver Plan</h4>
                <span className="price-count">7 Services Included</span>
                <span className="price">48.6</span>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn style-two">
                    Choose Package <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <br />
                <h5>This Plan Included :</h5>
                <ul>
                  <li>
                    <a href="#">Quality Supports</a>
                  </li>
                  <li>
                    <a href="#">IT Consultations</a>
                  </li>
                  <li>
                    <a href="#">Product Design</a>
                  </li>
                  <li>
                    <a href="#">Search Engine (SEO )</a>
                  </li>
                  <li>
                    <a href="#">Market Research</a>
                  </li>
                  <li>
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <a href="#">Mobile Applications</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-2s">
                <h4 className="title">golden Plan</h4>
                <span className="price-count">7 Services Included</span>
                <span className="price">99.3</span>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn style-two">
                    Choose Package <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <br />
                <h5>This Plan Included :</h5>
                <ul>
                  <li>
                    <a href="#">Quality Supports</a>
                  </li>
                  <li>
                    <a href="#">IT Consultations</a>
                  </li>
                  <li>
                    <a href="#">Product Design</a>
                  </li>
                  <li>
                    <a href="#">Search Engine (SEO )</a>
                  </li>
                  <li>
                    <a href="#">Market Research</a>
                  </li>
                  <li>
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <a href="#">Mobile Applications</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Pricing;
