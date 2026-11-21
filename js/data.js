/**
 * Aman Katiyar - Portfolio Configuration & Data Store
 * Software Development Intern @ GHAckk Technology
 * MCA Candidate (Completing June 2026) @ Pranveer Singh Institute of Technology (PSIT), Kanpur
 * GitHub: Aman-katiyar0018 | LeetCode: AmanKatiyar0018
 */

const portfolioData = {
    personal: {
        name: "Aman Katiyar",
        initials: "AK",
        websiteName: "Aman Katiyar | Portfolio",
        title: "Software Development Intern | Python Backend Developer | MCA '26",
        roles: [
            "Software Development Intern @ GHAckk Technology",
            "MCA Candidate @ PSIT Kanpur (Graduating June 2026)",
            "Python Backend & API Developer",
            "Cloud & DevOps Enthusiast (AWS & Docker)",
            "Java & OOP Software Programmer"
        ],
        location: "Kanpur, Uttar Pradesh, India",
        email: "amankatiyar00891@gmail.com",
        phone: "+91 7355284202",
        status: "Software Dev Intern @ GHAckk Technology • MCA June 2026",
        statusAvailable: true,
        summary: "Software Development Intern at GHAckk Technology and MCA student at PSIT Kanpur (graduating June 2026). Hands-on experience developing application components, working with APIs and backend concepts, leveraging AI-assisted development tools, and managing version control with Git & GitHub. Skilled in Python, FastAPI, MySQL, Java, and Dockerized cloud deployments on AWS EC2.",
        resumeUrl: "assets/Aman_Katiyar_Resume.pdf",
        socials: {
            github: "https://github.com/Aman-katiyar0018",
            linkedin: "https://linkedin.com/in/aman-katiyar-1a2740329",
            leetcode: "https://leetcode.com/u/AmanKatiyar0018",
            email: "mailto:amankatiyar00891@gmail.com"
        },
        stats: [
            { label: "Current Internship", value: "GHAckk Tech", sub: "Software Dev Intern" },
            { label: "MCA Completion", value: "June 2026", sub: "PSIT Kanpur" },
            { label: "B.Sc. Aggregate", value: "81.51%", sub: "CSJMU Kanpur" },
            { label: "Certifications", value: "5+", sub: "Cisco, HackerRank, Infosys" }
        ]
    },

    experience: [
        {
            role: "Software Development Intern",
            company: "GHAckk Technology",
            type: "Internship",
            period: "2026 – Present",
            status: "Currently Active",
            location: "Software Engineering Division",
            summary: "Contributing to software development tasks, backend components, API integrations, and developer workflows using modern AI tools and Git version control.",
            responsibilities: [
                "Worked on software development tasks using AI-assisted development tools to accelerate implementation and debugging.",
                "Assisted in developing and managing application components, ensuring modularity and clean code standards.",
                "Worked with APIs and backend development concepts for reliable data communication and integration.",
                "Improved practical knowledge of real-world software development workflows, team collaboration, and version control."
            ],
            technologies: ["Python", "Git", "GitHub", "AI Tools", "API Development"]
        }
    ],

    about: {
        heading: "About Me",
        subheading: "Software Development Intern at GHAckk Technology & MCA student at PSIT Kanpur (completing June 2026).",
        paragraphs: [
            "I am currently working as a Software Development Intern at GHAckk Technology, where I work on application components, API development concepts, and modern AI-assisted engineering workflows with Git and GitHub.",
            "Alongside my internship, I am completing my Master of Computer Applications (MCA) at Pranveer Singh Institute of Technology (PSIT), Kanpur (graduating in June 2026). Prior to my MCA, I completed my Bachelor of Science (B.Sc.) from Chhatrapati Shahu Ji Maharaj University, Kanpur, graduating with an aggregate of 81.51%.",
            "My core technical expertise includes Python backend development, REST APIs (FastAPI), relational databases (MySQL), and cloud deployments using Docker on AWS EC2. I have built verified projects ranging from a Face Recognition Attendance System and Cloud Docker Deployments to Java Steganography desktop software and computational tools."
        ],
        highlights: [
            { icon: "briefcase", title: "Internship @ GHAckk Technology", desc: "Software development tasks, component management, APIs, and AI-assisted engineering tools." },
            { icon: "cloud", title: "AWS & Docker Deployment", desc: "Configuring Linux AWS EC2 instances, Docker container lifecycle, VPC, IAM, and S3." },
            { icon: "server", title: "Python Backend & REST APIs", desc: "FastAPI, CRUD operations, Pydantic data validation, error handling, and JSON HTTP APIs." },
            { icon: "graduation-cap", title: "MCA Graduating June 2026", desc: "PSIT Kanpur with strong foundation in Algorithms, OOP, Networks, and Computer Science." }
        ]
    },

    skills: [
        {
            category: "Internship & Tools",
            icon: "briefcase",
            items: [
                { name: "Git & GitHub", level: "Production", tag: "VCS" },
                { name: "API Development", level: "Hands-on", tag: "Backend" },
                { name: "AI-Assisted Dev Tools", level: "Hands-on", tag: "Productivity" },
                { name: "Component Management", level: "Hands-on", tag: "Architecture" },
                { name: "Software Workflows", level: "Practical", tag: "SDLC" }
            ]
        },
        {
            category: "Cloud & Deployment",
            icon: "cloud",
            items: [
                { name: "AWS EC2", level: "Hands-on", tag: "Cloud" },
                { name: "Docker", level: "Container", tag: "DevOps" },
                { name: "Linux / Bash", level: "Intermediate", tag: "OS" },
                { name: "AWS VPC & IAM", level: "Foundational", tag: "Cloud" },
                { name: "AWS S3", level: "Foundational", tag: "Storage" }
            ]
        },
        {
            category: "Programming & Backend",
            icon: "code",
            items: [
                { name: "Python", level: "Advanced", tag: "Primary" },
                { name: "FastAPI", level: "Intermediate", tag: "Backend" },
                { name: "Java (Core & OOP)", level: "Advanced", tag: "Primary" },
                { name: "REST APIs & JSON", level: "Advanced", tag: "Web Services" },
                { name: "Pydantic & Validation", level: "Intermediate", tag: "Backend" },
                { name: "C Basics", level: "Foundational", tag: "Core" }
            ]
        },
        {
            category: "Databases & Storage",
            icon: "database",
            items: [
                { name: "MySQL", level: "Advanced", tag: "RDBMS" },
                { name: "SQL (Queries & Joins)", level: "HackerRank Cert", tag: "Query" },
                { name: "DBMS Fundamentals", level: "Certified", tag: "Concepts" },
                { name: "Database Design", level: "Intermediate", tag: "Architecture" },
                { name: "CRUD Operations", level: "Advanced", tag: "Data" }
            ]
        },
        {
            category: "Libraries & Computer Vision",
            icon: "cpu",
            items: [
                { name: "OpenCV", level: "Intermediate", tag: "Computer Vision" },
                { name: "Java Swing GUI", level: "Intermediate", tag: "Desktop UI" },
                { name: "BufferedImage API", level: "Intermediate", tag: "Image Processing" },
                { name: "Tkinter", level: "Intermediate", tag: "Python GUI" },
                { name: "HTML & CSS", level: "Intermediate", tag: "Frontend" }
            ]
        },
        {
            category: "Core Computer Science",
            icon: "layers",
            items: [
                { name: "Data Structures & Algorithms", level: "Problem Solving", tag: "Core" },
                { name: "Object-Oriented Programming (OOP)", level: "Advanced", tag: "Design" },
                { name: "Computer Networks", level: "Cisco Certified", tag: "Networks" },
                { name: "Debugging & Troubleshooting", level: "Advanced", tag: "Engineering" },
                { name: "SDLC & Agile", level: "Foundational", tag: "Process" }
            ]
        }
    ],

    // User's actual 4 projects
    projects: [
        {
            id: "proj-docker",
            title: "Cloud-Based Application Deployment on AWS",
            category: "cloud",
            featured: true,
            year: "2025–2026",
            badge: "AWS & Docker Deployment",
            shortDesc: "End-to-end containerized backend deployment on an AWS EC2 Linux instance with secure network rules and cloud infrastructure management.",
            description: "Configured an AWS cloud infrastructure environment for deploying and operating a Dockerized backend application. Managed Linux server provisioning, Docker containerization, networking, and application availability using AWS services.",
            highlights: [
                "Configured a Linux-based AWS EC2 environment to deploy a Dockerized backend application.",
                "Used Docker for application containerization and GitHub for source-code management and documentation.",
                "Worked with AWS infrastructure services including EC2, VPC, IAM, and S3 during deployment.",
                "Hardened Linux environment with security groups and troubleshot container availability and network connectivity."
            ],
            tech: ["AWS EC2", "Docker", "Linux", "GitHub", "VPC", "IAM", "S3"],
            github: "https://github.com/Aman-katiyar0018",
            liveUrl: null,
            icon: "cloud"
        },
        {
            id: "proj-steganography",
            title: "ObscuraCRT – Image Steganography Desktop Application",
            category: "java",
            featured: true,
            year: "2024",
            badge: "Java Security App",
            shortDesc: "Java desktop security software for covertly embedding and extracting encrypted secret text within digital images using Least Significant Bit (LSB) steganography.",
            description: "Developed a desktop application for encoding and extracting secret text messages within digital images. Implemented pixel-level image processing techniques to replace least significant bits while preserving image visual fidelity.",
            highlights: [
                "Developed a desktop application for encoding and extracting text messages within digital images.",
                "Implemented pixel-level encoding and decoding operations using image-processing techniques.",
                "Built an intuitive Java Swing GUI interface for message encoding/decoding using BufferedImage APIs.",
                "Architected with modular Object-Oriented design, data validation, and lossless image handling."
            ],
            tech: ["Java", "Java Swing", "BufferedImage API", "LSB Steganography", "OOP"],
            github: "https://github.com/Aman-katiyar0018",
            liveUrl: null,
            icon: "lock"
        },
        {
            id: "proj-attendance",
            title: "Face Recognition Based Smart Attendance System",
            category: "python",
            featured: true,
            year: "2024",
            badge: "Python & Computer Vision",
            shortDesc: "Automated student attendance tracking system using computer vision face recognition, FastAPI backend, and MySQL database persistence.",
            description: "Developed a real-time face recognition attendance management solution. Leveraged OpenCV for automated facial feature recognition alongside a FastAPI Python backend for managing student information and attendance records.",
            highlights: [
                "Developed a backend application for managing student information and attendance records using Python, FastAPI, and MySQL.",
                "Implemented REST API endpoints and CRUD operations for creating, retrieving, and updating student and attendance records.",
                "Integrated OpenCV computer vision algorithms to automate real-time facial recognition and attendance logging.",
                "Used HTTP methods and JSON-based request/response handling with Pydantic data validation and error handling."
            ],
            tech: ["Python", "FastAPI", "OpenCV", "MySQL", "REST APIs", "JSON", "Tkinter"],
            github: "https://github.com/Aman-katiyar0018/Face-recognition-Based-Smart-Attendance-System",
            liveUrl: null,
            icon: "user-check"
        },
        {
            id: "proj-calculator",
            title: "Multi-Functional Smart Calculator Application",
            category: "tools",
            featured: false,
            year: "2024",
            badge: "Math Logic & Algorithms",
            shortDesc: "Desktop and logic-driven computational tool supporting arithmetic operations, specialized financial formulas, geometry calculations, and input validation.",
            description: "Engineered a versatile calculator application implementing mathematical algorithms, operator precedence, interest calculation, area computation, and unit/temperature conversion logic.",
            highlights: [
                "Implemented arithmetic calculation logic with strict operator evaluation and division-by-zero safeguards.",
                "Integrated specialized calculation modules for simple/compound interest, circle area, and temperature conversion.",
                "Handled user input sanitization, error messages, and defensive programming checks.",
                "Built clean user interface and optimized algorithmic execution speed."
            ],
            tech: ["C / Python", "Mathematical Logic", "Algorithm Design", "Input Validation"],
            github: "https://github.com/Aman-katiyar0018",
            liveUrl: null,
            icon: "calculator"
        }
    ],

    certificates: [
        {
            id: "cert-cisco",
            title: "Networking Basics",
            issuer: "Cisco Networking Academy",
            issuerLogo: "cisco",
            date: "14 Apr 2026",
            certId: "cb463d48-c078-4ec4-9201-89911073d5a6",
            badgeText: "Cisco Verified",
            badgeColor: "emerald",
            image: "images/certs/cert_cisco_networking.png",
            pdfUrl: "assets/certificates/cisco_networking_basics.pdf",
            description: "Comprehensive certification through Cisco Networking Academy covering network protocols, IP addressing (IPv4/IPv6), subnetting, network media, switches, routers, and client-server architectures.",
            topics: ["OSI & TCP/IP Models", "IPv4 & IPv6 Subnetting", "Routing & Switching Basics", "Network Security Fundamentals"]
        },
        {
            id: "cert-java",
            title: "Java (Basic) Skill Certificate",
            issuer: "HackerRank",
            issuerLogo: "hackerrank",
            date: "Verified Credential",
            certId: "HackerRank Verified",
            badgeText: "HackerRank Certified",
            badgeColor: "green",
            image: "images/certs/cert_hackerrank_java.png",
            pdfUrl: "assets/certificates/hackerrank_java_basic.pdf",
            description: "Rigorous skill verification covering Core Java concepts, Object-Oriented Programming (Polymorphism, Inheritance, Encapsulation, Abstraction), Exception Handling, Collections Framework, and Java Data Types.",
            topics: ["Core Java & OOP", "Java Collections Framework", "Exception Handling", "Data Types & Syntax"]
        },
        {
            id: "cert-sql",
            title: "SQL (Basic) Skill Certificate",
            issuer: "HackerRank",
            issuerLogo: "hackerrank",
            date: "Verified Credential",
            certId: "HackerRank Verified",
            badgeText: "HackerRank Certified",
            badgeColor: "blue",
            image: "images/certs/cert_hackerrank_sql.png",
            pdfUrl: "assets/certificates/hackerrank_sql_basic.pdf",
            description: "Demonstrated proficiency in relational database queries, subqueries, table aggregations (GROUP BY, HAVING), multi-table JOINs, filtering, sorting, and data manipulation.",
            topics: ["Complex JOINs", "Aggregations & Grouping", "Subqueries & Windowing", "Relational Filtering"]
        },
        {
            id: "cert-dbms",
            title: "Database Management System (DBMS)",
            issuer: "Infosys / Mindluster",
            issuerLogo: "mindluster",
            date: "Verified Completion",
            certId: "Infosys / Mindluster Credential",
            badgeText: "Course Certification",
            badgeColor: "indigo",
            image: "images/certs/cert_mindluster_dbms.jpg",
            pdfUrl: "assets/certificates/mindluster_dbms_certificate.pdf",
            description: "In-depth study of Database Management Systems, covering Relational Algebra, ER Modeling, Normalization (1NF through BCNF), Transaction Management, ACID Properties, and Concurrency Control.",
            topics: ["Relational Schema & ER Models", "Normalization (1NF-BCNF)", "ACID Properties & Transactions", "Indexing & Optimization"]
        },
        {
            id: "cert-python",
            title: "Programming Fundamentals using Python",
            issuer: "Infosys / Professional",
            issuerLogo: "python",
            date: "Verified Completion",
            certId: "Infosys Certified",
            badgeText: "Language Mastery",
            badgeColor: "amber",
            image: "images/certs/cert_python.jpg",
            pdfUrl: "assets/certificates/python_programming_fundamentals.pdf",
            description: "Comprehensive mastery of Python language syntax, data structures (lists, tuples, dictionaries, sets), functional programming, file input/output, modular programming, and object-oriented paradigms.",
            topics: ["Python Data Structures", "OOP in Python", "File I/O & Exception Handling", "Modular Design"]
        }
    ],

    education: [
        {
            degree: "Master of Computer Applications (MCA)",
            institution: "Pranveer Singh Institute of Technology (PSIT)",
            location: "Kanpur, Uttar Pradesh",
            period: "2024 – June 2026",
            status: "Graduating in June 2026",
            grade: "Final Year Student",
            details: "Completing MCA in June 2026. Specializing in Python backend engineering, cloud computing, Docker deployments, relational databases, data structures, and object-oriented software engineering.",
            courses: ["Data Structures & Algorithms", "Cloud Computing & AWS", "FastAPI & REST APIs", "DBMS & MySQL", "Computer Networks", "OOP in Java & Python"]
        },
        {
            degree: "Bachelor of Science (B.Sc.)",
            institution: "Chhatrapati Shahu Ji Maharaj University (CSJMU)",
            location: "Kanpur, Uttar Pradesh",
            period: "2021 – 2024",
            status: "Graduated with Distinction",
            grade: "Aggregate: 81.51%",
            details: "Graduated with top academic standing (81.51% aggregate). Developed strong foundational mathematical skills, analytical thinking, programming logic, and database systems concepts.",
            courses: ["Computer Science Fundamentals", "Mathematics & Statistics", "Database Systems", "Programming Logic"]
        }
    ],

    codingProfiles: [
        {
            platform: "GitHub",
            username: "Aman-katiyar0018",
            url: "https://github.com/Aman-katiyar0018",
            platformType: "github",
            badge: "Active Repositories",
            highlight: "Docker, Java, FastAPI & Computer Vision",
            description: "Showcasing Dockerized AWS deployments, Java Steganography desktop apps, Face Recognition Smart Attendance, and software tools."
        },
        {
            platform: "LinkedIn",
            username: "aman-katiyar-1a2740329",
            url: "https://linkedin.com/in/aman-katiyar-1a2740329",
            platformType: "linkedin",
            badge: "Professional Network",
            highlight: "Software Dev Intern • MCA @ PSIT",
            description: "Connecting with engineering teams, hiring managers, and developer communities. Open for SDE, Cloud & Backend roles."
        },
        {
            platform: "LeetCode",
            username: "AmanKatiyar0018",
            url: "https://leetcode.com/u/AmanKatiyar0018",
            platformType: "leetcode",
            badge: "Problem Solver",
            highlight: "DSA in Java & Python",
            description: "Regularly practicing algorithms, data structures, binary search, recursion, trees, and relational SQL queries."
        }
    ]
};

if (typeof window !== 'undefined') {
    window.portfolioData = portfolioData;
}
