import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const Winner = () => {
  return (
    <div>
      <Helmet>
        <title></title>
        <meta name="description" content="" />
        <meta
          name="keywords"
          content="Brit Fintech Award, UK Fintech Awards, Winner Us, Financial Technology Sector UK, Fintech Innovation UK"
        />
        <meta name="author" content="Brit Fintech Award" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta
          property="og:image"
          content="https://britfintechawards.com/assets/img/event-conference/about.png"
        />
      </Helmet>

      <div>
        <style>
            {`
 



.winner-heading{
    text-align: center;
    color: #333;
    margin-bottom: 30px;
    font-size: 2.5em;
}

.category {
    margin-bottom: 40px;
}

.category h2 {
background-color: #c8102e;
    color: #fff;
    padding: 15px;
    border-radius: 6px;
    font-size: 1.5em;
    margin: 0 0 20px;
    text-transform: uppercase;
}

.item {
    display: flex;
    align-items: center;
   background: #efefef;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.item:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.item img {
    width: 200px;
    height: auto;
    border-right: 1px solid #ddd;
    background: #fff;
    border-radius: 0 15px 15px 0px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.info {
    padding: 15px;
    flex: 1;
}

.info h3 {
    margin: 0 0 10px;
    font-size: 0.9rem;
    color: #000;
    background: #bfffff;
    padding: 13px;
    border-radius: 10px;
}

.info p {
    margin: 0;
    color: #555;
}

.info p:last-of-type {
    font-weight: bold;
    color: #000000;
    background: #ffd4e9;
    padding: 10px;
    border-radius: 10px;
}
            `}
        </style>
        <div className="cs-height_90 cs-height_lg_80" />

        <div
          className="cs-hero cs-style12 cs-type1 cs-center text-center  cs-parallax cs-hobble"
          
          style={{
            backgroundImage:
              'url("../assets/img/event-conference/hero-img.jpg")',
          }}
        >
          <div className="cs-hero_pattern cs-hover_layer3" style={{}}>
            <div
              className="cs-hero_pattern_in cs-bg_parallax"
            
            
            />
          </div>
          <div
            className="container wow fadeInDown"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.2s",
              animationName: "fadeInDown",
            }}
          >
            <div className="cs-hero_text text-left">
              <h1
                className="cs-hero_title cs-extra_bold cs-white text-uppercase pb-0 mb-2"
                style={{ marginTop: "40px !important", lineHeight: '1.2' }}
              >
                Winners of Brit <br /> Fintech Awards 2024
              </h1>
              {/* <p className="pb-0 mb-0 text-left text-white"> Let’s celebrate innovation together. 
            </p> */}

              <div className="cs-height_10 cs-height_lg_0" />
            </div>
          </div>
          <div
            className="cs-hero_img cs-bg"
            data-src="../assets/img/creative-agency/hero-img.jpg"
            style={{
              backgroundImage:
                'url("../assets/img/creative-agency/hero-img.jpg")',
            }}
          >
            <div className="cs-hero_img_circle" />
          </div>
        </div>
        {/* End Hero Seciton */}
        {/* Start Winner Seciton */}
        <div className="cs-height_70 cs-height_lg_75" />

        <div className="container w-100">
          <div className="row justify-content-center ">
          <div className="category col-lg-6" id="brand1">
            <h2>FINTECH AWARDS</h2>
            <NavLink to="/award-winners-2024/vyne-technologies-account2account-payment-processor" className="item">
              <img
                src="../assets/img/winner-logo/Vyne.png"
                alt="Vyne"
              />
              <div className="info">
                <h3>Account2Account Payment Processor 2024</h3>
                <p>
             
                </p>
                <p>   Vyne</p>
              </div>
            </NavLink>
            <NavLink to="/award-winners-2024/orbital-payment-innovator-of-the-year-2024" className="item">
              <img
                src="../assets/img/winner-logo/orbital.png"
                alt="Orbital"
              />
              <div className="info">
                <h3>Payment Innovator 2024</h3>
             
                <p>Orbital</p>
              </div>
            </NavLink>
            <NavLink to="/award-winners-2024/transfer-rocket-ltd-pay-out-innovator-of-the-year-2024" className="item">
              <img
                src="../assets/img/winner-logo/transfer-rocket.png"
                alt="Transfer Rocket"
              />
              <div className="info">
                <h3>Pay-Out Innovator 2024</h3>
             
                <p>Transfer Rocket </p>
              </div>
            </NavLink>
            <NavLink to="/award-winners-2024/mtbs-banking-as-a-service-innovator-of-the-year-2024" className="item">
              <img
                src="../assets/img/winner-logo/mtbs.png"
                alt="MTBS"
              />
              <div className="info">
                <h3>B-A-A-S Innovator 2024</h3>
             
                <p>MTBS</p>
              </div>
            </NavLink>
            <NavLink to="/award-winners-2024/blessed-exchange-ltd-woman-entrepreneur-in-fintech-2024" className="item">
              <img
                src="../assets/img/winner-logo/BlessedExchange.png"
                alt="Blessed Exchange"
              />
              <div className="info">
                <h3>Woman Entrepreneur in FinTech 2024</h3>
             
                <p>Blessed Exchange</p>
              </div>
            </NavLink>
            <NavLink to="/award-winners-2024/sumsub-anti-fraud-innovator-of-the-year-2024" className="item">
              <img
                src="../assets/img/winner-logo/sumsub.png"
                alt="Sumsub"
              />
              <div className="info">
                <h3>Anti-Fraud Innovator 2024</h3>
             
                <p>Sumsub</p>
              </div>
            </NavLink>
            <NavLink to="/award-winners-2024/gbg-plc-id-verification-innovator-of-the-year-2024" className="item">
              <img
                src="../assets/img/winner-logo/gbg.png"
                alt="GBG"
              />
              <div className="info">
                <h3>ID Verification Innovator 2024</h3>
             
                <p>GBG</p>
              </div>
            </NavLink>
            <NavLink to="/award-winners-2024/belyfted-limited-startup-of-the-year-2024" className="item">
              <img
                src="../assets/img/winner-logo/Belfted.png"
                alt="Belyfted"
              />
              <div className="info">
                <h3>Startup of the Year 2024</h3>
             
                <p>Belyfted</p>
              </div>
            </NavLink>
            <NavLink to="/award-winners-2024/volume-payments-limited-fintech-of-the-year-2024" className="item">
              <img
                src="../assets/img/winner-logo/Volume.png"
                alt="Volume"
              />
              <div className="info">
                <h3>FinTech of the Year 2024</h3>
             
                <p>Volume</p>
              </div>
            </NavLink>
            
          </div>
          <div className="category col-lg-6" id="brand1">
            <h2>MSB AWARDS
            </h2>
            <NavLink to="/award-winners-2024/mercury-danati-compliance-innovator-of-the-year-2024" className="item">
              <img
                src="../assets/img/winner-logo/Mercury-Danati.png"
                alt="Mercury Danati"
              />
              <div className="info">
                <h3>Compliance Innovator 2024</h3>
                <p>
             
                </p>
                <p>   Mercury Danati</p>
              </div>
            </NavLink>
            <NavLink to="/award-winners-2024/myremit-best-in-customer-service-msb-2024" className="item">
              <img
                src="../assets/img/winner-logo/my-remit.png"
                alt="My Remit"
              />
              <div className="info">
                <h3>Best in Customer Service MSB 2024</h3>
             
                <p>My Remit</p>
              </div>
            </NavLink>
            <NavLink to="/award-winners-2024/super-transfer-uk-ltd-remittance-innovator-msb-2024" className="item">
              <img
                src="../assets/img/winner-logo/super-transfer.png"
                alt="Super Transfer"
              />
              <div className="info">
                <h3>Remittance Innovator MSB 2024</h3>
             
                <p>Super Transfer </p>
              </div>
            </NavLink>
            <NavLink to="/award-winners-2024/travel-cashier-ltd-progressive-money-exchanger-msb-of-the-year-2024" className="item">
              <img
                src="../assets/img/winner-logo/trave-cashierr.png"
                alt="Travel Cashier"
              />
              <div className="info">
                <h3>Progressive Money Exchanger MSB 2024</h3>
             
                <p>Travel Cashier</p>
              </div>
            </NavLink>
            <NavLink to="/award-winners-2024/teeparam-exchange-ltd-msb-of-the-year-2024" className="item">
              <img
                src="../assets/img/winner-logo/teeparam.png"
                alt="Teeparam Exchange"
              />
              <div className="info">
                <h3>MSB of the Year 2024</h3>
             
                <p>Teeparam Exchange</p>
              </div>
            </NavLink>
            <NavLink to="/award-winners-2024/red-sea-ltd-msb-disruptor-of-the-year-2024" className="item">
              <img
                src="../assets/img/winner-logo/redsea.png"
                alt="redsea"
              />
              <div className="info">
                <h3>MSB Disruptor 2024</h3>
             
                <p>Red Sea Money Transfer </p>
              </div>
            </NavLink>
            <NavLink to="/award-winners-2024/kmoney-msb-app-of-the-year-2024" className="item">
              <img
                src="../assets/img/winner-logo/kmoney.png"
                alt="KMoney"
              />
              <div className="info">
                <h3>MSB App 2024</h3>
             
                <p>KMoney
                </p>
              </div>
            </NavLink>
            <NavLink to="/award-winners-2024/baaz-money-exchange-ltd-msb-store-of-the-year-2024" className="item">
              <img
                src="../assets/img/winner-logo/baaz.png"
                alt="Baaz Money Exchange"
              />
              <div className="info">
                <h3>MSB Store 2024</h3>
             
                <p>Baaz Money Exchange
                </p>
              </div>
            </NavLink>
          </div>
          </div>
         
        </div>

        <div className="cs-height_75 cs-height_lg_80" />
        {/* End Winner Seciton */}
      </div>
    </div>
  );
};

export default Winner;
