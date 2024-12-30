import {
  // FaXTwitter,
  FaGithub,
  FaLinkedin,
  // FaFacebook,
  // FaDiscord,
  // FaInstagram,
} from "react-icons/fa6";

// import { RiReactjsLine } from "react-icons/ri";
// import { TbBrandNextjs } from "react-icons/tb";
// import { SiMongodb } from "react-icons/si";
// import { DiRedis } from "react-icons/di";
// import { FaNodeJs } from "react-icons/fa";
// import { BiLogoPostgresql } from "react-icons/bi";
// import { FaJava } from "react-icons/fa";
// import { SiMysql } from "react-icons/si";
// import { FaPython } from "react-icons/fa";
import R_logo from "../assets/R_logo.png";
import java_icon from "../assets/java_icon.png";
import sql_icon from "../assets/sql-database.png";
import python_icon from "../assets/python-icon.png";
import react_logo from "../assets/react-logo.png"
import { SiDevpost } from "react-icons/si";

// import image1 from "../assets/project1.jpeg";
// import image2 from "../assets/project2.jpeg";
// import image3 from "../assets/project3.jpeg";
// import image4 from "../assets/project4.jpeg";
// import image5 from "../assets/project5.jpeg";
// import image6 from "../assets/project6.jpeg";
// import image7 from "../assets/project7.jpeg";
// import image8 from "../assets/project8.jpeg";
import toaster_project from "../assets/Toasters-project.png";
import roomrival_p1 from "../assets/roomrival-project.jpg";
// import roomrival_p2 from "../assets/roomrival-project2.jpg";
import virtualprep_p from "../assets/virtualprep-project.png";
import personalPortfolio from "../assets/personal-profile.png";
import rhythmGame from "../assets/rhythmGame.png"


// import user1 from "../assets/profile-pictures/user1.jpg";
// import user2 from "../assets/profile-pictures/user2.jpg";
// import user3 from "../assets/profile-pictures/user3.jpg";
// import user4 from "../assets/profile-pictures/user4.jpg";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  firstName: "Lily ",
  lastName: "Zhang",
  // info: "Fourth year passionate Computer Science student at The University of British Columbia.",
};

export const ABOUT = {
  text1:
    "I'M PASSIONATE ABOUT DEVELOPING MY SKILLS IN SOFTWARE ENGINEERING",
  text2:
    "Hello! I'm Lily, a fourth year computer science student at The University of British Columbia with a passion for problem-solving and a deep interest in software development. I love turning complex challenges into streamlined, efficient solutions, whether it's through coding softwares, data analysis, or machine learning. My curiosity drives me to always seek to learn and grow. Beyond the classroom, I enjoy participating in hackathons and collaborating on cool projects.",
};

export const EXPERIENCE = [
  {
    title: 'Software Developer Intern',
    company: 'Tartigrade Ltd.',
    period: 'May 2024 - Aug 2024',
    // description: `Collaborate with clients to understand design requirements and objectives. 
    //   Develop branding solutions, including logos, color palettes, and brand guidelines. 
    //   Design marketing materials such as brochures, posters, and digital assets. 
    //   Create visually appealing user interfaces for websites and applications.`,
  },
  {
    title: 'Student Quantitative Analyst',
    company: 'Canada Revenue Agency',
    period: 'Sep 2023 - May 2024',
    // description: `Understood and extracted complex data from the agency data warehouse.
    // Retrieved large datasets using SQL, optimized queries for performance, and ensured data accuracy.
    // Leveraged SAS and R to perform comprehensive statistical analyses in both experimental studies and exploratory research projects.
    // Authored comprehensive preliminary and final analysis reports to articulate key findings, and shared insights with stakeholders.
    // Participated in the strategic planning and launch of a machine-learning initiative.`,
  },
  {
    title: 'Data Analyst',
    company: 'License Academy',
    period: 'Mar 2023 - Apr 2023',
    // description: `Participated in the Venture for Canada's Intrapreneurship Program with License Academy.
    // Contributed to researching possible improvements to reduce greenhouse gas emissions in indoor agriculture.
    // Analyzed data for metrics to calculate and reduce carbon footprint in Vertical Farming.`,
  },
  {
    title: 'Student, Training and Certification Development',
    company: 'Canadian Air Transport Security Authority',
    period: 'Oct 2022 - Jan 2023',
    // description: `Student, Training and Certification Development, Canadian Air Transport Security Authority 
    // Created data quality monitoring reports, and identified issues detected in LMS (Learning Management System).
    // Resolved data integrity issues and discrepancies and supported team members in creating reports.
    // Participated in acceptance testing of new content releases or LMS features.`,
  },
  

];


export const PROJECTS = [
  {
    title: "Hackathon project: Complement Giving Website",
    subtitle:
      "A full-stack website built with React, Node.js, and MappedIn.",
    image: toaster_project,
    link: "https://devpost.com/software/toasters",
  },
  {
    title: "Hackathon project: Interactive Game Website",
    subtitle:
      "A social media application developed using Next.js and Firebase.",
    image: roomrival_p1,
    link: "https://devpost.com/software/roomrival",
  },
  {
    title: "Personal Portfolio",
    subtitle:
      "A personal portfolio website designed with React, Node.js, and Tailwind.",
    image: personalPortfolio,
    link: "#",
  },
  {
    title: "Music Rhythm Game",
    subtitle: "A rhythm game with custom visuals and music built with Unity and C#.",
    image: rhythmGame,
    link: "https://www.youtube.com/watch?v=Gcul3Cpx8Pk",
  },
  {
    title: "Hackathon project: VR Interview Simulator",
    subtitle:
      "A VR simulation for interview practice built with Unity and C#.",
    image: virtualprep_p,
    link: "https://devpost.com/software/virtualprep",
  },
];

export const SKILLS = [
  {
    // icon: <FaJava className="text-4xl lg:text-6xl text-white" />,
    icon: <img src={java_icon} alt="icon" className="w-10 h-10 lg:w-16 lg:h-16" />,
    name: "Java",
    experience: "4+ year",
  },
  {
    // icon: <SiMysql className="text-4xl lg:text-6xl text-sky-700" />,
    icon: <img src={sql_icon} alt="icon" className="w-8 h-10 lg:w-14 lg:h-16 pl-1" />,
    name: "SQL",
    experience: "2+ year",
  },
  {
    // icon: <R_logo className="text-4xl lg:text-6xl text-red-600" />,
    icon: <img src={R_logo} alt="icon" className="w-10 h-9 lg:w-16 lg:h-14" />,
    name: "R",
    experience: "3+ year",
  },
  {
    // icon: <FaPython className="text-4xl lg:text-6xl text-green-600" />,
    icon: <img src={python_icon} alt="icon" className="w-10 h-10 lg:w-16 lg:h-16" />,
    name: "Python",
    experience: "1+ years",
  },
  {
    // icon: <RiReactjsLine className="text-5xl lg:text-7xl text-cyan-400" />,
    icon: <img src={react_logo} alt="icon" className="w-12 h-12 lg:w-16 lg:h-16" />,
    name: "React",
    experience: "1+ years",
  },
];

// export const ACHIEVEMENT = {
//   title: "International Hackaton - Tokyo",
//   award: "Gold Medalist - 2024",
//   description:
//     "Winner of the 2024 Algo coding representing the University of Oxford. This achievement showcases exceptional problem-solving skills and dedication. The event provided a platform to innovate and collaborate with the brightest minds, resulting in a prestigious accolade.",
// };

// export const TESTIMONIALS = [
//   {
//     name: "Emily Johnson",
//     title: "CEO, Tech Innovators",
//     quote:
//       "Working with Robert has been an incredible experience. His design sensibilities and technical expertise are top-notch, making him a valuable asset to any project.",
//     image: user1,
//   },
//   {
//     name: "Michael Lee",
//     title: "CTO, Creative Minds",
//     quote:
//       "Robert consistently delivers high-quality work, combining creativity and technical prowess. His ability to solve complex problems with elegant solutions is truly impressive.",
//     image: user2,
//   },
//   {
//     name: "Sophia Martinez",
//     title: "Lead Developer, Digital Solutions",
//     quote:
//       "Robert's dedication to his craft is evident in every project he undertakes. His innovative approach and attention to detail set him apart as a leading designer and developer.",
//     image: user3,
//   },
//   {
//     name: "Daniel Thompson",
//     title: "Project Manager, InnovateX",
//     quote:
//       "Robert's ability to understand client needs and translate them into beautiful, functional designs is remarkable. He is a true professional who always exceeds expectations.",
//     image: user4,
//   },
// ];

export const SOCIAL_MEDIA_LINKS = [
  // {
  //   href: "https://x.com/",
  //   icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  // },
  {
    href: "https://github.com/zhangLily2020",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/lily-zhang-2b80091b5/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://devpost.com/zhangLily2020?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
    icon: <SiDevpost fontSize={25} className="hover:opacity-80" />,
  },
];
