// Portfolio Data Configuration
// Update this file to modify your portfolio content

export const personalInfo = {
  name: "Pritom Paul",
  title: "Adjunct Faculty",
  institution: "North East University Bangladesh",
  department: "Department of Computer Science and Engineering",
  location: "Sylhet, Bangladesh",
  email: "pritompaul.cse@gmail.com",
  phone: "(+880) 1718382009",
  github: "PritomPaul99",
  linkedin: "pritompaul1920",
  introduction: `I am an Adjunct Faculty at North East University Bangladesh, specializing in Computer Science and Engineering. With a strong foundation in software engineering and machine learning, I am passionate about teaching, research, and competitive programming. My work focuses on Deep Learning, Natural Language Processing, and Computer Vision.`,
};

export const researchInterests = [
  "Machine Learning",
  "Deep Learning",
  "Large Language Model (LLM)",
  "Natural Language Processing (NLP)",
  "Artificial Intelligence (AI)",
  "Computer Vision (CV)",
  "Big Data Analysis",
];

export const currentCourses = [
  {
    semester: "Spring 2025",
    courses: [
      "Compiler Construction",
      "Compiler Construction Lab",
      "Introduction to Computer Applications",
    ],
  },
  {
    semester: "Fall 2025",
    courses: [
      "Numerical Analysis",
      "Numerical Analysis Lab",
      "Software Engineering and Design Patterns",
      "Software Engineering and Design Patterns Lab",
      "Introduction to Statistics",
      "Introduction to Computer Applications",
    ],
  },
];

export const education = [
  {
    degree: "B.Sc. (Engineering) in Computer Science and Engineering",
    institution: "North East University Bangladesh",
    location: "Sylhet, Bangladesh",
    period: "2020 - May 2024",
    cgpa: "3.71/4.00",
    details: [
      "Graduated with distinction in Computer Science and Engineering",
      "Strong focus on software engineering, machine learning, and algorithms",
      "Active member of NEUB CSE Society",
    ],
  },
];

export const currentResearch = {
  title:
    "Decoding Bangla Handwriting: Leveraging Transformers and Self-Attention for Advanced Text Recognition",
  description:
    "This research aims to advance Bangla handwritten text recognition by leveraging Transformer architectures and self-attention mechanisms to overcome the limitations of traditional CNN and RNN models. By focusing on the complex, cursive nature of Bangla script, the study proposes a method to effectively capture long-range dependencies and spatial relationships for improved accuracy. The goal is to develop a robust, data-efficient solution that facilitates the digitization of documents in low-resource languages.",
  status: "Ongoing",
  startDate: "January 2025",
};

export const researchExperience = [
  {
    title:
      "Handwritten Bangla Word Recognition Through Image-to-Sequence Extraction",
    type: "Undergraduate Thesis",
    institution: "North East University Bangladesh",
    period: "January 2023 - December 2023",
    advisor: "Tasnim Zahan",
    description:
      "Designed and trained an Image-to-Sequence OCR model for handwritten Bangla word recognition using CNN-BiLSTM architecture with CTC-based sequence decoder.",
    achievements: [
      "Built a CNN-BiLSTM architecture in Python/TensorFlow with a CTC-based sequence decoder",
      "Collected, curated, and preprocessed 19,066 handwritten samples from CMATERdb, BanglaWriting, and self-generated data",
      "Achieved accuracy of 93.71%, demonstrating strong generalization even with a modest dataset size",
    ],
    technologies: ["Python", "TensorFlow", "CNN", "BiLSTM", "CTC Loss"],
  },
];

export const projects = [
  {
    title: "TripIt",
    type: "Web Application",
    description:
      "A comprehensive travel management web application that helps users find travel destinations, book hotels, and share travel experiences through blogs.",
    features: [
      "User authentication (Login/Registration)",
      "Travel destination search and discovery",
      "Hotel booking system",
      "Travel blog platform",
      "User-friendly interface with responsive design",
    ],
    technologies: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"],
    github: "https://github.com/PritomPaul99/TripIt_SEProject",
  },
  {
    title: "Handwritten English Word Recognition",
    type: "Machine Learning Project",
    description:
      "An advanced OCR system that recognizes handwritten English words from images using deep learning techniques.",
    features: [
      "CNN-RNN hybrid architecture for sequence recognition",
      "Real-time word prediction from handwritten images",
      "High accuracy on diverse handwriting styles",
      "Preprocessing pipeline for image enhancement",
    ],
    technologies: ["Python", "CNN", "RNN", "Bi-LSTM", "CTC Loss", "TensorFlow"],
    github:
      "https://github.com/PritomPaul99/Handwritten-English-Word-Recognition-Using-CNN-RNN-Model",
  },
];

export const professionalExperience = [
  {
    title: "Adjunct Faculty",
    company: "North East University Bangladesh",
    location: "Sylhet, Bangladesh",
    period: "January 2025 - Present",
    type: "Full Time",
    responsibilities: [
      "Teach core undergraduate courses including Compiler Construction, Software Engineering and Design Patterns, Numerical Analysis, and Introduction to Statistics",
      "Instruct and mentor more than 200 students across multiple semesters, emphasizing conceptual clarity, problem-solving, and hands-on practice",
      "Develop lectures, lab modules, and assessments aligned with program objectives and industry-relevant practices",
      "Guide students in research projects and career development",
    ],
  },
  {
    title: "Software Engineer",
    company: "101 BD TECH",
    location: "Jamalpur, Bangladesh",
    period: "July 2024 - December 2024",
    type: "Full Time",
    responsibilities: [
      "Built core components of a WebRTC-powered Learning Management System for both web and desktop platforms",
      "Wrote clean, efficient code in Python and JavaScript, and improved system performance through debugging and optimization",
      "Designed scalable application modules and implemented backend integrations using SQL and NoSQL databases",
      "Maintained technical documentation, collaborated within the SDLC workflow, and managed version control using Git",
    ],
  },
];

export const volunteerExperience = [
  {
    title: "Associate Programming Instructor",
    organization: "North East University Bangladesh CSE Society",
    period: "January 2021 - December 2023",
    responsibilities: [
      "Instructed approximately 100 junior undergraduate students in programming languages (C/C++, Python), data structures, algorithms, and problem-solving",
      "Spearheaded the organization of 3-4 programming contests and actively participated in problem development",
      "Mentored students for competitive programming competitions",
    ],
  },
];

export const competitiveProgramming = [
  {
    competition: "ICPC Asia Dhaka Regional Contest",
    year: "2023",
    team: "NEUB_Believers",
    achievement: "Regional Participant",
  },
  {
    competition: "NCPC ONSITE",
    year: "2023",
    team: "NEUB_Believers",
    achievement: "National Participant",
  },
  {
    competition: "ICPC Asia Dhaka Regional Contest",
    year: "2022",
    team: "NEUB_TeamXero",
    achievement: "Regional Participant",
  },
  {
    competition: "ICPC Asia Dhaka Regional Contest",
    year: "2021",
    team: "NEUB_TeamXero",
    achievement: "Regional Participant",
  },
];

export const skills = {
  programmingLanguages: ["C/C++", "Python", "Java", "JavaScript", "PHP", "Go"],
  webDevelopment: [
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
    "React",
    "Node.js",
  ],
  machineLearning: [
    "Deep Learning",
    "Computer Vision",
    "TensorFlow",
    "Keras",
    "Scikit-learn",
    "PyTorch",
  ],
  databases: ["MySQL", "PostgreSQL", "MongoDB"],
  tools: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "LaTeX"],
};

export const standardizedTests = [
  {
    test: "International English Language Testing System (IELTS)",
    date: "08 February 2025",
    scores: {
      listening: "9.0",
      reading: "6.5",
      writing: "6.0",
      speaking: "7.0",
      overall: "7.0",
    },
  },
];

export const socialLinks = {
  github: "https://github.com/PritomPaul99",
  linkedin: "https://linkedin.com/in/pritompaul1920",
  email: "mailto:pritompaul.cse@gmail.com",
};

export const cvStatistics = [
  {
    value: "3+",
    label: "Years Experience",
  },
  {
    value: "3",
    label: "ICPC Participations",
  },
  {
    value: "5+",
    label: "National Level Contest Participations",
  },
  {
    value: "10+",
    label: "Technologies Mastered",
  },
];

export const professionalSummary = `Computer Science graduate with expertise in software engineering, machine learning, and education. Currently serving as Adjunct Faculty teaching 200+ students while exploring cutting-edge research in Natural Language Processing. Full-stack engineer with experience in building scalable web applications and real-time communication systems.`;

export const cvQuote = `Passionate about leveraging artificial intelligence to solve real-world problems and committed to nurturing the next generation of computer scientists through quality education and mentorship.`;
