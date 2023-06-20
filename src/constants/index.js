import {
  c,
  python,
  java,
  cpp,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  four,
  Mathwork,
  Cisco,
  edunet,
  weatherpedia,
  termpw,
  minipro,
  threejs,
  mhft,
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

const services = [
  {
    title: "C",
    icon: c,
  },
  {
    title: "C++",
    icon: cpp,
  },
  {
    title: "Python",
    icon: python,
  },
  {
    title: "Java",
    icon: java,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
];

const experiences = [
  {
    title: "Artificial Intelligence Intern",
    company_name: "Edunet Foundation | IBM SkillsBuild | AICTE",
    icon: edunet,
    iconBg: "#ffffff",
    date: "June 2023 - July 2023",
    points: ["Made an project on mental health fitness tracker which is a machine learning model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data."],
     },
  // {
  //   title: "SRC/CONSTANTS/EXPERIENCES ln:132",
  //   company_name: "Cisco",
  //   icon: Cisco,
  //   iconBg: "#ffffff",
  //   date: "NA 2023 - NA 2023",
  //   points: [
  //     "1",
  //     "2",
  //     "3",
  //     "4",
  //   ],
  // },
  // {
  //   title: "SRC/CONSTANTS/EXPERIENCES ln:145",
  //   company_name: "MathWorks",
  //   icon: Mathwork,
  //   iconBg: "#ffffff",
  //   date: "NA 2023 - NA 2023",
  //   points: [
  //     "1",
  //     "2",
  //     "3",
  //     "4",
  //   ],
  // },
  // {
  //   title: "SRC/CONSTANTS/EXPERIENCES ln:158",
  //   company_name: "four",
  //   icon: four,
  //   iconBg: "#ffffff",
  //   date: "NA 2023 - NA 2023",
  //   points: [
  //     "1",
  //     "2",
  //     "3",
  //     "4",
  //   ],
  // },
];

// const testimonials = [
//   {
//     testimonial:
//       "XYZ",
//     name: "John Doe",
//     designation: "Human",
//     company: "123 Enterprises",
//     image: "Image Link",
//   },
//   {
//     testimonial:
//       "XYZ",
//     name: "John Doe",
//     designation: "Human",
//     company: "456 Enterprises",
//     image: "Image Link",
//   },
//   {
//     testimonial:
//       "XYZ",
//     name: "John Doe",
//     designation: "Human",
//     company: "789 Enterprises",
//     image: "Image Link",
// }
// ]

const projects = [
  {
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap 5.3.0",
        color: "pink-text-gradient",
      },
      {
        name: "Weather API by API Ninjas",
        color: "yellow-text-gradient",
      },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: termpw,
    source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Jupyter Noteook",
        color: "green-text-gradient",
      },
      {
        name: "Regression Algorithm's",
        color: "pink-text-gradient",
      },
    ],
    image: mhft,
    source_code_link: "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  },
  {
    name: "Mini Projects",
    description:
      "A collection of mini projects i did in my 1st year of college.",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "white-text-gradient",
      },
    ],
    image: minipro,
    source_code_link: "https://github.com/lohitkolluri/Mini-Projects",
  },
];

export {
  services,
  technologies,
  experiences,
  // testimonials,
  projects,
};
