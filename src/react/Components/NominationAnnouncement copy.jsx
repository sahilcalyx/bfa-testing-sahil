import React from 'react';

const NominationAnnouncement = ({ showFooter = true }) => {
  return (
    <div className="nomination-wrapper py-5 px-3">
      <div className="container text-center">
        <h2 className="headline mb-3">
          Nominations Open – <span className="highlight">Get Yours In Today!</span>
        </h2>
        <p className="lead mb-5">Nominate. Celebrate. Inspire.</p>

        <div className="row justify-content-center gy-4">
          {/* Super Early Bird — expired */}
          <div className="col-md-8 col-lg-4">
            <div className="offer-card gradient-expired">
              <span className="offer-badge offer-badge-expired">Expired</span>
              <h4 className="title">Super Early Bird Offer </h4>
              <p className="date-range">2nd June – 30th June 2026</p>
              <div className="price-row">
                <span className="price-original">£395</span>
                <span className="price">£195</span>
              </div>
            </div>
          </div>

          {/* Early Bird — expired */}
          <div className="col-md-8 col-lg-4">
            <div className="offer-card gradient-expired">
              <span className="offer-badge offer-badge-expired">Expired</span>
              <h4 className="title">Early Bird Offer Extended</h4>
              <p className="date-range">1st July – 31st July 2026</p>
              <div className="price-row">
                <span className="price-original">£395</span>
                <span className="price">£295</span>
              </div>
            </div>
          </div>

          {/* Standard Nomination — active */}
          <div className="col-md-8 col-lg-4">
            <div className="offer-card gradient-theme">
              <span className="offer-badge offer-badge-active">Active</span>
              <h4 className="title">Standard Nomination</h4>
              <p className="date-range">1st August – 31st August 2026</p>
              <div className="price">£395</div>
            </div>
          </div>
        </div>


        {showFooter && (
          <div className="mt-5">
            <p className="fs-5 fw-bold text-dark mb-2">
              Don’t miss your chance to nominate your business at the best rate.
            </p>

            <p className="fs-5 text-secondary">
              Early movers secure the best rates and maximize their opportunity to shine at the awards.
              <br /><br />

              <strong >

                <span className="highlight">Submit Your Nomination Today.</span>
              </strong>

            </p>
          </div>
        )}
      </div>

      {/* Internal CSS */}
      <style>{`
        .nomination-wrapper {
          background-color: #ffffff;
        }

        .headline {
          font-weight: 700;
          font-size: 2.4rem;
          color: #111;
        }

        .highlight {
          background: linear-gradient(to right, #000000 0%, #c8102e 50%, #000000 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        .offer-card {
          position: relative;
          background: #fff;
          border-radius: 18px;
          padding: 30px 20px;
          color: #222;
          transition: all 0.3s ease;
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
          border: 2px solid transparent;
        }

        .offer-badge {
          position: absolute;
          top: 0;
          right: 0;
          padding: 5px 12px;
          border-radius: 0 16px 0 12px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          line-height: 1.2;
        }

        .offer-badge-expired {
          background: #e5e5e5;
          color: #666;
          border: 1px solid #cfcfcf;
        }

        .offer-badge-active {
          background: #c8102e;
          color: #fff;
          box-shadow: 0 4px 10px rgba(200, 16, 46, 0.25);
        }

        .offer-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 28px rgba(0, 0, 0, 0.08);
        }

        .title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .date-range {
          font-size: 1rem;
          color: #666;
          margin-bottom: 12px;
        }

        .price {
          font-size: 1.75rem;
          font-weight: bold;
          background: linear-gradient(to right, #000000 0%, #c8102e 50%, #000000 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        .price-row {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 10px;
        }

        .price-original {
          font-size: 1.15rem;
          font-weight: 600;
          color: #999;
          text-decoration: line-through;
        }

    .gradient-pink {
  border-color: #cccccc;
  background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
}

    .gradient-expired {
          border-color: #c8c8c8;
          background: linear-gradient(135deg, #f3f3f3, #e8e8e8);
          border-width: 2px;
          box-shadow: none;
          opacity: 0.72;
          filter: grayscale(0.85);
          pointer-events: none;
        }

        .gradient-expired .title,
        .gradient-expired .date-range,
        .gradient-expired .price,
        .gradient-expired .price-original {
          color: #777;
          background: none;
          -webkit-text-fill-color: #777;
        }

        .gradient-expired:hover {
          transform: none;
          box-shadow: none;
        }


    .gradient-theme {
          border-color: #c8102e;
          background: linear-gradient(135deg, #fff5f5, #ffebeb);
          border-width: 3px;
          box-shadow: 0 8px 20px rgba(200, 16, 46, 0.15);
        }


        .gradient-purple {
          border-color: #b8a0ff;
          background: linear-gradient(135deg, #f3f0ff, #f9f6ff);
            box-shadow: 0 0 8px #00d4d4;
              border-width: 4px;
        }

        @media (max-width: 768px) {
          .headline {
            font-size: 1.75rem;
          }

          .price {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </div>
  );
};

export default NominationAnnouncement;
