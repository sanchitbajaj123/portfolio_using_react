import React from "react";

const skills = [
    { name: "JavaScript", image: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png" }, // JavaScript
    { name: "React", image: "https://cdn-icons-png.flaticon.com/128/875/875209.png" },
    { name: "Node.js", image: "https://cdn-icons-png.flaticon.com/128/919/919825.png" }, // Node.js
    { name: "Python", image: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png" }, // Python
    { name: "html", image: "https://cdn-icons-png.flaticon.com/128/1051/1051277.png" }, // Tkinter (using similar icon as Express)
    { name: "MySQL", image: "https://cdn-icons-png.flaticon.com/128/919/919836.png" }, // MySQL // PostgreSQL
    { name: "MongoDB", image: "https://img.icons8.com/?size=80&id=8rKdRqZFLurS&format=png" }, // MongoDB
    { name: "Firebase", image: "https://firebase.google.com/static/images/brand-guidelines/product-logo.png" }, // Firebase
    { name: "Figma", image: "https://cdn-icons-png.flaticon.com/128/5968/5968705.png" }, // Figma
    { name: "C++", image: "https://cdn-icons-png.flaticon.com/128/6132/6132222.png" },
    { name: "Css", image: "https://cdn-icons-png.flaticon.com/128/732/732190.png" } ,
    {name: "CSS", image: "https://cdn-icons-png.flaticon.com/128/888/888867.png"}
];

const Skills = () => {
    return (
        <section className="mt-40 min-h-[85vh] lg:min-h-[78vh]" id="skills">
            <div className="container mx-auto text-center">
                <h2 className="text-[50px] mb-8 font-bold text-accent">Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {skills.map(skill => (
                        <div
                            key={skill.name}
                            className=" rounded-lg p-4 flex flex-col items-center justify-center transition-transform transform hover:scale-150"
                        >
                            <img
                                src={skill.image}
                                alt={skill.name}
                                className="w-24 h-24 object-cover mb-4"
                            />
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
