import React from "react";
import RecentPosts from "../../Components/RecentPost";
import {
  TrendingUp,
  Globe,
  Users,
  Landmark,
  Zap,
  ArrowRight,
  Layers,
  ShieldCheck,
  Smartphone,
  Wallet,
  ArrowRightLeft,
  Fingerprint,
  Radar,
  Globe2
} from "lucide-react";

const DigitalWallets = () => {
  const cardStyle = {
    backgroundColor: "#000",
    borderRadius: "12px",
    padding: "24px 30px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
    border: "1px solid #222",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "16px",
    transition: "all 0.3s ease",
    flex: "1 1 300px",
    maxWidth: "500px",
  };

  const cardHeaderStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "16px",
    width: "100%",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    margin: "40px 0",
  };

  const iconContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    position: "relative",
  };

  const iconStyle = {
    color: "#ef4444",
  };

  const contentStyle = {
    width: "100%",
  };

  const titleStyle = {
    color: "#fff",
    fontSize: "1.1rem",
    fontWeight: "600",
    margin: 0,
  };

  const textStyle = {
    color: "#d1d5db",
    fontSize: "0.95rem",
    lineHeight: "1.5",
    margin: 0,
  };

  return (
    <div>
      <div>
        <div className="cs-height_90 cs-height_lg_80" />
        <div className="cs-height_115 cs-height_lg_50" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="cs-blog_details cs-style1">
                <div className="cs-blog_details_head">
                  <div className="cs-blog_details_info">
                    <h1 className="cs-blog_details_title">
                      Digital wallets: the gateway to the future of financial services
                    </h1>
                  </div>
                  <div className="cs-blog_details_meta">
                    <div className="cs-posted_by">
                      <span>By</span>{" "}
                      <a href="#" className="cs-primary_color">
                        {" "}
                        Admin{" "}
                      </a>
                    </div>
                    <div className="cs-post_date">
                      <i className="far fa-calendar-alt" />
                      04 Mar, 2026
                    </div>
                  </div>
                  <div className="cs-height_25 cs-height_lg_25" />
                  <img
                    className="rounded-3"
                    src="../assets/img/blogs/Digital-Wallets-blog.jpg"
                    alt="Digital Wallets"
                  />
                </div>

                <p>
                  <strong>
                    Why digital wallets are becoming the central hub for payments, identity, and financial access ?
                  </strong>
                </p>
                <p>
                  Digital wallets are no longer just a payment option — they are becoming the foundation of
                  modern financial services.
                </p>
                <p>
                  From contactless payments to cross-border transfers, wallets are reshaping how individuals
                  and businesses move, manage and access money.
                </p>

                <br />
                <h4>A market accelerating fast</h4>
                <p>
                  Global adoption continues to surge. Industry research shows digital wallet usage is expected
                  to exceed <strong>5–6 billion users by 2030</strong>, accounting for the majority of global e-commerce
                  transactions. Transaction values are projected to grow into the <strong>multi-trillion-dollar range</strong>,
                  driven by mobile-first consumers, real-time payments, and embedded finance.
                </p>
                <p>
                  For the Fintech and MSB (Money Service Business) sector, wallets are now a strategic growth
                  driver — not just a feature.
                </p>

                <br />
                <h4>More than just payments</h4>
                <p>
                  Today’s digital wallets are evolving into multi-functional financial hubs:
                </p>

                <div style={containerStyle}>
                  <div style={cardStyle}>
                    <div style={cardHeaderStyle}>
                      <div style={iconContainerStyle}>
                        <Globe size={40} style={iconStyle} />
                      </div>
                      <span style={titleStyle}>Cross-border transfers</span>
                    </div>
                    <div style={contentStyle}>
                      <p style={textStyle}>
                        Instant domestic and cross-border transfers with multi-currency support.
                      </p>
                    </div>
                  </div>
                  <div style={cardStyle}>
                    <div style={cardHeaderStyle}>
                      <div style={iconContainerStyle}>
                        <Fingerprint size={40} style={iconStyle} />
                      </div>
                      <span style={titleStyle}>Integrated identity</span>
                    </div>
                    <div style={contentStyle}>
                      <p style={textStyle}>
                        Seamless and secure identity verification integrated directly into the wallet experience.
                      </p>
                    </div>
                  </div>
                  <div style={cardStyle}>
                    <div style={cardHeaderStyle}>
                      <div style={iconContainerStyle}>
                        <Radar size={40} style={iconStyle} />
                      </div>
                      <span style={titleStyle}>Real-time tracking</span>
                    </div>
                    <div style={contentStyle}>
                      <p style={textStyle}>
                        Real-time transaction tracking and embedded financial services for better money management.
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  As regulation strengthens and compliance standards improve, wallets are increasingly
                  aligned with bank-grade security and infrastructure.
                </p>

                <br />
                <h4>Financial inclusion & cross-border growth</h4>
                <p>
                  In emerging markets especially, digital wallets are helping bridge gaps where traditional
                  banking access is limited. They provide faster onboarding, lower transfer costs, and greater
                  accessibility — key advantages for remittances and SME transactions.
                </p>
                <p>
                  Cross-border capability is a major growth area, particularly between <strong>African and UK
                  corridors</strong>, where demand for secure and compliant transfer solutions continues to rise.
                </p>

                <br />
                <h4>UK Leaders in Digital Wallet Innovation</h4>
                <p>
                  The UK is home to several fintech companies at the forefront of digital wallet innovation:
                </p>
                <ul>
                  <li>
                    <strong>Wise (formerly TransferWise)</strong> remains a leading provider of low-fee international
                    transfers and multi-currency wallet services for UK users, combining fast FX with a
                    user-friendly platform.
                  </li>
                  <li>
                    <strong>Challenger banks</strong> and digital platforms like <strong>Revolut</strong> and <strong>Monzo</strong> have grown massively
                    by offering integrated wallet features alongside banking services, attracting millions
                    of users globally.
                  </li>
                  <li>
                    <strong>PayPal</strong>: Continues to be a trusted wallet for online payments and merchant
                    checkouts.
                  </li>
                </ul>
                <p>
                  These companies illustrate how the UK fintech market is not only adopting digital wallets but
                  also <strong>expanding their capabilities</strong> — from payments to savings, FX, and even investment and
                  trading.
                </p>

                <br />
                <h4>Innovation in action</h4>
                <p>
                  A strong example of this evolution is <strong><a href="https://www.calyx-solutions.com/" target="_blank" rel="noopener noreferrer">Calyx Solutions</a></strong>, which is launching a <strong>bank-backed
                  walleting system</strong> within its white-label apps. The solution enables:
                </p>
                <div style={containerStyle}>
                  <div style={cardStyle}>
                    <div style={cardHeaderStyle}>
                      <div style={iconContainerStyle}>
                        <Landmark size={40} style={iconStyle} />
                      </div>
                      <span style={titleStyle}>Local transfers</span>
                    </div>
                    <div style={contentStyle}>
                      <p style={textStyle}>
                        <span style={{display: 'inline-flex', alignItems: 'center', gap: '4px', verticalAlign: 'middle'}}>
                          NGN <img src="https://flagcdn.com/w40/ng.png" alt="NG" style={{width: '20px', height: 'auto', borderRadius: '2px', marginBottom: '0px'}} />
                        </span> to <span style={{display: 'inline-flex', alignItems: 'center', gap: '4px', verticalAlign: 'middle'}}>
                          NGN <img src="https://flagcdn.com/w40/ng.png" alt="NG" style={{width: '20px', height: 'auto', borderRadius: '2px', marginBottom: '0px'}} />
                        </span> local transfers for seamless domestic transactions.
                      </p>
                    </div>
                  </div>
                  <div style={cardStyle}>
                    <div style={cardHeaderStyle}>
                      <div style={iconContainerStyle}>
                        <Globe2 size={40} style={iconStyle} />
                      </div>
                      <span style={titleStyle}>International transfers</span>
                    </div>
                    <div style={contentStyle}>
                      <p style={textStyle}>
                        <span style={{display: 'inline-flex', alignItems: 'center', gap: '4px', verticalAlign: 'middle'}}>
                          NGN <img src="https://flagcdn.com/w40/ng.png" alt="NG" style={{width: '20px', height: 'auto', borderRadius: '2px', marginBottom: '0px'}} />
                        </span> to <span style={{display: 'inline-flex', alignItems: 'center', gap: '4px', verticalAlign: 'middle'}}>
                          GBP <img src="https://flagcdn.com/w40/gb.png" alt="GB" style={{width: '20px', height: 'auto', borderRadius: '2px', marginBottom: '0px'}} />
                        </span> international transfers, bridging the gap between corridors.
                      </p>
                    </div>
                  </div>
                </div>
                <p>
                  By combining regulated banking infrastructure with fintech flexibility, bank-backed wallet
                  systems strengthen trust, compliance and scalability — essential factors for MSBs and
                  fintech platforms operating in regulated markets.
                </p>

                <br />
                <h4>The road ahead</h4>
                <p>
                  Digital wallets are becoming the central access point to financial services. Payments, identity,
                  compliance, and cross-border capability are converging into a single ecosystem.
                </p>
                <p>
                  For fintech innovators, regulators, and financial institutions, one thing is clear:
                  <strong> The future of financial services will be wallet-driven.</strong>
                </p>
              </div>
            </div>
            <RecentPosts />
          </div>
        </div>
        <div className="cs-height_140 cs-height_lg_80" />
      </div>
    </div>
  );
};

export default DigitalWallets;
