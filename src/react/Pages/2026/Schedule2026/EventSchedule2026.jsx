import React, { useId } from "react";
import styled from "styled-components";
import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { schedule2026 } from "./schedule2026";

const EASE = [0.16, 1, 0.3, 1];

const initialsOf = (name = "") =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Speaker = ({ person, onOpen }) => {
  const clickable = Boolean(person.slug);
  const Tag = clickable ? SpeakerButton : SpeakerStatic;

  return (
    <Tag
      type={clickable ? "button" : undefined}
      onClick={clickable ? () => onOpen(person.slug) : undefined}
      aria-label={clickable ? `View ${person.name} profile` : undefined}
    >
      <Avatar>
        {person.img ? (
          <img src={person.img} alt="" loading="lazy" />
        ) : (
          <span aria-hidden="true">{initialsOf(person.name)}</span>
        )}
      </Avatar>
      <SpeakerText>
        <SpeakerName>
          {person.name}
          {clickable && <FiArrowUpRight aria-hidden="true" />}
        </SpeakerName>
        <SpeakerMeta>
          {person.role && <SpeakerRole>{person.role}</SpeakerRole>}
          {person.role && person.designation && " · "}
          {person.designation}
        </SpeakerMeta>
      </SpeakerText>
    </Tag>
  );
};

const ScheduleRow = ({ item, index, reduceMotion, onOpen }) => {
  const people = item.people || [];

  return (
    <Row
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: reduceMotion ? 0 : Math.min(index, 3) * 0.04, ease: EASE }}
    >
      <Time dateTime={`${item.time} ${item.meridiem}`}>
        {item.time}
        <Meridiem>{item.meridiem}</Meridiem>
      </Time>

      <Body>
        <SessionTitle>{item.title}</SessionTitle>

        {people.length > 0 && (
          <People $multi={people.length > 1}>
            {people.map((person) => (
              <Speaker key={person.name} person={person} onOpen={onOpen} />
            ))}
          </People>
        )}
      </Body>
    </Row>
  );
};

const EventSchedule2026 = () => {
  const reduceMotion = useReducedMotion();
  const navigate = useNavigate();
  const titleId = useId();

  const first = schedule2026[0];

  return (
    <Section id="event-schedule" aria-labelledby={titleId}>
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <Inner>
        <Intro
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <Kicker>
            <KickerLine aria-hidden="true" />
            Brit FinTech Awards 2026
          </Kicker>
          <Title id={titleId}>Event Schedule</Title>
          <Lead>
            The evening at a glance — from welcome drinks to the awards ceremony and dinner.
          </Lead>

          <Facts>
            <Fact>
              <FactLabel>Doors open</FactLabel>
              <FactValue>
                {first.time} {first.meridiem}
              </FactValue>
            </Fact>
            <Fact>
              <FactLabel>Sessions</FactLabel>
              <FactValue>{String(schedule2026.length).padStart(2, "0")}</FactValue>
            </Fact>
          </Facts>
        </Intro>

        <List>
          {schedule2026.map((item, index) => (
            <ScheduleRow
              key={item.id}
              item={item}
              index={index}
              reduceMotion={reduceMotion}
              onOpen={(slug) => navigate(slug)}
            />
          ))}
        </List>
      </Inner>
    </Section>
  );
};

const Section = styled.section`
  --sc-ink: #121416;
  --sc-body: #3d3a36;
  --sc-mute: #8a857e;
  --sc-line: #e8e5e0;
  --sc-soft: #faf9f7;
  --sc-crimson: #c8102e;
  width: 100%;
  background: #fff;
  font-family: "IBM Plex Sans", system-ui, sans-serif;
  color: var(--sc-body);
`;

const Inner = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 300px) minmax(0, 1fr);
  gap: 72px;
  max-width: 1120px;
  margin: 0 auto;
  padding: 72px 24px;

  @media (max-width: 991px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
    padding: 52px 20px;
  }

  @media (max-width: 560px) {
    padding: 40px 16px;
  }
`;

const Intro = styled(motion.header)`
  align-self: start;
  position: sticky;
  top: 110px;

  @media (max-width: 991px) {
    position: static;
  }
`;

const Kicker = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--sc-crimson);
`;

const KickerLine = styled.span`
  width: 24px;
  height: 1px;
  background: var(--sc-crimson);
`;

const Title = styled.h2`
  margin: 0;
  font-family: "Oswald", "IBM Plex Sans", sans-serif;
  font-weight: 700;
  font-size: clamp(24px, 2.8vw, 32px);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  line-height: 1.05;
  color: var(--sc-ink);
`;

const Lead = styled.p`
  margin: 12px 0 0;
  max-width: 300px;
  font-size: 13px;
  line-height: 1.65;
  color: var(--sc-mute);

  @media (max-width: 991px) {
    max-width: 460px;
  }
`;

const Facts = styled.dl`
  display: flex;
  gap: 32px;
  margin: 28px 0 0;
  padding-top: 20px;
  border-top: 1px solid var(--sc-line);
`;

const Fact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const FactLabel = styled.dt`
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--sc-mute);
`;

const FactValue = styled.dd`
  margin: 0;
  font-family: "Oswald", sans-serif;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--sc-ink);
`;

const List = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--sc-line);
`;

const Row = styled(motion.li)`
  position: relative;
  display: grid;
  grid-template-columns: 96px minmax(0, 1fr);
  gap: 24px;
  padding: 18px 16px 18px 20px;
  border-bottom: 1px solid var(--sc-line);
  transition: background 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--sc-crimson);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover {
    background: var(--sc-soft);
  }

  &:hover::before {
    transform: scaleY(1);
  }

  @media (max-width: 560px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 6px;
    padding: 16px 12px 16px 14px;
  }
`;

const Time = styled.time`
  display: flex;
  align-items: baseline;
  gap: 5px;
  padding-top: 1px;
  font-family: "Oswald", sans-serif;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 0.02em;
  font-variant-numeric: tabular-nums;
  color: var(--sc-crimson);
`;

const Meridiem = styled.span`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.14em;
  color: var(--sc-crimson);
  opacity: 0.75;
`;

const Body = styled.div`
  min-width: 0;
`;

const SessionTitle = styled.h3`
  margin: 0;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0;
  text-transform: none;
  line-height: 1.4;
  color: var(--sc-ink);

  @media (max-width: 560px) {
    font-size: 14px;
  }
`;

const People = styled.div`
  display: grid;
  grid-template-columns: ${(p) => (p.$multi ? "repeat(2, minmax(0, 1fr))" : "minmax(0, 1fr)")};
  gap: 6px 20px;
  margin-top: 12px;

  @media (max-width: 720px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const speakerBase = `
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin: 0;
  padding: 4px 0;
  border: 0;
  background: transparent;
  font-family: inherit;
  text-align: left;
  color: inherit;
`;

const SpeakerStatic = styled.div`
  ${speakerBase}
`;

const Avatar = styled.div`
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  background: #f1eeea;
  box-shadow: 0 0 0 1px var(--sc-line);
  transition: box-shadow 0.25s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    filter: grayscale(0.25);
    transition: filter 0.3s ease;
  }

  span {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    color: var(--sc-mute);
  }
`;

const SpeakerText = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const SpeakerName = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.3;
  color: var(--sc-ink);
  transition: color 0.2s ease;

  svg {
    font-size: 12px;
    opacity: 0;
    transform: translate(-3px, 3px);
    transition: opacity 0.2s ease, transform 0.2s ease;
  }
`;

const SpeakerMeta = styled.span`
  font-size: 12px;
  line-height: 1.4;
  color: var(--sc-mute);
`;

const SpeakerRole = styled.span`
  color: var(--sc-body);
  font-weight: 500;
`;

const SpeakerButton = styled.button`
  ${speakerBase}
  cursor: pointer;

  &:hover ${SpeakerName} {
    color: var(--sc-crimson);
  }

  &:hover ${SpeakerName} svg {
    opacity: 1;
    transform: translate(0, 0);
  }

  &:hover ${Avatar} {
    box-shadow: 0 0 0 1px var(--sc-crimson);
  }

  &:hover ${Avatar} img {
    filter: none;
  }

  &:focus-visible {
    outline: 2px solid var(--sc-crimson);
    outline-offset: 3px;
    border-radius: 4px;
  }
`;

export default EventSchedule2026;
