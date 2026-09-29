import React, { useId } from "react";
import styled from "styled-components";
import { motion, useReducedMotion } from "framer-motion";
import { schedule2026 } from "./schedule2026";

const EASE = [0.16, 1, 0.3, 1];

const describePeople = (people = []) => {
  if (people.length === 0) return null;
  if (people.length === 1) {
    const [person] = people;
    return person.designation ? `${person.name}, ${person.designation}` : person.name;
  }

  const moderator = people.find((person) => person.role === "Moderator");
  const others = people.filter((person) => person !== moderator).map((person) => person.name);
  return moderator
    ? `Moderated by ${moderator.name} · with ${others.join(", ")}`
    : others.join(", ");
};

const EventScheduleCompact2026 = () => {
  const reduceMotion = useReducedMotion();
  const titleId = useId();

  return (
    <Card
      aria-labelledby={titleId}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <Header>
        <Title id={titleId}>Event Schedule</Title>
        <Count>{schedule2026.length} sessions</Count>
      </Header>

      <List>
        {schedule2026.map((item) => {
          const people = describePeople(item.people);
          return (
            <Row key={item.id}>
              <Time dateTime={`${item.time} ${item.meridiem}`}>
                {item.time}
                <Meridiem>{item.meridiem}</Meridiem>
              </Time>
              <Body>
                <SessionTitle>{item.title}</SessionTitle>
                {people && <People>{people}</People>}
              </Body>
            </Row>
          );
        })}
      </List>
    </Card>
  );
};

const Card = styled(motion.section)`
  --sc-ink: #121416;
  --sc-mute: #7a756e;
  --sc-line: #efece8;
  --sc-crimson: #c8102e;
  width: calc(100% - 32px);
  max-width: 620px;
  margin: 0 auto 48px;
  padding: 28px 40px 16px;
  background: #fff;
  border: 1px solid rgba(229, 229, 229, 0.85);
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.06);
  font-family: "IBM Plex Sans", system-ui, sans-serif;
  text-align: left;

  @media (max-width: 560px) {
    padding: 22px 20px 10px;
    border-radius: 18px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--sc-line);
`;

const Title = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--sc-ink);

  @media (max-width: 560px) {
    font-size: 18px;
  }
`;

const Count = styled.span`
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--sc-mute);
`;

const List = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Row = styled.li`
  display: grid;
  grid-template-columns: 76px minmax(0, 1fr);
  gap: 16px;
  padding: 13px 0;
  border-bottom: 1px solid var(--sc-line);

  &:last-child {
    border-bottom: 0;
  }

  @media (max-width: 400px) {
    grid-template-columns: 64px minmax(0, 1fr);
    gap: 12px;
  }
`;

const Time = styled.time`
  display: flex;
  align-items: baseline;
  gap: 4px;
  font-size: 14px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--sc-crimson);
`;

const Meridiem = styled.span`
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  opacity: 0.75;
`;

const Body = styled.div`
  min-width: 0;
`;

const SessionTitle = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--sc-ink);
`;

const People = styled.p`
  margin: 3px 0 0;
  font-size: 12px;
  line-height: 1.5;
  color: var(--sc-mute);
`;

export default EventScheduleCompact2026;
