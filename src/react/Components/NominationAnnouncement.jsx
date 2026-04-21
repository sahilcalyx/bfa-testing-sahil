import React from 'react';
import DotPattern from '../../components/ui/dot-pattern-1';

const NominationAnnouncement = () => {
  return (
    <div className="nomination-wrapper py-5 px-3">
      <DotPattern
        className="fill-slate-500/10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
      />
      <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="announcement-box">
              {/* Technical Corner Nodes (Squares) */}
              <div className="node node-tl"></div>
              <div className="node node-tr"></div>
              <div className="node node-bl"></div>
              <div className="node node-br"></div>
              
              <div className="announcement-content text-start">
                <p className="sub-label mb-3 fw-medium">Coming soon</p>
                <h2 className="blueprint-headline mb-0">
                  "Nominations to <span className="fw-bold text-dark">open soon.</span> <br /> <span className="fw-bold text-dark">Stay tuned</span>"
                </h2>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* The following content is hidden but preserved as requested */}
        <div className="d-none">
          <h2 className="headline mb-3">
            Nominations Open – <span className="highlight">Get Yours In Today!</span>
          </h2>
          <p className="lead mb-5">Nominate. Recognise. Inspire.</p>

          <div className="row justify-content-center gy-4">
            {/* Super Early Bird */}
            <div className="col-md-4">
              <div className="offer-card gradient-pink">
                <h4 className="title">Super Early Bird</h4>
                <p className="date-range">2nd June – 15th June 2025</p>
                <div className="price">£95</div>
              </div>
            </div>

            {/* Early Bird */}
            <div className="col-md-4">
              <div className="offer-card gradient-aqua">
                <h4 className="title">Early Bird</h4>
                <p className="date-range">16th June – 31st July 2025</p>
                <div className="price">£195</div>
              </div>
            </div>

            {/* Standard */}
            <div className="col-md-4">
              {/* gradient-purple */}
              <div className="offer-card gradient-pink "> 
                <h4 className="title">Standard Nomination</h4>
                <p className="date-range">1st August – 31st August 2025</p>
                <div className="price">£395</div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <p className="fs-5 fw-bold text-dark mb-2">
              Don’t miss your chance to nominate your business at the best rate.
            </p>
            <p className="fs-5 text-secondary">
              The earlier you act, the more you save.<br />
          Gear up — it’s time to nominate!
            </p>
          </div>
        </div>
      

      {/* Internal CSS */}
      <style>{`
        .nomination-wrapper {
          background-color: #ffffff;
          padding: 150px 0 100px 0;
          overflow: hidden;
          position: relative;
        }

        .announcement-box {
          position: relative;
          background: #ffffff;
          border: 2px solid rgba(255, 0, 0, 0.4);
          padding: 80px 60px;
          border-radius: 0;
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Technical Corner Nodes - Red Squares */
        .node {
          position: absolute;
          width: 12px;
          height: 12px;
          background-color: #ff0000;
          z-index: 2;
        }
        .node-tl { top: -6px; left: -6px; }
        .node-tr { top: -6px; right: -6px; }
        .node-bl { bottom: -6px; left: -6px; }
        .node-br { bottom: -6px; right: -6px; }

        .sub-label {
          color: #ff0000;
          font-size: 1rem;
          font-family: inherit;
        }

        .blueprint-headline {
          font-size: 4.5rem;
          line-height: 1.1;
          color: #333;
          font-weight: 300;
          letter-spacing: -3px;
          font-family: inherit;
        }

        @media (max-width: 991px) {
          .blueprint-headline {
            font-size: 3.5rem;
            letter-spacing: -2px;
          }
          .announcement-box {
            padding: 60px 40px;
          }
        }

        @media (max-width: 768px) {
          .blueprint-headline {
            font-size: 2.2rem;
            letter-spacing: -1px;
            line-height: 1.2;
          }
          .announcement-box {
             padding: 40px 20px;
          }
           .node { width: 8px; height: 8px; }
           .node-tl { top: -4px; left: -4px; }
           .node-tr { top: -4px; right: -4px; }
           .node-bl { bottom: -4px; left: -4px; }
           .node-br { bottom: -4px; right: -4px; }
        }
      `}</style>
    </div>
  );
};

export default NominationAnnouncement;
