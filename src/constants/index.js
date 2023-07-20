import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    rutgers,
    threejs,
    fafj,
    noteTaker,
    coffee,
    python,
    beebe
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Full Stack Developer",
      icon: creator,
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
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Certificate, Full Stack Web Development",
      company_name: "Rutgers University",
      icon: rutgers,
      iconBg: "#383E56",
      date: "February 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
    title: "Employee",
    company_name: "Beebe Inc.",
    icon: beebe,
    iconBg: "#383E56",
    date: "October 2017 - Present",
    points: [
      "",
    ],
  },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I've known Jared for years prior to hiring him to build a website for my brand. I was shocked at his ability to creatively solve any problem that arose, and would gladly hire him for any job the required his skill set in the future.",
      name: "Kerms Hernandez",
      designation: "CEO",
      company: "FAFJ LLC.",
      image: fafj,
    },
  ];
  
  const projects = [
    {
      name: "Coffee Cravers",
      description:
        "A membership based online coffee store and subscription service app.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: coffee,
      source_code_link: "https://github.com/marchocobar/Coffee-Shop",
    },
    {
      name: "Note Taker",
      description:
        "An application used to write and save notes, to be recalled at a later time.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: noteTaker,
      source_code_link: "https://github.com/JaredIng87/note-taker",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };