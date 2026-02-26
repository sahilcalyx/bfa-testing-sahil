import { ArrowBack } from "@mui/icons-material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import BfaChatBot from "./BfaChatBot";
import ScrollToTopButton from "./ScrollToTopButton";
import CookieConsent from "./SliderBigBan/CookieConsent";

const Footer = () => {
  return (
    <div>
      <footer className="cs-footer cs-style3 cs-bg">
        <CookieConsent />
        <div className="cs-footer_bg " />
        <div className="w-100 container">
          {/* <div className="cs-height_65  cs-height_lg_75" /> */}
          <div className="row ">
            <div className="col-lg-12 col-md-6  mt-4 p-3">
              <div className="cs-footer_item cs-text_widgert">
                <div className="cs-text_widgert_content text-center">
                  <img
                    src="../assets/img/logo-white.svg"
                    style={{ width: "90px" }}
                    alt="Logo"
                  />
                </div>
                <p
                  className="text-center p-3"
                  style={{ fontWeight: "600", color: "#fff" }}
                >
                  The Brit FinTech Awards is a premier recognition platform for
                  initiatives shaping the future of finance.
                </p>
              </div>
            </div>
            {/* .col */}

            {/* .col */}
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="cs-footer_item widget_nav_menu">
                <h2 className="cs-widget_title text-white">Quick Links</h2>
                <ul className="menu text-white">
                  <li>
                    {" "}
                    <NavLink to="/sponsorship-categories">
                      Sponsors
                    </NavLink>{" "}
                  </li>

                  <li>
                    {" "}
                    <NavLink to="/sponsorship-categories">
                      Book Your Tickets Now
                    </NavLink>{" "}
                  </li>
                  <li>
                    {" "}
                    <NavLink to="/nominate-now">
                      Nominate for the Awards
                    </NavLink>{" "}
                  </li>

                  <li>
                    {" "}
                    <NavLink to="/registerfor-startup-pitch">
                      Register For Startup Pitch
                    </NavLink>{" "}
                  </li>
                  <li>
                    {" "}
                    <NavLink to="/awards-category">Awards</NavLink>{" "}
                  </li>
                  <li>
                    {" "}
                    <NavLink to="/blogs">Blogs</NavLink>{" "}
                  </li>
                  {/* <li>
                    <NavLink to="/how-to-enter">How To Enter</NavLink>
                  </li> */}
                  <li>
                    <NavLink to="/judges">Judges </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            {/* .col */}
            <div className="col-lg-3 col-md-6">
              <div className="cs-footer_item widget_nav_menu">
                <h2 className="cs-widget_title text-white">Legal Links</h2>
                <ul className="menu text-white">
                  <li>
                    <NavLink to="/privacy-policy">Privacy policy</NavLink>
                  </li>
                  <li>
                    <NavLink to="/terms-and-conditions">
                      Terms and Conditions
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="cs-footer_item widget_nav_menu">
                <h2 className="cs-widget_title text-white">Help</h2>
                <ul className="menu text-white">
                  <li>
                    <NavLink to="/about">About BFA</NavLink>{" "}
                  </li>
                  <li>
                    {" "}
                    <NavLink to="/contact">Contact Us</NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink to="/faqs">FAQs</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            {/* .col */}
            <div className="col-lg-3 col-md-6">
              <div className="cs-footer_item cs-address_widgert">
                <h2 className="cs-widget_title ">Contact Us</h2>
                <ScrollToTopButton />
                <div className="cs-footer_item cs-address_widgert">
                  <ul className="text-white">
                    <li>
                      <i className="far fa-envelope-open" />
                      <NavLink to="mailto:kudos@britfintechawards.com">
                        kudos@britfintechawards.com
                      </NavLink>
                    </li>
                    <li>
                      <i className="far fa-address-book" />
                      <NavLink to="tel:442038283277">+44 20 3828 3277</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cs-footer_item">
                <h2 className="cs-widget_title mb-2">Social Media</h2>
                <div className="cs-social_btns cs-style1">
                  <NavLink
                    to="https://www.facebook.com/profile.php?id=61562935702047"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f" />
                  </NavLink>

                  <NavLink
                    to="https://www.instagram.com/britfintechawards?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                  >
                    <i className="fab fa-instagram" />
                  </NavLink>
                  <NavLink
                    to="https://www.youtube.com/channel/UCgNc-YNzudiVdnGZPh_4gmQ"
                    target="_blank"
                  >
                    <i className="fab fa-youtube" />
                  </NavLink>
                  <NavLink
                    to="https://www.linkedin.com/company/britfintechawards/posts/?feedView=all"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin" />
                  </NavLink>
                  <NavLink to="https://x.com/BritFintech" target="_blank">
                    <i className="fab fa-twitter" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-0 pb-0" style={{ background: "#191919" }}>
          <p
            className="text-center p-3 mb-0 "
            style={{ background: "#191919", color: "#fff" }}
          >
            &copy; {new Date().getFullYear()}{" "}
            <NavLink to="https://britfintechawards.com" target="_blank">
              <strong>Brit FinTech Awards</strong>
            </NavLink>{" "}
            All Rights Reserved. | Powered By{" "}
            <NavLink to="https://www.calyx-solutions.com" target="_blank">
              <strong>Calyx Solutions</strong>
            </NavLink>
          </p>
        </div>
        {/* <BfaChatBot/> */}
      </footer>
    </div>
  );
};

export default Footer;
