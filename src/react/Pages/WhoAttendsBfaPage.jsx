import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import WhoAttendsBfaTabsSection from "../Components/WhoAttendsBfaTabsSection";

const PAGE_TITLE = "Who Attends BFA? | Brit FinTech Awards";
const PAGE_DESCRIPTION =
  "Every year, BFA brings senior decision-makers from across financial services. Explore attendee brands across banking, payments, acquiring, payouts, and more.";

const WhoAttendsBfaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta
          name="keywords"
          content="Brit FinTech Awards, Who Attends BFA, FinTech attendees, banking, payments, open banking"
        />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
      </Helmet>

      <WhoAttendsBfaTabsSection variant="page" />
    </div>
  );
};

export default WhoAttendsBfaPage;
