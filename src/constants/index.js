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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Learning Backend",
      icon: backend,
    },
    {
      title: "Competitive Programmer",
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
      title: "React.js Developer",
      company_name: "NIT-Silchar",
      icon: 'https://res.cloudinary.com/dludtk5vz/image/upload/v1720794319/wuk5kvddessaghakqdva.png',
      iconBg: "#383E56",
      date: "Jan 2024 - Current",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with UI/UX members to create and implement the design with exact prototype.",
        "Implementing responsive design and making it adaptable to every screens."
        
      ],
    },
    {
      title: "Competitive Programming",
      company_name: "NIT-Silchar",
      icon: 'https://res.cloudinary.com/dludtk5vz/image/upload/v1720794911/qmnxyrfzv6cqzy4c80gv.png',
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Current",
      points: [
        "Learning Data Structures and Algorithms necessary for Competitive Programming.",
        "Participating in Competitive Programming contests conducted by Codeforces and Atcoder.",
        "Have a rating of 800 in codeforces.",
        
      ],
    },
    {
      title: "Web Developer",
      company_name: "NITS-MUN",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jul 2023 - Current",
      points: [
        "Developing the NITS-MUN current website with technical team.",
        "Collaborating with UI/UX members to create the website.",
        "Gaining expertise on Javascript Frameworks like reactjs, next js.",
        
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "",
      icon: 'https://res.cloudinary.com/dludtk5vz/image/upload/v1720795354/etajnxa4ggb0cei9h3lg.png',
      iconBg: "#E6DEDD",
      date: "Apr 2024 - Present",
      points: [
        "Looking to learn backend using express.js.",
        "Participated in various hackathons organised by college and other insitutuions.",
        "Looking to learn android development.",
      
      ],
    },
    {
      title: "Junior Flutter Developer",
      company_name: "Google Developers Group On Campus, NIT Silchar",
      icon: 'https://res.cloudinary.com/dludtk5vz/image/upload/v1731601822/GDGC_logo_wpgfwv.jpg',
      iconBg: "#E6DEDD",
      date: "Sep-2024 - Present",
      points: [
        "Learning and doing projects in Flutter.",
        "Diving into mobile applications and creating amazing UI.",
        "Learning backend using Dart Programming Language.",
      
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
      name: "DOUVT Hub",
      description:
        "Web-based platform that allows users to search, for any doubts and instant solution in the form of text, video is given by an expert.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: 'https://res.cloudinary.com/dludtk5vz/image/upload/v1720770815/ymjmhdmjfginkkc00rab.png',
      source_code_link: "https://github.com/SubhaNITS150/DouVT-Hub",
    },
    {
      name: "Restaurant Wesbite",
      description:
        "Web application that enables users to search for food items and book their orders to enjoy premium meals and dinner.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: 'https://res.cloudinary.com/dludtk5vz/image/upload/v1720770023/cxao50i6kwyjvzamwcbw.png',
      source_code_link: "https://github.com/SubhaNITS150/Restaurant_Website",
    },
    {
      name: "3D Portfolio",
      description:
        "A 3D portfolio project built after learning Three js and implementing cool animations from aceternity ui and framer motion.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: 'https://res.cloudinary.com/dludtk5vz/image/upload/v1720770761/bnqcvda2272bimpzuuas.png',
      source_code_link: "https://github.com/SubhaNITS150/React-Project",
    },
    {
      name: "ScreenSage",
      description:
        "Hackathon Project, An amazing web application designed to reduce the screen time of children.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "nlp",
          color: "pink-text-gradient",
        },
        {
          name: "sass",
          color: "green-text-gradient",
        },
      ],
      image: 'https://res.cloudinary.com/dludtk5vz/image/upload/v1731602348/Image2_zh7r30.jpg',
      source_code_link: "https://github.com/deepanshu089/NH-Directionless",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  