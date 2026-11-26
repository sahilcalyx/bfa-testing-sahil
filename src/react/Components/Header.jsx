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
  const themeLab =
    pathname === "/theme-prototype-2027" ||
    pathname === "/theme-prototype-2027-part2" ||
    pathname === "/theme-prototype-2027-part3";

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

    setDownloadLink(
      "../broucher/Brit-Fintech-Awards-2026-Sponsorship-Proposal.pdf  ",
    );
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

.cs-site_header .btn-pro-1,
.cs-site_header .btn-pro-1.active,
.cs-site_header .btn-pro-1.active span {
  color: #fff !important;
}

@media (min-width: 1200px) {
  .cs-site_header.cs-style1 .cs-main_header_left {
    flex: 1 1 auto;
  }
  .cs-site_header.cs-style1 .cs-main_header_left .cs-nav {
    margin-left: auto !important;
    margin-right: 28px;
  }
  .cs-site_header.cs-style1 .cs-main_header_left .cs-nav_list {
    margin-left: 0 !important;
  }
}

.cs-site_header.bfa-theme-header.cs-sticky-header,
.cs-site_header.bfa-theme-header.cs-style1.cs-sticky-active {
  background: linear-gradient(90deg, var(--bfa-navy, #0e103d) 0%, var(--bfa-navy, #0e103d) 34%, var(--bfa-navy-deep, #090a11) 100%) !important;
  border-bottom: 1px solid rgba(var(--bfa-gold-mid-rgb, 224, 180, 90), 0.45);
  box-shadow: 0 12px 28px rgba(var(--bfa-navy-deep-rgb, 9, 10, 17), 0.35);
}

.bfa-theme-header .cs-main_header_left > a {
  display: inline-block;
  width: 80px;
  height: 80px;
  background: linear-gradient(165deg, var(--bfa-gold-light, #faf5a9) 0%, var(--bfa-gold-mid, #e0b45a) 46%, var(--bfa-gold-deep, #9a6929) 100%);
  -webkit-mask: url("/assets/img/logo-white.svg") center / contain no-repeat;
  mask: url("/assets/img/logo-white.svg") center / contain no-repeat;
}
.bfa-theme-header .cs-main_header_left > a img {
  opacity: 0;
  height: 80px;
  width: 80px;
  filter: none;
}

.bfa-theme-header .cs-hamburger_menu {
  color: var(--bfa-gold-light, #faf5a9);
}

@media (min-width: 1139px) {
  .bfa-theme-header .cs-nav .cs-nav_list > li > a,
  .bfa-theme-header .cs-nav .cs-nav_list > li > a.nav-link,
  .bfa-theme-header .cs-nav .cs-nav_list > li > a.text-white-navlink,
  .bfa-theme-header .cs-nav .cs-nav_list > li > a.text-dark,
  .bfa-theme-header .cs-nav .cs-nav_list > li > a.active {
    background-image: linear-gradient(90deg, var(--bfa-gold-pale, #fffceb) 0%, var(--bfa-gold-light, #faf5a9) 40%, var(--bfa-gold-mid, #e0b45a) 100%) !important;
    -webkit-background-clip: text !important;
    background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    color: transparent !important;
  }
  .bfa-theme-header .cs-nav .cs-nav_list > li > a:hover {
    background-image: linear-gradient(90deg, var(--bfa-gold-pale, #fffceb) 0%, var(--bfa-gold-light, #faf5a9) 100%) !important;
    -webkit-text-fill-color: transparent !important;
    color: transparent !important;
  }
}

@media (max-width: 1138px) {
  .bfa-theme-header .cs-nav .cs-nav_list > li > a,
  .bfa-theme-header .cs-nav .cs-nav_list > li > a.nav-link,
  .bfa-theme-header .cs-nav .cs-nav_list > li > a.active {
    color: var(--bfa-navy, #0e103d) !important;
  }
  .bfa-theme-header .cs-close_icon {
    color: var(--bfa-navy, #0e103d);
  }
}

.bfa-theme-header .btn-pro-1,
.bfa-theme-header .btn-pro-1.active,
.bfa-theme-header .btn-pro-1 span,
.bfa-theme-header .btn-pro-1.active span {
  color: var(--bfa-navy-deep, #090a11) !important;
}
.bfa-theme-header .btn-pro-1,
.bfa-theme-header .btn-pro-1.active {
  background: linear-gradient(135deg, var(--bfa-gold-light, #faf5a9) 0%, var(--bfa-gold-mid, #e0b45a) 46%, var(--bfa-gold-deep, #9a6929) 100%);
  box-shadow: 0 8px 18px rgba(var(--bfa-gold-deep-rgb, 154, 105, 41), 0.35);
}
.bfa-theme-header .btn-pro-1:hover,
.bfa-theme-header .btn-pro-1:hover span {
  color: var(--bfa-navy-deep, #090a11) !important;
}
.bfa-theme-header .btn-pro-1:hover {
  background: linear-gradient(135deg, var(--bfa-gold-pale, #fffceb) 0%, var(--bfa-gold-light, #faf5a9) 40%, var(--bfa-gold-warm, #c9953a) 100%);
  box-shadow: 0 12px 26px rgba(var(--bfa-gold-deep-rgb, 154, 105, 41), 0.4), 0 0 18px rgba(var(--bfa-gold-light-rgb, 250, 245, 169), 0.35);
}
.bfa-theme-header .btn-pro-2,
.bfa-theme-header .btn-pro-2.active,
.bfa-theme-header .btn-pro-2 span,
.bfa-theme-header .btn-pro-2.active span {
  color: var(--bfa-navy-deep, #090a11) !important;
}
.bfa-theme-header .btn-pro-2,
.bfa-theme-header .btn-pro-2.active {
  background: linear-gradient(135deg, var(--bfa-gold-deep, #9a6929) 0%, var(--bfa-gold-mid, #e0b45a) 52%, var(--bfa-gold-light, #faf5a9) 100%);
  box-shadow: 0 8px 18px rgba(var(--bfa-gold-deep-rgb, 154, 105, 41), 0.35);
}
.bfa-theme-header .btn-pro-2:hover,
.bfa-theme-header .btn-pro-2:hover span {
  color: var(--bfa-navy-deep, #090a11) !important;
}
.bfa-theme-header .btn-pro-2:hover {
  background: linear-gradient(135deg, var(--bfa-gold-warm, #c9953a) 0%, var(--bfa-gold-light, #faf5a9) 55%, var(--bfa-gold-pale, #fffceb) 100%);
  box-shadow: 0 12px 26px rgba(var(--bfa-gold-deep-rgb, 154, 105, 41), 0.4), 0 0 18px rgba(var(--bfa-gold-light-rgb, 250, 245, 169), 0.3);
}

          
      `}</style>

      <header
        className={`cs-site_header cs-style1 cs-sticky-header cs-primary_font ${
          themeLab ? "bfa-theme-header" : ""
        } ${isSticky ? "sticky" : ""}`}
      >
        {/* <FlipBanner/> */}
        <div className="cs-main_header mt-1">
          <div className="container">
            <div className="cs-main_header_in">
              <div className="cs-main_header_left">
                <NavLink to="/">
                  <img
                    src="../assets/img/logo-white.svg"
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
                                to="/award-winners-2026"
                                style={{ color: "#333", fontWeight: "600" }}
                                onClick={handleNavLinkClick}
                              >
                                Winners 2026
                              </NavLink>
                            </li>
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
                                to="/photo-gallery-2026"
                                style={{ color: "#333", fontWeight: "600" }}
                                onClick={handleNavLinkClick}
                              >
                                Photos 2026
                              </NavLink>
                            </li>
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
                                to="/video-gallery-2026"
                                style={{ color: "#333", fontWeight: "600" }}
                                onClick={handleNavLinkClick}
                              >
                                Videos 2026
                              </NavLink>
                            </li>
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
                        {/* <span
                          className="d-none-sm mb-3 mt-4 "
                          onClick={handleNavLinkClick}
                        >
                          <a className="btn-pro-1 " onClick={handleShow}>
                            <span>Download Brochure</span>
                          </a>
                        </span> */}
                        <span
                          className="d-none-sm mb-3 mt-4 "
                          onClick={handleNavLinkClick}
                        >
                          <div className="d-flex flex-column align-items-start gap-3">
                            <NavLink to="/award-winners-2026" className="btn-pro-1">
                              <span>Winners 2026</span>
                            </NavLink>
                            <NavLink to="/photo-gallery-2026" className="btn-pro-2">
                              <span>Gallery 2026</span>
                            </NavLink>
                          </div>
                          {/* <NavLink to="/sponsorship-categories#sponsorship-categories" className="btn-pro-1">
                            <span>Sponsor Now</span>
                          </NavLink> */}
                        </span>
                        {/* Ticket Booking to Winnner  */}
                        <span
                          className="d-none-sm"
                          onClick={handleNavLinkClick}
                        >
                          {/* <NavLink
                            to="/ticket-booking"
                            className={`btn-pro-2 text-center`}
                          >
                            <span style={{ color: "#fff" }}>House Full</span>
                          </NavLink> */}
                          {/* <NavLink
                            to="/sponsorship-categories#next_section"
                            className={`btn-pro-2 text-center`}
                          >
                            <span style={{ color: "#fff" }}> Book Tickets Now</span>
                          </NavLink> */}
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
                  {/* <a className="btn-pro-1 " onClick={handleShow}>
                    <span>Download Brochure</span>
                  </a> */}

                  <NavLink to="/award-winners-2026" className="btn-pro-1">
                    <span>Winners 2026</span>
                  </NavLink>
                  <NavLink to="/photo-gallery-2026" className="btn-pro-2 ">
                    <span>Gallery 2026</span>
                  </NavLink>

                  {/* <GalleryButton /> */}

                  {/* <div>
                    <Button />
                  </div> */}

                  {/* <NavLink
                    to="/ticket-booking"
                    className={`btn-pro-2`}
                  >
                    <span style={{ color: "#fff" }}> House Full</span>
                  </NavLink> */}
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
          <h5 className="mt-2 mb-0 pb-0" style={{ color: "#000 !important" }}>
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
