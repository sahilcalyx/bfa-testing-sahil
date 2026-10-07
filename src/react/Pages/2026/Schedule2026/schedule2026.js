import { daljitYoung } from "../KeynoteSpeaker2026/speakers2026";
import {
  alonaShevtsova,
  femiEkwuyasi,
  gayatriChadaram,
  jayAnand,
  sergioIvanovic,
} from "../DisscussionPanal2026/panelists2026";
import {
  stefanBinder,
  osmanIbrahim,
} from "../FocusSession2026/speakers2026";

const person = (source, role, designation) => ({
  name: source.name,
  role,
  designation,
  img: source.placeholder ? undefined : source.img,
  slug: source.slug,
});

export const schedule2026 = [
  {
    id: "registration",
    time: "6:00",
    meridiem: "PM",
    title: "Registration & Welcome Drinks",
  },
  {
    id: "host-remarks",
    time: "6:50",
    meridiem: "PM",
    title: "Host Remarks",
    people: [
      {
        name: "Stephen Simmons",
        role: "Host",
        designation: "Event Host, Brit FinTech Awards 2026",
        img: "/assets/img/stephen-simmons-host-new.png",
        slug: "/host/stephen-simmons",
      },
    ],
  },
  {
    id: "opening-address",
    time: "6:55",
    meridiem: "PM",
    title: "Opening Address",
    people: [
      {
        name: "Vishal Patil",
        designation: "Founder & CEO, Calyx Solutions UK Ltd",
        img: "/assets/img/bfa-legacy/vishal-patil-main.png",
      },
    ],
  },
  {
    id: "keynote",
    time: "7:00",
    meridiem: "PM",
    title: "Keynote Speaker",
    people: [person(daljitYoung, "Keynote", "CFO, Peratera UK")],
  },
  {
    id: "discussion-panel",
    time: "7:20",
    meridiem: "PM",
    title: "Discussion Panel",
    people: [
      person(alonaShevtsova, "Moderator", "CEO, Sends"),
      person(femiEkwuyasi, "Panelist", "Co-Founder & CEO, 3ribe"),
      person(gayatriChadaram, "Panelist", "Head of Compliance & MLRO, FOREN. formerly leatherback"),
      person(jayAnand, "Panelist", "Director & MLRO, Mercury Danati Ltd"),
      person(sergioIvanovic, "Panelist", "Founder & CEO, INVICTUS"),
    ],
  },
  {
    id: "refuel",
    time: "7:40",
    meridiem: "PM",
    title: "Refuelling While Networking",
  },
  {
    id: "focus-session",
    time: "7:50",
    meridiem: "PM",
    title: "Focus Session – What is High Risk?",
    people: [
      person(stefanBinder, "Co-Founder & Chairman", "Fena"),
      person(osmanIbrahim, "Director", "Kmbal Ltd"),
    ],
  },
  {
    id: "ceremony",
    time: "8:00",
    meridiem: "PM",
    title: "Brit FinTech Awards Ceremony",
  },
  {
    id: "dinner",
    time: "8:30",
    meridiem: "PM",
    title: "Dinner & Networking",
  },
];
