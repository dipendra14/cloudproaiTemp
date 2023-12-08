import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

import { Fragment } from "react";

const Menu = () => {
  return (
    <Fragment>
      <DeskTopMenu />
      <MobileMenu />
    </Fragment>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeSubMenu = (value) =>
      value == activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu navbar-expand-lg mobile-menu">
      <Accordion>
        <div className="navbar-header">
          <div className="mobile-logo">
            <Link href="/">
              <img
                src="assets/images/logos/logo-one.png"
                alt="Logo"
                title="Logo"
              />
            </Link>
          </div>
          {/* Toggle Button */}
          <Accordion.Toggle
            as={"button"}
            type="button"
            className="navbar-toggle"
            eventKey="collapse"
            data-bs-target=".navbar-collapse"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey="collapse"
          className="navbar-collapse clearfix"
        >
          <ul className="navigation clearfix">
            <li className="dropdown">
              <a href="#" onClick={() => active("home")}>
                
              </a>
              <ul style={activeSubMenu("home")}>
                <li>
                  <Link href="/">IT Company</Link>
                </li>
                <li>
                  <Link href="index2">IT Solutions</Link>
                </li>
                <li>
                  <Link href="index3">IT Services</Link>
                </li>
                <li>
                  <Link href="index4">IT Agency</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("home")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>
            <li className="dropdown">
              <a href="#" onClick={() => active("services")}>
                Services
              </a>
              <ul style={activeSubMenu("services")}>
                <li>
                  <Link href="services">Generative AI and ML</Link>
                </li>
                <li>
                  <Link href="services2">Cloud Engineering</Link>
                </li>
                <li>
                  <Link href="service-details">Data Engineering</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("services")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>
            <li className="dropdown">
              <a href="#" onClick={() => active("Project")}>
                Project
              </a>
              <ul style={activeSubMenu("Project")}>
                <li>
                  <Link href="project-grid">Project Grid</Link>
                </li>
                <li>
                  <Link href="project-masonry">Project Masonry.</Link>
                </li>
                <li>
                  <Link href="project-details">Project Details</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("Project")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>
            <li className="dropdown">
              <a href="#" onClick={() => active("shop")}>
                shop
              </a>
              <ul style={activeSubMenu("shop")}>
                <li>
                  <Link href="shop">shop grid</Link>
                </li>
                <li>
                  <Link href="product-details">product details</Link>
                </li>
                <li>
                  <Link href="cart">cart page</Link>
                </li>
                <li>
                  <Link href="checkout">checkout</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("shop")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>
            <li className="dropdown">
              <a href="#" onClick={() => active("blog")}>
                blog
              </a>
              <ul style={activeSubMenu("blog")}>
                <li>
                  <Link href="blog">blog standard</Link>
                </li>
                <li>
                  <Link href="blog-details">blog details</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("blog")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>
            <li className="dropdown">
              <a href="#" onClick={() => active("pages")}>
                pages
              </a>
              <ul style={activeSubMenu("pages")}>
                <li>
                  <Link href="about">About us</Link>
                </li>
                <li>
                  <Link href="contact">Contact us</Link>
                </li>
                <li>
                  <Link href="team">Team</Link>
                </li>
                <li>
                  <Link href="faqs">faqs</Link>
                </li>
                <li>
                  <Link href="pricing">Pricing Plan</Link>
                </li>
                <li>
                  <Link href="404">404 error</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("pages")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>
          </ul>
        </Accordion.Collapse>
      </Accordion>
    </nav>
  );
};
const DeskTopMenu = () => {
  const router = useRouter();

  const handleRoute = () => {
    router.push("/services/cloudengineering");
  };
  return (
    <nav className="main-menu navbar-expand-lg desktop-menu">
      <div className="navbar-header">
        <div className="mobile-logo">
          <Link href="/">
            <img
              src="assets/images/logos/logo-one.png"
              alt="Logo"
              title="Logo"
            />
          </Link>
        </div>
        {/* Toggle Button */}
        <button
          type="button"
          className="navbar-toggle"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
      <div className="navbar-collapse collapse clearfix">
        <ul className="navigation clearfix">
          <li>
            <a href="/">CLOUD PRO AI</a>

            {/* <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div> */}
          </li>
          <li className="dropdown">
            <a href="/services">SERVICES</a>
            <ul>
              <li>
                <Link href="/services/generativeaiandml">
                  GENERATIVE AI AND ML
                </Link>
              </li>
              <li>
                <Link href="/services/cloudengineering">CLOUD ENGINEERING</Link>
              </li>
              <li>
                <Link href="/services/dataengineering">DATA ENGINEERING</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>
          <li className="dropdown">
            <a href="/industries">INDUSTRIES</a>
            <ul>
              <li>
                <Link href="/industries/financial">FINANCIAL</Link>
              </li>
              <li>
                <Link href="/industries/legal">LEGAL</Link>
              </li>
              <li>
                <Link href="/industries/eduvation">EDUCATION</Link>
              </li>
              <li>
                <Link href="industries/healthcare">HEALTHCARE </Link>
              </li>
              <li>
                <Link href="industries/manufacturing">MANUFACTURING</Link>
              </li>
              <li>
                <Link href="industries/technology">TECHNOLOGY</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>
          <li className="dropdown">
            <a href="contact">Contact</a>
            {/* <Link href="contact">CONTACT US</Link> */}
            {/* <ul>
              <li>
                <Link href="shop">COMPLETED PROJECTS</Link>
              </li>
              <li>
                <Link href="product-details">CURRENT PROJECTS</Link>
              </li>
              <li>
                <Link href="cart">FUTURE PROJECTS</Link>
              </li>
            </ul> */}
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>
          <li className="dropdown">
            <a href="about">ABOUT US</a>
            <ul>
              <li>
                <Link href="about">ABOUT US</Link>
              </li>
              <li>
                <Link href="index2">OUR TEAM</Link>
              </li>
              <li>
                <Link href="index3">CAREERS</Link>
              </li>
              <li>
                <Link href="contact">CONTACT US</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>
          {/* <li className="dropdown">
            <a href="#">PARTNERSHIP</a>
            <ul>
              <li>
                <Link href="#">About us</Link>
              </li>
              <li>
                <Link href="contact">Contact us</Link>
              </li>
              <li>
                <Link href="team">Team</Link>
              </li>
              <li>
                <Link href="faqs">faqs</Link>
              </li>
              <li>
                <Link href="pricing">Pricing Plan</Link>
              </li>
              <li>
                <Link href="404">404 error</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};
export default Menu;
