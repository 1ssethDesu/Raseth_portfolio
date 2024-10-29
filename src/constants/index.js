import project1 from "../assets/projects/project-1.jpg";
import project3 from "../assets/projects/project-3.jpg";
import Research from "../assets/research.pdf"

export const HERO_CONTENT = `As a data science enthusiast, I’ve developed a solid foundation in data analytics, machine learning, and AI. My career focus is on solving real-world problems by using technologies like Python, R, SQL, Tableau, and TensorFlow. I’ve worked on projects that involve building machine learning models for dental disease detection and conducting research to support SMEs in Cambodia. I am eager to apply my skills in data science to create impactful, innovative solutions that drive growth and efficiency across industries.`;
export const ABOUT_TEXT = `I’m Chhort Chhorraseth, a 3rd-year Data Science and AI Engineering student at CamTech University. I am a dedicated junior Data Science student with a strong foundation in data analytics, machine learning, and data visualization. Skilled in programming languages like Python, R, and SQL, I am passionate about turning data into actionable insights. With experience in research projects and internships, I aim to develop innovative solutions and deepen my knowledge in AI and advanced machine learning models. Eager to learn and collaborate, I strive to make an impact in both academic and real-world data science applications.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Research Junior Officer",
    company: "Angkor Social Innovation Park",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Excel Sheet", "Google docs", "Canvas", "Notion"],
  },
  {
    year: "2023 - 2024",
    role: "Student",
    company: "STEP IT Academy",
    description: `Fully studying on Web Development course using laravel framework, phpMyAdmin for storing database, and build a hotel management project along the way`,
    technologies: ["HTML", "CSS", "Laravel", "mySQL"],
  },
  {
    "year": "2022 - 2023",
    "role": "University Freshman in Data Science",
    "company": "CamTech University",
    "description": "As part of a school internship project, I collaborated with a team of four to develop 'Denteeth,' a machine learning model designed to detect dental diseases and facilitate connections between patients and dentists. We utilized TensorFlow to build and train the model, aiming to make dental diagnostics more accessible.",
    "technologies": ["Python", "TensorFlow"]
  },
  
  {
    year: "2021 - 2022",
    role: "Elite Student's Honor Roll",
    company: "Paññāsāstra International School (PSIS) - Phnom Penh, Cambodia",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    "technologies": [""]
  },
];

export const PROJECTS = [
  {
    title: "Research Paper",
    image: project1,
    description:
      "Conducting a research paper focused on customer behavior toward online shopping platforms and e-commerce in Cambodia landscape.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link: Research
  
  },
 
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    link: 'https://github.com/1ssethDesu/Raseth_portfolio'
  },
];

export const CONTACT = {
  address: "Phnom Penh, Cambodia ",
  phoneNo: "+855 98-747-070 ",
  email: "chhortchhoraseth@gmail.com",
};
