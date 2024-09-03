import {
    mobile,
    backend,
    creator,
    web,
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
    starbucks,
    tesla,
    carrent,
    jobit,
    tripguide,
    threejs,
    etask,
    netflix,
    x,
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Database",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "System Engineer",
      company_name: "Global Computers",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Aug 2019 - Jan 2022",
      points: [
        "Collaborate with customers to define system requirements and objectives.",
        "Monitor system performance and troubleshoot issues to ensure high availability and optimal performance.",
        "Integrate new systems and technologies into existing infrastructure.",
       
      ],
    },
    {
      title: "Project Assistant",
      company_name: "IIT Kanpur",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Aug 2023",
      points: [
        "Project Coordination: Assist project managers in coordinating project activities, schedules, and resources to ensure smooth execution from initiation to completion.",
        "Documentation: Maintain accurate and up-to-date project documentation, including project plans, schedules, meeting minutes, and progress reports.",
        "Communication: Facilitate communication among project team members, stakeholders, and external partners by disseminating relevant information, scheduling meetings, and managing correspondence.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Portfolio",
      description:
        "Created a personal portfolio website to highlight my front-end development skills and projects. The site features a responsive design and showcases my work with HTML, CSS, JavaScript, and React, including a project gallery, contact form, and blog section.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Devang0812/portfolio",
    },
    {
      name: "Music Player",
      description:
        "Developed a music player as a personal project using HTML, CSS, and JavaScript. The application features a sleek, user-friendly interface that allows users to play, pause, and navigate through their music library, providing an intuitive and engaging listening experience.",
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
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Devang0812/MusicPlayer-",
    },
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
   
    {
      name: "e-Task",
      description:
        "Built eTask, a to-do list app using React, Tailwind CSS, and JavaScript. It features a clean, responsive design for managing tasks with capabilities to add, edit, and delete items.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "taiwind",
          color: "green-text-gradient",
        },
        {
          name: "javaScript",
          color: "pink-text-gradient",
        },
      ],
      image: etask,
      source_code_link: "https://github.com/Devang0812/Taskmanager-",
    },
    {
      name: "Netflix ",
      description:
        "Developed a clone of the Netflix home page using HTML, CSS, and JavaScript. The project replicates the layout and design of the original page, featuring a responsive interface and interactive elements for browsing and previewing content.",
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
          name: "javaScript",
          color: "pink-text-gradient",
        },
      ],
      image: netflix,
      source_code_link: "https://github.com/Devang0812/Netflix-",
    },
    {
      name: "Twitter ",
      description:
        "Built a Twitter clone using React and Tailwind CSS. The project features a responsive and interactive user interface. Utilized React for dynamic state management and Tailwind CSS for modern, responsive styling.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "javaScript",
          color: "pink-text-gradient",
        },
      ],
      image: x,
      source_code_link: "https://github.com/Devang0812/twitter",
    },

  ];
  
  export { services, technologies, experiences, testimonials, projects };