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
            company: "Motion Transfer via Neural Rendering (IIIT Delhi)",
            title: "Undergraduate Researcher",
            dateRange: "May 2025 - Present",
            bullets: [
                "Contributing to a research project on motion transfer using neural rendering (NeRFs and 3D Gaussian Splatting)",
                "Curated a labeled dataset of 4D animated meshes paired with multi-view videos.",
                "Assisting in building a foundation for training and evaluating neural rendering pipelines.",
            ],
        },
        {
            company: "ESoC 2025",
            title: "Open Source Developer",
            dateRange: "Jul 2025 - Oct 2025",
            bullets: [
                "Contributed 2000+ lines of code and 10+ merged PRs to sktime and pgmpy, widely used libraries for time-series analysis and forecasting and causal modelling.",
                "Implemented and refined forecasting modules (e.g., residual boosting forecaster), improving model flexibility and performance.",
                "Engaged in collaborative code reviews and discussions with maintainers, aligning contributions with project standards.",
                "Wrote unit tests and documentation to ensure reliability, clarity, and reproducibility of new features.",
            ],
        },
        {
            company: "University of Illinois Urbana-Champaign",
            title: "Research Assistant",
            dateRange: "Jun 2025 - Jul 2025",
            bullets: [
                "Worked under the guidance of Dr. Owolabi Legunsen as part of the UIUC+ Summer Research Program",
                "Analyzed race condition reports produced by a static analysis tool on real-world open-source Java projects.",
                "Classified race reports into true positives, benign races, or false positives through manual validation and code review.",
            ],
        },
    ],
    education: [
        {
            school: "IIIT Delhi",
            degree: "Bachelor of Technology in Computer Science And Applied Mathematics",
            dateRange: "2023 - 2027",
            achievements: ["Member of the Placement Committee"],
        },
        {
            school: "DPS Vasant Kunj",
            degree: "12th CBSE",
            dateRange: "2021 - 2023",
            achievements: ["Scored 95.2% in CBSE Class 12"],
        },
    ],
};
