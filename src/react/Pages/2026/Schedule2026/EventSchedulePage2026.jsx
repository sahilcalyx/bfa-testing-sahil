import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import EventSchedule2026 from "./EventSchedule2026";

const PAGE_TITLE = "Event Schedule 2026 | Brit FinTech Awards";
const PAGE_DESCRIPTION =
  "The Brit FinTech Awards 2026 evening at a glance — from welcome drinks to the awards ceremony and dinner.";

const EventSchedulePage2026 = () => (
  <Page>
    <Helmet>
      <title>{PAGE_TITLE}</title>
      <meta name="description" content={PAGE_DESCRIPTION} />
      <meta
        name="keywords"
        content="Brit FinTech Awards 2026, Event Schedule, Agenda, Awards Ceremony, London"
      />
    </Helmet>
    <EventSchedule2026 />
  </Page>
);

const Page = styled.main`
  width: 100%;
  min-height: 100vh;
  padding-top: 72px;
  background: #fff;

  @media (max-width: 640px) {
    padding-top: 64px;
  }
`;

export default EventSchedulePage2026;
