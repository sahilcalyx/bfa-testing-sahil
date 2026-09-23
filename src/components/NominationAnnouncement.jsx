import React from 'react';

const NominationAnnouncement = () => {
  return (
    <div className="nomination-wrapper py-5 px-3">
      <div className="container text-center">
        <h2 className="headline mb-3">
          Nominations Closed – <span className="highlight">Thank You for Your Interest!</span>
        </h2>
        <p className="lead mb-5">Nominations for this year have now closed.</p>

        <div className="row justify-content-center gy-4 align-items-stretch">
          {/* Super Early Bird — expired */}
          <div className="col-md-4 d-flex">
            <div className="offer-card gradient-expired">
              <span className="offer-badge offer-badge-expired">Expired</span>
              <h4 className="title">Super Early Bird Offer</h4>
              <p className="date-range">2nd June – 30th June 2026</p>
              <div className="price-row">
                <span className="price-original">£395</span>
                <span className="price">£195</span>
              </div>
            </div>
          </div>

          {/* Early Bird — expired */}
          <div className="col-md-4 d-flex">
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

          {/* Standard — expired */}
          <div className="col-md-4 d-flex">
            <div className="offer-card gradient-expired">
              <span className="offer-badge offer-badge-expired">Expired</span>
              <h4 className="title">Standard Nomination Extended</h4>
              <p className="date-range">1st August – 7th September 2026</p>
              <div className="price-row">
                <span className="price">£395</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <p className="fs-5 fw-bold text-dark mb-2">
            Nominations are now closed.
          </p>
          <p className="fs-5 text-secondary">
            Thank you to everyone who submitted a nomination.<br />
            We look forward to seeing you at the awards.
          </p>
        </div>
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
          color: #e60073;
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
          width: 100%;
          height: 100%;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
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

        .offer-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 28px rgba(0, 0, 0, 0.08);
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
        .gradient-expired .price {
          color: #777;
        }

        .gradient-expired:hover {
          transform: none;
          box-shadow: none;
        }

        .title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 8px;
          min-height: 2.6em;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          line-height: 1.3;
        }

        .date-range {
          font-size: 1rem;
          color: #666;
          margin-bottom: 12px;
          min-height: 1.5em;
        }

        .price {
          font-size: 1.75rem;
          font-weight: bold;
          color: #e60073;
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

        .gradient-expired .price,
        .gradient-expired .price-original {
          color: #777;
        }

    .gradient-pink {
  border-color: #cccccc;
  background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
}


   .gradient-aqua {
  border-color: #00d4d4;

  background: linear-gradient(135deg, #a8faff, #d0ffff);

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
