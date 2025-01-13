export const bio = [
  "Hello! I'm Serigne Diaw, a data scientist with experience applying machine learning and natural language processing to improve healthcare systems and conduct neuroscience research.",
  "Currently pursuing a Master's in Data Science at the University of San Francisco, I leverage analytical skills to drive impactful solutions across industries.",
  "Thanks for visiting!",
];

export const skills = [
  {
    title: "Technical Skills",
    skillName: [
      "Python",
      "SQL",
      "GitHub",
      "HTML",
      "Bootstrap",
      "VS Code",
      "Chrome DevTools"
    ]
  }
  // {
  //   title: "Frameworks/Libraries",
  //   skillName: "Angular, RxJS, NGRX/NGXS",
  //   color: "6",
  //   percentage: "70",
  // },
  // {
  //   title: "Design",
  //   skillName: "HTML, Bootstrap, Tailwind",
  //   color: "4",
  //   percentage: "70",
  // },
  // {
  //   title: "Tools",
  //   skillName: "Debugging, Chrome DevTools",
  //   color: "3",
  //   percentage: "80",
  // },
//   {
//     title: "Analytics",
//     skillName: "CleverTap, Countly",
//     color: "5",
//     percentage: "50",
//   },
//   {
//     title: "IDE",
//     skillName: "VS Code",
//     color: "6",
//     percentage: "70",
//   },
];

export const projects = {
  MLProjects: [
    {
      projectName: "Football Tracking",
      image: "images/programmingdiaries.png",
      summary:
        "Created a football tracking system to track the movement of players, referees, goalkeepers, and the ball on a field.",
      preview: "https://programmingdiaries.herokuapp.com/",
      techStack: ["Python", "YOLOv8", "Roboflow", "SIGLIP", "UMAP"],
    },
    // {
    //   projectName: "Find Your Bank",
    //   image: "images/findyourbank.png",
    //   summary:
    //     "Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
    //   preview: "https://clever-fermi-0d5d76.netlify.app",
    //   techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
    // },
    // {
    //   projectName: " Portfolio",
    //   image: "images/portfolio.png",
    //   summary:
    //     "Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
    //   preview: "https://github.com/vinaysomawat/Travographer-Portal",
    //   techStack: ["HTML", "Bootstrap", "JavaScript"],
    // },
    // {
    //   projectName: "Resume Builder",
    //   image: "images/resume-builder.png",
    //   summary:
    //     "Browser based editor to build and download Resumes in a customizable templates.",
    //   preview: "https://vinaysomawat.github.io/Resume-Builder",
    //   techStack: ["HTML", "Bootstrap", "JavaScript"],
    // },
  ],
  // softwareProjects: [
  //   {
  //     projectName: "Pizza Ordering ChatBot",
  //     image: "images/pizzaorderchatbot.png",
  //     summary:
  //       "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
  //     preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
  //     techStack: ["Dailogflow", "Firebase"],
  //   },
  //   {
  //     projectName: "WhatsApp-Bot",
  //     image: "images/whatsappbot.jpg",
  //     summary:
  //       "Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
  //     preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
  //     techStack: ["Selenium", "Chrome Webdriver", "Python"],
  //   },
  //   {
  //     projectName: "Bill Generator",
  //     image: "images/billgenerator.png",
  //     summary:
  //       "GUI to transfer data to excel sheets and generate bills on the local shops.",
  //     preview: "https://github.com/vinaysomawat/Bill-Generator",
  //     techStack: ["Tkinter", "Openxlpy", "Python"],
  //   },
  // ],
  // androidProjects: [
  //   {
  //     projectName: "NITW-CSE",
  //     image: "images/nitwcse.jpg",
  //     summary:
  //       "The Application display details of Department courses, reference books, research, publication and faculty profile.",
  //     preview: "https://github.com/vinaysomawat/NITW-CSE",
  //     techStack: ["JAVA", "XML", "Android"],
  //   },
  //   {
  //     projectName: "CareerHigh-App",
  //     image: "images/carrerhigh.png",
  //     summary:
  //       "The Application display the webpages of website careerhigh.in in android devices.",
  //     preview: "https://github.com/vinaysomawat/CareerHigh-Android",
  //     techStack: ["JAVA", "XML", "Android"],
  //   },
  // ],
  // freelanceProjects: [
  //   {
  //     projectName: "SnylloAir.com",
  //     image: "images/snylloair.png",
  //     summary:
  //       "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
  //     preview: "https://www.snylloair.com/",
  //     techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
  //   },
  //   {
  //     projectName: "Delivery+",
  //     image: "images/AM-Logo-.png",
  //     summary: "Android Application to display website in android devices.",
  //     preview:
  //       "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
  //     techStack: ["Android", "JAVA", "Play Store"],
  //   },
  // ],
};

export const experience = [
  {
    title: "Qventus Inc.",
    duration: "October 2024 - Present",
    subtitle: "Data Scientist",
    details: [
      `As an intern, applying and natural language processing and LLM techniques to cluster 
        and map variations in clinical procedure names across different hospitals.`,
      `Using Python for data preprocessing, feature engineering, and building models; 
        SQL for large-scale data exploration and extraction of procedure orders.`,
      `Analyzing the impact of procedure order groupings on clinical predictions like patient discharge timelines and post-
        acute care needs, improving model accuracy and operational insights`

    ],
    tags: ["Python", "SQL", "NLP", "LLMs"],
    icon: "truck",
  },
  {
    title: "UC Davis Center for Neuroscience",
    duration: "June 2022 - Jun 2024",
    subtitle: "Data Analyst",
    details: [
      `Involved with all steps of the data collection and analysis pipeline for an EEG project that examined spatial memory
        in 8 intracranial patients.`,
      `Used knowledge of Python, MATLAB, Pandas, etc. to construct programs for the collection, cleaning and
        preprocessing of data from over 400 electrodes implanted in the brain.`,
      `Visualized patient performance on our behavioral navigation task using Matplotlib and conducted paired-t tests to
        compare performance across total trials.`,
      `Examine hippocampal-prefrontal cortex interactions during memory encoding and retrieval with the application of
        Logistic Regression on over 5000 data trials.`
    ],
    tags: [
      "Python",
      "GitHub",
      "Pandas",
      "Numpy",
      "Matplotlib",
      "Logistic Regression",
    ],
    icon: "heartbeat",
  },
  // {
  //   title: "Novopay Solutions Private Limited",
  //   duration: "June 2020 - April 2022",
  //   subtitle: "Software Engineer",
  //   details: [
  //     `Implemented AePS Services, including Bio-metric eKYC, Cash Withdrawal, Balance Enquiry, Mini-Statements,
  //           and Money transfer.`,
  //     `Implemented QR Code integration for retailer wallet money loading, Clevertap events for user action tracking,
  //           Freshdesk ticketing, Chatbot services, and Retailer onboarding/admin interfaces.`,
  //     `Developed retailer QR code system for seamless money loading into wallets, resulting in improved user transactions.`,
  //     `Achieved 70 percent code coverage of the entire application by writing unit tests for legacy code.`,
  //   ],
  //   tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
  //   icon: "qrcode",
  // },
  // {
  //   title: "ThinkPedia LLP",
  //   duration: "May 2019 - June 2019",
  //   subtitle: "SDE Intern",
  //   details: [
  //     `Developed a customer web application for social media management, supporting the advertisement domain.`,
  //   ],
  //   tags: ["JavaScript", "Angular", "Bootstrap", "Java", "Spring Boot"],
  //   icon: "group",
  // },
];

export const education = [
  {
    title: "M.S. in Data Science",
    duration: "2024 - 2025",
    subtitle: "University of San Francisco",
    details: [],
    tags: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Relational Databases",
      "Probability and Statistics",
      "Deep Learning",
      "Cloud Computing",
    ],
    icon: "graduation-cap",
  },
  {
    title: "B.S. in Computational Cognitive Science",
    duration: "2018 - 2022",
    subtitle: "University of California, Davis",
    details: [],
    tags: ["Data Structures & Algorithms", "Programming & Problem Solving", "Calculus", "Linear Algebra"],
    icon: "book",
  },
];

export const footer = [
//   {
//     label: "Dev Profiles",
//     data: [
//       {
//         text: "Stackoverflow",
//         link: "https://stackoverflow.com/users/8461233/vinay-somawat",
//       },
//       {
//         text: "GitHub",
//         link: "https://github.com/vinaysomawat",
//       },
//       {
//         text: "LeetCode",
//         link: "https://leetcode.com/somawatvinay/",
//       },
//     ],
//   },
//   {
//     label: "Resources",
//     data: [
//       {
//         text: "Enable Dark/Light Mode",
//         func: "enableDarkMode()",
//       },
//       {
//         text: "Print this page",
//         func: "window.print()",
//       },
//       {
//         text: "Clone this page",
//         link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
//       },
//     ],
//   },
  {
    label: "Links",
    data: [
    //   {
    //     text: "Linkedin",
    //     link: "https://www.linkedin.com/in/vinaysomawat/",
    //   },
    //   {
    //     text: "Twitter",
    //     link: "https://twitter.com/thesigmakid",
    //   },
      // {
      //   text: "Buy me a coffee",
      //   link: "https://www.buymeacoffee.com/r194dME8y",
      // },
      {
        text: "Github/serignediaw99.github.io",
        link: "https://github.com/serignediaw99/serignediaw99.github.io",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Made with &hearts; by Vinay Somawat.",
      "&copy; No Copyrights. Feel free to use this template.",
    ],
  },
];
