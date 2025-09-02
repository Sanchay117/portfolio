export const siteConfig = {
    name: "Sanchay Singh",
    title: "Junior Year Computer Science Student",
    description: "Portfolio website of Sanchay Singh",
    accentColor: "#1d4ed8",
    social: {
        email: "sanchay072@gmail.com",
        linkedin: "https://linkedin.com/in/sanchay-the-great",
        github: "https://github.com/Sanchay117",
    },
    aboutMe:
        "I'm a Computer Science undergraduate who enjoys building software, solving problems, and exploring new ideas through code.I've worked on a variety of projects, from games and applications to more technical explorations.\n\nAlongside development, I'm also interested in research in areas like machine learning and AI. I like experimenting with concepts, reading papers, and turning ideas into small prototypes that help me understand the bigger picture.\n\nI actively take part in competitive programming and open-source contributions, both of which sharpen my skills and keep me connected with the developer community. My goal is to grow as both a practical developer and a curious researcher, combining the best of both worlds.",
    skills: ["C++", "Python", "Node.js", "JavaScript", "Python", "Docker"],
    projects: [
        {
            name: "AgriAdvisor AI",
            description:
                "An agriculture-focused AI chatbot powered by Retrieval-Augmented Generation (RAG) to provide source-cited answers and reduce hallucinations. Built with a 1.5M-sentence indexed corpus and supports multilingual voice interaction in 10+ Indian languages.",
            link: "https://github.com/Sanchay117/AgriAdvisor-AI",
            skills: ["Python", "Django", "React", "RAG"],
        },
        {
            name: "Twit",
            description:
                'A full-stack Twitter clone where tweets become "twits." Includes real-time posting, timelines, and a dedicated admin UI for content moderation. Social features include DMs, follow/unfollow, friend requests, reporting, and commenting for a complete microblogging experience.',
            link: "https://twit-8g9x.onrender.com/",
            skills: [
                "EJS",
                "Node.js",
                "HTML",
                "CSS",
                "Bootstrap",
                "Javascript",
            ],
        },
        {
            name: "Angry Birds",
            description:
                "A physics-based game built with Java and LibGDX, recreating the classic Angry Birds mechanics with object collisions, trajectory-based launches, and level progression.",
            link: "https://github.com/Sanchay117/AngryBirds",
            skills: ["Java", "LibGDX"],
        },
    ],
    experience: [
        {
            company: "Motion Transfer via Neural Rendering",
            title: "Research Assistant",
            dateRange: "May 2025 - Present",
            bullets: [
                "Contributing to a research project on motion transfer using neural rendering (NeRFs and 3D Gaussian Splatting)",
                "Curated a labeled dataset of 4D animated meshes paired with multi-view videos.",
                "Assisting in building a foundation for training and evaluating neural rendering pipelines.",
            ],
        },
        {
            company: "Startup Inc",
            title: "Full Stack Developer",
            dateRange: "Jun 2020 - Dec 2021",
            bullets: [
                "Built and launched MVP product from scratch using React and Node.js",
                "Implemented CI/CD pipeline reducing deployment time by 60%",
                "Collaborated with product team to define technical requirements",
            ],
        },
        {
            company: "Digital Agency",
            title: "Frontend Developer",
            dateRange: "Aug 2018 - May 2020",
            bullets: [
                "Developed responsive web applications for 20+ clients",
                "Improved site performance scores by 35% on average",
                "Introduced modern JavaScript frameworks to legacy codebases",
            ],
        },
    ],
    education: [
        {
            school: "University Name",
            degree: "Bachelor of Science in Computer Science",
            dateRange: "2014 - 2018",
            achievements: [
                "Graduated Magna Cum Laude with 3.8 GPA",
                "Dean's List all semesters",
                "President of Computer Science Club",
            ],
        },
        {
            school: "Online Platform",
            degree: "Full Stack Development Certificate",
            dateRange: "2019",
            achievements: [
                "Completed 500+ hours of coursework",
                "Built 10+ portfolio projects",
                "Specialized in React and Node.js",
            ],
        },
    ],
};
