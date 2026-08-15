import React from "react";

const icon = (slug, color) => `https://cdn.simpleicons.org/${slug}/${color}`;

const skills = [
    { name: "Python", image: icon("python", "3776AB") },
    { name: "FastAPI", image: icon("fastapi", "009688") },
    { name: "JavaScript", image: icon("javascript", "F7DF1E") },
    { name: "Node.js", image: icon("nodedotjs", "5FA04E") },
    { name: "Express", image: icon("express", "FFFFFF") },
    { name: "React", image: icon("react", "61DAFB") },
    { name: "GraphQL", image: icon("graphql", "E10098") },
    { name: "Apache Kafka", image: icon("apachekafka", "FFFFFF") },
    { name: "MongoDB", image: icon("mongodb", "47A248") },
    { name: "MySQL", image: icon("mysql", "4479A1") },
    { name: "PostgreSQL", image: icon("postgresql", "4169E1") },
    { name: "Redis", image: icon("redis", "FF4438") },
    // simple-icons no longer serves an AWS mark, so this one comes from icons8
    { name: "AWS", image: "https://img.icons8.com/color/96/amazon-web-services.png" },
    { name: "Google Cloud", image: icon("googlecloud", "4285F4") },
    { name: "Shopify", image: icon("shopify", "7AB55C") },
    { name: "C++", image: icon("cplusplus", "00599C") },
    { name: "HTML5", image: icon("html5", "E34F26") },
    { name: "CSS", image: icon("css", "1572B6") },
    { name: "Git", image: icon("git", "F05032") },
    { name: "Linux", image: icon("linux", "FCC624") },
];

const categories = [
    {
        title: "Languages",
        items: ["Python", "JavaScript", "SQL", "C++"],
    },
    {
        title: "Backend",
        items: ["FastAPI", "Frappe", "Express.js", "Node.js", "REST APIs", "GraphQL (queries & mutations)"],
    },
    {
        title: "Frontend",
        items: ["React.js", "JavaScript", "HTML", "CSS"],
    },
    {
        title: "Databases",
        items: ["MongoDB", "MySQL", "MariaDB", "PostgreSQL", "Redis"],
    },
    {
        title: "Cloud & Messaging",
        items: ["AWS", "GCP", "Apache Kafka", "Redis Queue"],
    },
    {
        title: "Platforms & Integrations",
        items: [
            "Saleor", "ERPNext", "Unicommerce", "Amazon SP-API", "Shopify API", "Blinkit",
            "FirstCry", "Shiprocket", "ClickPost", "Shadowfax", "Zippee", "GoKwik",
            "Gemini API", "MedGemma",
        ],
    },
    {
        title: "Tools",
        items: ["Git", "GitHub", "Jira", "Confluence", "Linux", "SSH"],
    },
    {
        title: "Core Competencies",
        items: [
            "Backend Development", "API Development", "System Integration",
            "Event-Driven Architecture", "Database Design", "Team Leadership",
            "Stakeholder Management",
        ],
    },
];

const Skills = () => {
    return (
        <section className="mt-40 min-h-[85vh] lg:min-h-[78vh]" id="skills">
            <div className="container mx-auto text-center">
                <h2 className="text-[50px] mb-12 font-bold text-accent">Skills</h2>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 mb-20">
                    {skills.map(skill => (
                        <div
                            key={skill.name}
                            className="rounded-lg p-3 flex flex-col items-center justify-start transition-transform transform hover:scale-110"
                        >
                            <img
                                src={skill.image}
                                alt={skill.name}
                                loading="lazy"
                                className="w-14 h-14 object-contain mb-2"
                                onError={(e) => { e.currentTarget.style.visibility = "hidden"; }}
                            />
                            <span className="text-sm text-white/80 leading-tight">{skill.name}</span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-5xl mx-auto">
                    {categories.map(category => (
                        <div
                            key={category.title}
                            className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                        >
                            <h3 className="text-lg font-bold mb-4 text-accent uppercase tracking-wide">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map(item => (
                                    <span
                                        key={item}
                                        className="text-sm leading-none px-3 py-2 rounded-full bg-white/10 border border-white/10"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
