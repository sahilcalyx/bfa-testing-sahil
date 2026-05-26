import React from 'react';

const NominationAnnouncement = () => {
  return (
    <div className="nomination-wrapper py-5 px-3">
      <div className="container text-center">
        <h2 className="headline mb-3">
          Nominations Open – <span className="highlight">Get Yours In Today!</span>
        </h2>
        <p className="lead mb-5">Nominate. Celebrate. Inspire.</p>

        <div className="row justify-content-center gy-4">
          {/* Super Early Bird */}
          <div className="col-md-4">
            <div className="offer-card gradient-theme">
              <h4 className="title">Super Early Bird</h4>
              <p className="date-range">2nd June – 15th June 2025</p>
              <div className="price">£195</div>
            </div>
          </div>

          {/* Early Bird */}
          <div className="col-md-4">
            <div className="offer-card gradient-pink">
              <h4 className="title">Early Bird</h4>
              <p className="date-range">16th June – 31st July 2025</p>
              <div className="price">£295</div>
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
            Early movers get the best rates — <strong>submit</strong> <br/> your nomination today.
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
          background: linear-gradient(to right, #000000 0%, #c8102e 50%, #000000 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        .offer-card {
          background: #fff;
          border-radius: 18px;
          padding: 30px 20px;
          color: #222;
          transition: all 0.3s ease;
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
          border: 2px solid transparent;
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

    .gradient-pink {
  border-color: #cccccc;
  background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
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
