const portfolioData = {
    personal: {
        name: "Somesh",
        role: ["Problem Solver", "Python Developer"],
        email: "somesh1715@gmail.com",
        phone: "9500544982",
        location: "Coimbatore, Tamil Nadu",
        github: "https://github.com/Somesh172005",
        linkedin: "https://www.linkedin.com/in/somesh-ramesh",
        resume: "Somesh_R_Resume.pdf",
        about: "Hello! I'm a passionate developer who loves creating digital experiences. With a strong foundation in Python and a creative eye for UI/UX using Figma, I build scalable applications and beautiful user interfaces. I believe in writing clean, maintainable code and solving complex problems intuitively."
    },
    projects: [
        {
            id: 1,
            title: "AI-Powered Retinal Disease Diagnosis",
            description: "Developed a deep learning model to classify retinal diseases (CNV, DME, DRUSEN, NORMAL) from OCT scan images. Achieved over 90% accuracy using a custom CNN architecture and image preprocessing pipeline.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            tags: ["Python", "TensorFlow", "Keras", "CNN", "OpenCV"],
            githubLink: "https://github.com/Somesh172005/AI-Powered-Retinal-Disease-Diagnosis-from-OCT-Scans.git",
            liveLink: "#"
        },
        {
            id: 2,
            title: "Data Visualization Dashboard",
            description: "Interactive dashboard for data analysis with real-time charts and graphs. Built with D3.js and Python backend for data processing.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            tags: ["D3.js", "Python", "PostgreSQL"],
            githubLink: "#",
            liveLink: "#"
        },
        {
            id: 3,
            title: "Task Management App",
            description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=600&h=400&fit=crop",
            tags: ["Vue.js", "Socket.io", "Express"],
            githubLink: "#",
            liveLink: "#"
        }
    ],
    certifications: [
        {
            id: 1,
            title: "Machine Learning Specialization",
            issuer: "Stanford / Coursera",
            date: "2023",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
            link: "#"
        },
        {
            id: 2,
            title: "Frontend Web Development",
            issuer: "Udemy",
            date: "2024",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
            link: "#"
        }
    ],
    education: [
        {
            id: 1,
            degree: "B.Tech Information Technology",
            institution: "Coimbatore, Tamil Nadu",
            date: "Expected/Completed",
            description: "Developed strong problem-solving skills and fundamentals in clean architecture and scalable code."
        }
    ],
    skills: [
        { name: "Python", category: "Backend", level: 80, icon: "fab fa-python" },
        { name: "HTML/CSS", category: "Frontend", level: 70, icon: "fab fa-html5" },
        { name: "JavaScript", category: "Frontend", level: 60, icon: "fab fa-js" },
        { name: "SQL", category: "Database", level: 50, icon: "fas fa-database" },
        { name: "Figma", category: "Design", level: 85, icon: "fab fa-figma" },
        { name: "UI/UX", category: "Design", level: 85, icon: "fas fa-palette" },
        { name: "Git", category: "Tools", level: 50, icon: "fab fa-git-alt" },
        { name: "PowerBI", category: "Tools", level: 50, icon: "fas fa-chart-bar" },
        { name: "Excel", category: "Tools", level: 50, icon: "fas fa-file-excel" }
    ]
};
