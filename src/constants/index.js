import project1 from "../assets/projects/YouTube.jfif";
import project2 from "../assets/projects/GameEngine.jpg";
import project3 from "../assets/projects/Depression.jpg";
import project4 from "../assets/projects/TimeTable.png";
import project5 from "../assets/projects/Cache.png";
import { RiReactjsLine } from "react-icons/ri";
import { FaC } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { FaSalesforce } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandRedux } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaJenkins } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiJfrog } from "react-icons/si";
import { SiInformatica } from "react-icons/si";
import { SiSonarqube } from "react-icons/si";
import { FaPython } from "react-icons/fa";

export const HERO_CONTENT = `I am a passionate software developer with a knack for solving complex business usecases with efficient and scalable solution. With 3 years of hands-on experience, I have honed my skills in Salesforce Development as well as Custom App Development. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and competent software developer with a passion for solving real world problems. With 3 years of professional experience, I have worked with a variety of technologies, including Salesforce, Apex, LWC, React, Java, Jenkins, Informatica. My Journey in the software world began as an intern at Qualcomm and delved into various technologies, delivering complex solutions across different Business Domains. Fascinated about how the technology evolves overtime and systems interact with each other at scale.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Programmer Analyst",
    company: "Qualcomm India Pvt. Ltd.",
    description: `
    •	Revamped and migrated an entire application for the HW Management team resulting in streamlined process, <b></b>80%</b> increased efficiency, sophisticated UI and additional features from its previous version.<br />
    •	Scaled the Salesforce DevOps solution to onboard <b>3 Projects in 2024</b> and has successfully delivered more that <b>30+ sprints</b> across Application, enhancing the process of development and making sure that code with  <b>50%</b> better Quality and <b>< 3% Technical Debt</b> goes into Productions<br/>
    •	Developed integrations to streamline data between systems, automated business processes, book keeping activities resulting in <b>90% decrease in person hours</b> and significant cost savings.<br/>
    •	Worked on major Enhancements for the Export Compliance, HW Management Applications to be compliant with new US regulations and onboard latest features respectively.<br/>
`,
    technologies: [
      "Salesforce.com",
      "Apex",
      "LWC",
      "JavaScript",
      "DevOps",
      "SQL",
      "Jenkins",
      "Informatica",
      "SonarQube",
    ],
  },
  {
    year: "2021 - 2023",
    role: "Associate Programmer Analyst",
    company: "Qualcomm India Pvt. Ltd.",
    description: `
    •	Orchestrated the architecture of Salesforce DevOps, crafting CI/CD pipelines to streamline salesforce development. Integrated multiple 3rd party tools for enhanced process and potential to significantly reduce manual labor by over <b>1000+ hours</b> and achieve cost savings totaling <b>$80,000 annually</b>.<br/>
    •	Involved in Legal Projects which included complex business requirements, developed components both on Salesforce platform and its experience portal, performed end-to-end unit testing for QTL applications.
    `,
    technologies: [
      "Salesforce.com",
      "Apex",
      "DevOps",
      "SQL",
      "Jenkins",
      "Informatica",
    ],
  },
  {
    year: "2021",
    role: "Interim Intern",
    company: "Qualcomm India Pvt. Ltd.",
    description: `Worked on Learning Salesforce and built a Recruitment Application using all the concepts of Salesforce like Apex, SOQL, Triggers, LWC, VF Pages and also supported in resolving a production level defect.`,
    technologies: ["Salesforce.com", "Apex", "LWC", "SQL", "VF Pages"],
  },
];

export const PROJECTS = [
  {
    title: "YouTube Clone",
    image: project1,
    description:
      "Developed a YouTube clone, with functional components, compact UI and real-time data fetched from Rapid API implementing basic video streaming and search ability, exploring various concepts of React.js",
    technologies: ["React.js", "Material UI", "Rapid API", "Redux"],
    liveURL: "https://ash-youtube.netlify.app/",
    githubURL: "https://github.com/akshay4570/Youtube-2.0",
    publicationURL: "",
  },
  {
    title: "Game Engine",
    image: project2,
    description:
      "Engineered a scalable Tic-Tac-Toe game engine that adheres to software engineering principles, integrated a smartness to the opponents move based on the situation of the board making it choose optimal move against the user",
    technologies: ["OOPS", "Design Patterns", "Java", "Maven"],
    liveURL: "",
    githubURL: "https://github.com/akshay4570/GameEngine",
    publicationURL: "",
  },
  {
    title: "Deep Learning Based Detection of Depression",
    image: project3,
    description:
      "Led a Team of four in building a solution to detect depression from Social Media Sites(Twitter) and classify them into different categories with an accuracy of >90%, prepared Design Documents, SRS.",
    technologies: [
      "Python",
      "Software Engineering",
      "Machine Learning",
      "Deep Learning",
    ],
    liveURL: "",
    githubURL: "https://github.com/akshay4570/Final_Year_Project",
    publicationURL:
      "https://drive.google.com/file/d/1CgdAp0-7tYDdfIS0wRZCNdzfU3b2xWJk/view?pli=1",
  },
  {
    title: "Time Table Generation",
    image: project4,
    description:
      "Generating a Time Table across different semesters keeping in mind the constraints and resources at our disposal,An NP-Hard solution with optimized and randomized results.",
    technologies: ["Python", "Heuristic Algorithms", "NP-Hard"],
    liveURL: "",
    githubURL: "https://github.com/akshay4570/Automated-Time-Table-Generation",
    publicationURL: "",
  },
  {
    title: "Distributed Cache",
    image: project5,
    description:
      "Designed a distributed cache using Advanced Java, explore concurrent scenarios adhering to SOLID Principles, Software Engineering, implementing design patterns. Explored eviction algorithms, hot loading, request collapsing concepts",
    technologies: ["Java", "Design Patterns", "Distributed Systems", "LLD"],
    liveURL: "",
    githubURL: "https://github.com/akshay4570/Distributed-Cache",
    publicationURL: "",
  },
];

export const CONTACT = {
  address: "",
  phoneNo: "+91 9513894695",
  email: "akshay4570@gmail.com",
};

export const LINKEDIN_HANDLE = `https://www.linkedin.com/in/akshay-hegde-4570/`;

export const GITHUB_HANDLE = `https://github.com/akshay4570`;

export const INSTAGRAM_HANDLE = `https://www.instagram.com/akshayhegde4570/`;

export const RESUME_URL = `https://drive.google.com/file/d/1RdS7obHVK1ZLuwp6XoCSqjB65_haigl3/view?usp=sharing`;
export const TECHNOLOGY = [
  {
    name: RiReactjsLine,
    color: "text-cyan-400",
  },
  {
    name: FaC,
    color: "text-blue-400",
  },
  {
    name: TbBrandCpp,
    color: "text-blue-400",
  },
  {
    name: FaSalesforce,
    color: "text-blue-500",
  },
  {
    name: FaJava,
    color: "text-orange-600",
  },
  {
    name: IoLogoJavascript,
    color: "text-yellow-400",
  },
  {
    name: FaPython,
    color: "text-blue-400",
  },
  {
    name: FaHtml5,
    color: "text-orange-600",
  },
  {
    name: FaCss3Alt,
    color: "text-blue-500",
  },
  {
    name: TbBrandRedux,
    color: "text-purple-500",
  },
  {
    name: SiMysql,
    color: "text-blue-400",
  },
  {
    name: FaGitAlt,
    color: "text-orange-800",
  },
  {
    name: FaGithub,
    color: "text-black-400",
  },
  {
    name: FaJenkins,
    color: "text-red-500",
  },
  {
    name: FaDocker,
    color: "text-blue-500",
  },
  {
    name: SiJfrog,
    color: "text-green-400",
  },
  {
    name: SiInformatica,
    color: "text-orange-600",
  },
  {
    name: SiSonarqube,
    color: "text-blue-400",
  },
];
