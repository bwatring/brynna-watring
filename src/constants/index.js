import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Java", icon: java },
  { title: "Python", icon: python },
  { title: "JavaScript", icon: javascript },
  { title: "ReactJS", icon: reactjs },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Software Engineer Analyst",
    company_name: "Accenture Federal Services",
    icon: eduskill,
    iconBg: "#161329",
    date: "Sep 2023 - Current",
    points: [
      "Acquired hands-on knowledge of building Restful API utilizing Sprint Boot with a microservice archietecture.",
      "Wrote 100+ Junit4 unit tests for existing transform/service layers of code that ensured functionality and compliance.",
      "Gained a solid foundation in implementing sophisticated algorithms and data structures in complex systems.",
    ],
  },
  {
    title: "DevOps Intern",
    company_name: "UTSA",
    icon: mathwork,
    iconBg: "#161329",
    date: "January 2023 - May 2023",
    points: [
      "Configured and Automated powershell script processes using Powershell and YML files.",
      "Acquired practical skills in automating tasks.",
      "Performed desktop configurations, system imaging, shell scripting, software license servers, and active directory modifications.",
    ],
  },
];

export const projects = [
  {
    name: "Rowdy2023",
    description:
      "Web-based application that tells the user what to wear based on weather information for their location by entering it in the search field",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/bwatring/Rowdy2023",
  },
  {
    name: "Middleware",
    description:
      "An API made from scratch that grabs PDF files from a blackbox, contains cronjob that automated this as well.",
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
      { name: "PHPMyAdminSQL", color: "blue-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/bwatring/Middle",
  },
  {
    name: "SmartLocke",
    description:
      "SmartLocky is a project that will automatically unlock a user if they are locked out without prompting again, and let the tech user know whether they were locked out or not and what kind of lockout that user is experiencing.",
    tags: [
      { name: "Powershell", color: "blue-text-gradient" },
      { name: "Power Automate", color: "green-text-gradient" },
      { name: "Gitlab", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/bwatring/smartlocke",
  },
];
