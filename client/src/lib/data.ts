export interface ProjectType {
  id: string;
  title: string;
  date: string;
  shortDescription: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    github?: string;
    demo?: string;
    website?: string;
    link?: string;
  };
}

export interface HackathonType {
  title: string;
  date: string;
  achievement: string;
  details: string[];
}

export interface AchievementType {
  title: string;
  details?: string[];
}

export const projectsData: ProjectType[] = [
  {
    id: "project1",
    title: "Karz",
    date: "April 2025",
    shortDescription:
      "P2P lending platform & alternative credit score calculator",
    description:
      "Developed an Alternative credit score calculator and P2P lending platform using Spring Boot (Java), MongoDB, and React, DSA. Contributed to backend development and database design, implementing core logic for credit evaluation and user data handling.",
    image:
      "https://images.unsplash.com/photo-1705313381918-b394c4761d37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cDJwJTIwbGVuZGluZyUyMGFuZCUyMGFsdGVybmF0aXZlJTIwY3JlZGl0JTIwc2NvcmV8ZW58MHx8MHx8fDA%3D",
    technologies: ["Spring Boot", "Java", "MongoDB", "React", "DSA"],
    links: {
      github: "https://github.com/ahirevaishnavi2/Karz",
      demo: "https://drive.google.com/file/d/1OpMfu6o3jy3T9T68NWmWe1jx4fYYr-Al/view",
    },
  },
  {
    id: "project2",
    title: "PhantomKit",
    date: "April 2025",
    shortDescription: "Magical Vision Toolkit for image processing",
    description:
      "Developed using Python and OpenCV for real-time image processing and visual recognition. Features include Harry Potter–inspired invisibility cloak, sentiment analysis, real-time object detection.",
    image:
      "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?auto=format&fit=crop&q=80&w=1412&ixlib=rb-4.0.3",
    technologies: ["Python", "OpenCV", "Computer Vision"],
    links: {
      github: "https://github.com/ahirevaishnavi2/PhantomKit",
    },
  },
  {
    id: "project3",
    title: "Ekara",
    date: "March 2025",
    shortDescription: "NGO stakeholder management platform",
    description:
      "Developed a MERN stack (MongoDB, Express.js, React, Node.js) platform for Ishanya India Foundation NGO to manage stakeholders efficiently as a part of Code To Give Hackathon.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
    technologies: ["MERN Stack", "MongoDB", "Express.js", "React", "Node.js"],
    links: {
      github: "https://github.com/ahirevaishnavi2/Ekara",
      website: "https://team-6-ekara-ishanya.vercel.app/",
      demo: "https://drive.google.com/file/d/1OpMfu6o3jy3T9T68NWmWe1jx4fYYr-Al/view?usp=drive_link",
    },
  },
  {
    id: "project4",
    title: "StegoCrypt",
    date: "Dec 2024 - Jan 2025",
    shortDescription: "Image-Based Cryptographic Steganography",
    description:
      "Developed a pixel-based steganography technique to hide encrypted messages within images using Java. Implemented custom pixel manipulation for data embedding and retrieval, ensuring confidentiality.",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
    technologies: ["Java", "Steganography", "Cryptography"],
    links: {
      github: "https://github.com/ahirevaishnavi2/StegoCrypt",
    },
  },
  {
    id: "project5",
    title: "ZeroHunger's Book",
    date: "Jan 2024 - April 2024",
    shortDescription: "Food redistribution platform",
    description:
      "Built a Java Swing-based platform with SQL integration for efficient food redistribution.",
    image:
      "https://images.unsplash.com/photo-1488330890490-c291ecf62571?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
    technologies: ["Java Swing", "SQL"],
    links: {
      github: "https://github.com/ahirevaishnavi2/ZeroHunger-sBook",
    },
  },
  {
    id: "project6",
    title: "File Compression and Decompression",
    date: "Sep 2024 - Nov 2024",
    shortDescription: "Multi-algorithm file compression system",
    description:
      "A Java-based DSA project implementing Huffman, LZW, and Quadtree algorithms for file compression and decompression.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
    technologies: ["Java", "DSA", "Algorithms"],
    links: {
      github:
        "https://github.com/VaishnaviAhire/FileCompressionAndDecompression",
    },
  },
];

export const hackathonsData: HackathonType[] = [
  {
    title: "Morgan Stanley Code to Give Hackathon",
    date: "Mar 2025",
    achievement: "Finalist",
    details: [
      "Selected among 143 finalists among 40,000+ students worldwide",
      "Developed a MERN stack platform for Ishanya India Foundation NGO to manage stakeholders efficiently",
    ],
  },
  {
    title: "Katalyst Tech Fest 2025",
    date: "Mar 2025",
    achievement: "Runner Up",
    details: [
      "Achieved 2nd place in the Tech Talk competition",
      "Presented a talk on 'DeepSeek vs Chatgpt : Precision vs Perception'",
    ],
  },
  {
    title: "Amazon Sambhav Hackathon 2024",
    date: "Nov 2024 - Dec 2024",
    achievement: "Ideation Winner",
    details: [
      "Ranked among the Top 14 teams out of 1,00,000+ teams in the ideation phase",
      "Developed a shop integration API for Amazon's multi-Channel Fulfillment using Beehive Model",
    ],
  },
  {
    title: "Infosys Springboard Ideathon",
    date: "June 2024 - Aug 2024",
    achievement: "Winner",
    details: [
      "Led with a  team in designing an AI-driven co-curricular education platform",
    ],
  },
  {
    title: "Katalyst Tech Fest 2024",
    date: "June 2024 - Aug 2024",
    achievement: "3rd Place",
    details: ["Achieved 3rd place in the Tech Quiz competition"],
  },
  {
    title: "JPMorgan Chase GenTech Hackathon",
    date: "Sep 2024",
    achievement: "Top 5",
    details: [
      "Designed an innovative solution addressing the social cause of Quality Education within a 3-hour challenge window",
    ],
  },
];

export const achievementsData: AchievementType[] = [
  {
    title: "BNY Career Catalyst 25 Mentee",
  },
  {
    title: "Reliance Foundation Scholar 2024",
  },
  {
    title: "Katalyst Scholar 2024",
  },
  {
    title: "Grace Hopper Celebration Scholarship",
  },
];
