import React from "react";
import { NavLink } from "react-router-dom";

const AwardsTermsAndCondtion = () => {
  return (
    <>
        <div className="row">
              <div className="col-12">
                <h4>Terms And Conditions</h4>
                <ul>
                  <li>
                  Each company can nominate up to 3 categories only.
                  </li>
                  <li>
                  Nomination is open to Fintech and MSB companies. This includes innovative start-ups, established financial institutions, and technological disruptors.
                  </li>
                  <li>
                    Awards will be judged by an expert panel of industry professionals based on the nominations received. 
                  </li>
                  <li>
                  Each nomination form is valid for one entry only. If you are nominating in multiple categories, a separate entry must be submitted for each. A fee applies for each nomination.
                  </li>
                  <li>
                  Supporting photos and/or documents can be sent directly to <NavLink to="mailto:kudos@britfintechawards.com">kudos@britfintechawards.com</NavLink>.
                  </li>
      
                </ul>
              </div>
            </div>
        {/* <div className="col-12">
            <h4>Terms And Conditions</h4>
            <ul>
              <li>
              Submit your entries at £395 only (for each entry). The entries are open till 15th September 2024 ( Additional attendee will be charged £195 each)

              </li>
              <li>
              They should not be penalised by any regulatory body.
Nomination is open to Fintech companies. This includes innovative start-ups, established financial institutions, and technological disruptors.
Each company can nominate up to 3 categories only.

              </li>
              <li>
              Awards will be judged by an industry experts committee based on nominations received.
Each nomination form is valid for 1 entry only. If you are nominating for several categories, please enter each entry separately.
Each nomination is charged.

              </li>
              <li>
              If your supporting photos and/or documents are not ready yet, you may send them directly to kudos@britfintechawards.com or
Finding it difficult to register? Please contact us +44 2071939381
              </li>
           
            </ul>
          </div> */}
    </>
  )
}

export default AwardsTermsAndCondtion
