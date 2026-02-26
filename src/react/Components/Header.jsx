import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";
import BroucherPdfForm from "./BroucherPdfForm";
import Button from "./Button";
import WinnerButton from "./winnerButton";
import GalleryButton from "./GalleryButton";
import FlipBanner from "./FlipBanner";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCookiesConsent, setShowCookiesConsent] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
  const [isDropdownOpen5, setIsDropdownOpen5] = useState(false);
  const [isDropdownOpen6, setIsDropdownOpen6] = useState(false);
  const [show, setShow] = useState(false);
  const [downloadLink, setDownloadLink] = useState("");

  const navigate = useNavigate();

  const handleShow = () => {
    setShow(true);
    navigate("?showForm=true"); // Update the URL
  };
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("showForm") === "true") {
      setShow(true);
    }
  }, [location.search]);

  const handleClose = () => setShow(false);

  const handleFormSubmit = () => {
    // Set the PDF link after form submission and countdown

    setDownloadLink("../broucher/Brit-Fintech-Awards-2026-Sponsorship-Proposal.pdf  ");
  };

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (cookiesAccepted) {
      setShowCookiesConsent(false);
    }

    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleNavLinkClick2 = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowCookiesConsent(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggles the dropdown open/close state
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2); // Toggles the dropdown open/close state
  };

  const toggleDropdown3 = () => {
    setIsDropdownOpen3(!isDropdownOpen3); // Toggles the dropdown open/close state
  };
  const toggleDropdown4 = () => {
    setIsDropdownOpen4(!isDropdownOpen4); // Toggles the dropdown open/close state
  };
  const toggleDropdown5 = () => {
    setIsDropdownOpen5(!isDropdownOpen5); // Toggles the dropdown open/close state
  };
  const toggleDropdown6 = () => {
    setIsDropdownOpen6(!isDropdownOpen6); // Toggles the dropdown open/close state
  };

  return (
    <div>
      <style>{`
      .curosor-pointer{
      cursor: pointer;  
      }

       .#comment, #author, #email {
        padding: 0px !important;
        }

      .modal-footer {
 
    background:  #e2ebff;
   
}
    .btn-secondary{
    background: #c8102e !important;
    }

    .btn-check:focus+.btn-secondary, .btn-secondary:focus{
box-shadow: none;
}

/* Apply Poppins font to Header */
.cs-site_header, .cs-site_header .nav-link, .cs-site_header span, .cs-site_header a {
  font-family: 'Poppins', sans-serif !important;
}

          
      `}</style>

      <header
        className={`cs-site_header cs-style1 cs-sticky-header cs-primary_font ${
          isSticky ? "sticky" : ""
        }`}
      >
        {/* <FlipBanner/> */}
        <div className="cs-main_header mt-1">
          <div className="container">
            <div className="cs-main_header_in">
              <div className="cs-main_header_left">
                <NavLink to="/">
                  <img
                    src={
                      isSticky
                        ? "../assets/img/logo-white.svg"
                        : "../assets/img/logo-white.svg"
                    }
                    style={{ height: "80px" }}
                    alt="Logo"
                  />
                </NavLink>

                <div className={`cs-nav ms-5 ${isMenuOpen ? "open" : ""}`}>
                  <ul className={`cs-nav_list ms-5`}>
                    <li id={splitLocation[1] === "about" ? "active" : ""}>
                      <NavLink
                        className={`nav-link ${
                          isSticky ? "text-white-navlink" : "text-dark"
                        }`}
                        to="/about#about"
                        onClick={handleNavLinkClick}
                      >
                        About BFA
                      </NavLink>
                    </li>
                    <li id={splitLocation[1] === "" ? "" : ""}>
                      <a
                        className={`nav-link ${
                          isSticky ? "text-white-navlink" : "text-dark"
                        }`}
                        style={{ cursor: "pointer" }}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleDropdown();
                        }}
                      >
                        Sponsors
                        <FontAwesomeIcon
                          className="ms-2"
                          style={{ fontSize: "10px" }}
                          icon={faChevronDown}
                        />
                      </a>
                      <ul
                        className={`dropdown-menu ${
                          isDropdownOpen ? "show" : ""
                        }`}
                      >
                        <li id={splitLocation[2] === "form" ? "active" : ""}>
                          <NavLink
                            className={`nav-link ${
                              isSticky ? "" : "text-dark"
                            }`}
                            to="/sponsorship-categories#sponsorship-categories"
                            onClick={handleNavLinkClick}
                            style={{ color: "#333", fontWeight: "600" }}
                          >
                            Sponsorship Categories
                          </NavLink>
                        </li>
                        <li
                          id={
                            splitLocation[2] === "sponsorship" ? "active" : ""
                          }
                        >
                          <NavLink
                            className={`nav-link ${
                              isSticky ? "" : "text-dark"
                            }`}
                            to="/our-sponsors#our-sponsors"
                            style={{ color: "#333", fontWeight: "600" }}
                            onClick={handleNavLinkClick}
                          >
                            Our Sponsors
                          </NavLink>
                        </li>
                      </ul>
                    </li>

                    <li id={splitLocation[1] === "" ? "" : ""}>
                      <a
                        className={`nav-link ${
                          isSticky ? "text-white-navlink" : "text-dark"
                        }`}
                        to=""
                        style={{ cursor: "pointer" }}
                        onClick={toggleDropdown2}
                      >
                        Awards
                        <FontAwesomeIcon
                          className="ms-2"
                          style={{ fontSize: "10px" }}
                          icon={faChevronDown}
                        />
                      </a>
                      <ul
                        className={`dropdown-menu ${
                          isDropdownOpen2 ? "show" : ""
                        }`}
                      >
                        <li
                          id={
                            splitLocation[2] === "sponsorship" ? "active" : ""
                          }
                        >
                          <NavLink
                            className={`nav-link ${
                              isSticky ? "" : "text-dark"
                            }`}
                            to="/awards-category"
                            style={{ color: "#333", fontWeight: "600" }}
                            onClick={handleNavLinkClick}
                          >
                            Award Category
                          </NavLink>
                        </li>
                        <li>
                          <div className="d-flex w-100 align-items-center justify-content-between">
                            <div>
                              <a
                                className="nav-link"
                                // to="/sponsorship-categories"
                                onClick={toggleDropdown4}
                                style={{ color: "#333", fontWeight: "600" }}
                              >
                                Award Winners
                              </a>
                            </div>
                            <div>
                              <FontAwesomeIcon
                                className="ms-2"
                                style={{ fontSize: "10px" }}
                                icon={faChevronRight}
                              />
                            </div>
                          </div>

                          <ul
                            className={`dropdown-menu   sm-relative ${
                              isDropdownOpen4 ? "show" : ""
                            }`}
                          >
                            <li id={splitLocation[2] === "" ? "active" : ""}>
                              <NavLink
                                className={`nav-link  ${
                                  isSticky ? "" : "text-dark"
                                }`}
                                to="/award-winners-2025"
                                style={{ color: "#333", fontWeight: "600" }}
                                onClick={handleNavLinkClick}
                              >
                                Winners 2025
                              </NavLink>
                            </li>
                            <li id={splitLocation[2] === "" ? "active" : ""}>
                              <NavLink
                                className={`nav-link  ${
                                  isSticky ? "" : "text-dark"
                                }`}
                                to="/award-winners-2024"
                                style={{ color: "#333", fontWeight: "600" }}
                                onClick={handleNavLinkClick}
                              >
                                Winners 2024
                              </NavLink>
                            </li>
                            {/* <li id={splitLocation[2] === "form" ? "active" : ""}>
                          <NavLink
                            className={`nav-link ${
                              isSticky ? "" : "text-dark"
                            }`}
                            to="/sponsorship-categories"
                            onClick={handleNavLinkClick}
                            style={{ color: "#333", fontWeight: "600" }}
                          >
                           Awards Winner
                          </NavLink>
                        </li> */}
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li id={splitLocation[1] === "" ? "" : ""}>
                      <a
                        className={`nav-link ${
                          isSticky ? "text-white-navlink" : "text-dark"
                        }`}
                        to=""
                        style={{ cursor: "pointer" }}
                        onClick={toggleDropdown3}
                      >
                        Gallery
                        <FontAwesomeIcon
                          className="ms-2"
                          style={{ fontSize: "10px" }}
                          icon={faChevronDown}
                        />
                      </a>
                      <ul
                        className={` dropdown-menu ${
                          isDropdownOpen3 ? "show" : ""
                        }`}
                      >
                        {/* <li
                          id={
                            splitLocation[2] === "sponsorship" ? "active" : ""
                          }
                        >
                          <NavLink
                            className={`nav-link ${
                              isSticky ? "" : "text-dark"
                            }`}
                            to="/photo-gallery-2024"
                            style={{ color: "#333", fontWeight: "600" }}
                            onClick={handleNavLinkClick}
                          >
                        Photo Gallery
                          </NavLink>
                          
                        </li> */}
                        <li>
                          <div className="d-flex w-100 align-items-center justify-content-between">
                            <div>
                              <a
                                className="nav-link"
                                // to="/sponsorship-categories"
                                onClick={toggleDropdown5}
                                style={{ color: "#333", fontWeight: "600" }}
                              >
                                Photo Gallery
                              </a>
                            </div>
                            <div>
                              <FontAwesomeIcon
                                className="ms-2"
                                style={{ fontSize: "10px" }}
                                icon={faChevronRight}
                              />
                            </div>
                          </div>

                          <ul
                            className={` sm-relative dropdown-menu ${
                              isDropdownOpen5 ? "show" : ""
                            }`}
                          >
                            <li id={splitLocation[2] === "" ? "" : ""}>
                              <NavLink
                                className={`nav-link  ${
                                  isSticky ? "" : "text-dark"
                                }`}
                                to="/photo-gallery-2025"
                                style={{ color: "#333", fontWeight: "600" }}
                                onClick={handleNavLinkClick}
                              >
                                Photos 2025
                              </NavLink>
                            </li>
                            <li id={splitLocation[2] === "" ? "" : ""}>
                              <NavLink
                                className={`nav-link  ${
                                  isSticky ? "" : "text-dark"
                                }`}
                                to="/photo-gallery-2024"
                                style={{ color: "#333", fontWeight: "600" }}
                                onClick={handleNavLinkClick}
                              >
                                Photos 2024
                              </NavLink>
                            </li>
                            {/* <li id={splitLocation[2] === "form" ? "active" : ""}>
                          <NavLink
                            className={`nav-link ${
                              isSticky ? "" : "text-dark"
                            }`}
                            to="/sponsorship-categories"
                            onClick={handleNavLinkClick}
                            style={{ color: "#333", fontWeight: "600" }}
                          >
                           Awards Winner
                          </NavLink>
                        </li> */}
                          </ul>
                        </li>
                        <li>
                          <div className="d-flex w-100 align-items-center justify-content-between">
                            <div>
                              <a
                                className="nav-link"
                                // to="/sponsorship-categories"
                                onClick={toggleDropdown6}
                                style={{ color: "#333", fontWeight: "600" }}
                              >
                                Video Gallery
                              </a>
                            </div>
                            <div>
                              <FontAwesomeIcon
                                className="ms-2"
                                style={{ fontSize: "10px" }}
                                icon={faChevronRight}
                              />
                            </div>
                          </div>

                          <ul
                            className={` sm-relative dropdown-menu ${
                              isDropdownOpen6 ? "show" : ""
                            }`}
                          >
                            <li id={splitLocation[2] === "" ? "active" : ""}>
                              <NavLink
                                className={`nav-link ${
                                  isSticky ? "" : "text-dark"
                                }`}
                                to="/video-gallery-2025"
                                style={{ color: "#333", fontWeight: "600" }}
                                onClick={handleNavLinkClick}
                              >
                                Videos 2025
                              </NavLink>
                            </li>
                            <li id={splitLocation[2] === "" ? "active" : ""}>
                              <NavLink
                                className={`nav-link ${
                                  isSticky ? "" : "text-dark"
                                }`}
                                to="/video-gallery-2024"
                                style={{ color: "#333", fontWeight: "600" }}
                                onClick={handleNavLinkClick}
                              >
                                Videos 2024
                              </NavLink>
                            </li>
                            {/* <li id={splitLocation[2] === "form" ? "active" : ""}>
                          <NavLink
                            className={`nav-link ${
                              isSticky ? "" : "text-dark"
                            }`}
                            to="/sponsorship-categories"
                            onClick={handleNavLinkClick}
                            style={{ color: "#333", fontWeight: "600" }}
                          >
                           Awards Winner
                          </NavLink>
                        </li> */}
                          </ul>
                        </li>
                      </ul>
                    </li>

                    {/* <li
                      id={splitLocation[1] === "how-to-enter" ? "active" : ""}
                    >
                      <NavLink
                        className={`nav-link ${
                          isSticky ? "text-white-navlink" : "text-dark"
                        }`}
                        to="/how-to-enter"
                        onClick={handleNavLinkClick}
                      >
                        How To Enter
                      </NavLink>
                    </li> */}
                    {/* <li id={splitLocation[1] === "judges" ? "active" : ""}>
                      <NavLink
                        className={`nav-link ${
                          isSticky ? "text-white-navlink" : "text-dark"
                        }`}
                        to="/judges"
                        onClick={handleNavLinkClick}
                      >
                        Judges
                      </NavLink>
                    </li> */}

                    <li id={splitLocation[1] === "contact" ? "active" : ""}>
                      <NavLink
                        className={`nav-link ${
                          isSticky ? "text-white-navlink" : "text-dark"
                        }`}
                        to="/contact#contact"
                        onClick={handleNavLinkClick}
                      >
                        Contact Us
                      </NavLink>
                    </li>
                    <li>
                      {/* <NavLink
                        className={`nav-link d-none-sm curosor-pointer ${isSticky ? "text-white-navlink" : ""}`}
                        onClick={handleShow}
                    
                    >
                      <span className="cs-btn_text d-none-sm cs-btn cs-style6 cs-rounded text-uppercase cs-medium cs-accent_border cs-accent_bg cs-white cs-accent_10_bg_hover cs-accent_40_border_hover cs-accent_color_hover text-center p-2">
                      <i className="fas fa-file-pdf " /><span className="ms-1">Download Brochure</span>
                      </span>

                      onClick={handleShow}
                     
                    </NavLink> */}
                    <div className="d-grid justify-content-start  align-items-center ps-3">

                       <span className="d-none-sm mb-3 mt-4 " onClick={handleNavLinkClick}>
                       <a className="btn-pro-1 " onClick={handleShow}>
                    {/* <i className="fas fa-file-pdf"></i> */}
                    <span>Download Brochure</span>
                  </a>
                      </span>
                      {/* Ticket Booking to Winnner  */}
                      <span className="d-none-sm" onClick={handleNavLinkClick}>
                       <NavLink
                    to="/sponsorship-categories#next_section"
                    className={`btn-pro-2 text-center`}
                  >
                    <span style={{ color: "#fff" }}> Sponsor Now</span>
                  </NavLink>
                      </span>

                    </div>

                     

                      {/* <NavLink
                        className={`nav-link d-none-sm ${isSticky ? "text-white-navlink" : ""}`}
                        to="/register-now"
                        onClick={handleNavLinkClick}
                      >
                        <span className="cs-btn_text d-none-sm cs-btn cs-style6 cs-rounded text-uppercase cs-medium cs-accent_border cs-accent_bg cs-white cs-accent_10_bg_hover cs-accent_40_border_hover cs-accent_color_hover text-center p-2">
                          Register For Awards
                        </span>
                      </NavLink> */}
                    </li>
                    {isMenuOpen && (
                      <li className="cs-close_icon">
                        <FontAwesomeIcon icon={faTimes} onClick={toggleMenu} />
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              <div className="cs-main_header_right">
                <div className="cs-toolbox">
                  <a className="btn-pro-1 " onClick={handleShow}>
                    {/* <i className="fas fa-file-pdf"></i> */}
                    <span>Download Brochure</span>
                  </a>

                  {/* <GalleryButton /> */}

                  {/* <div>
                    <Button />
                  </div> */}

                  <NavLink
                    to="/sponsorship-categories#next_section"
                    className={`btn-pro-2`}
                  >
                    <span style={{ color: "#fff" }}> Sponsor Now</span>
                  </NavLink>
                </div>
              </div>
              <div className="cs-hamburger_menu" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* {showCookiesConsent && (
        <div className="wrapper">
          <img src="../assets/img/cookies.png" alt="cookies consent" />
          <div className="content">
            <header>Cookies Consent</header>
            <p>
              We use cookies to improve your browsing experience and for
              marketing purposes.
            </p>
            <div className="buttons">
              <button className="item" onClick={acceptCookies}>
                I understand
              </button>
              <NavLink to="/privacy-policy" className="item">
                Privacy Policy
              </NavLink>
            </div>
          </div>
        </div>
      )} */}

      {/* Modal Popup */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <h5 className="mt-2 mb-0 pb-0" style={{color:"#000 !important"}}>
            Fill in the details below to download the Sponsorship Brochure.
          </h5>
        </Modal.Header>
        <Modal.Body>
          <BroucherPdfForm onFormSubmit={handleFormSubmit} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Header;
