import React from "react";

const certificates = [
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "March 2026",
    link: "https://verify.skilljar.com/c/awh4q47boer8",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "October 2024",
    link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs118/Course/NPTEL24CS118S167020234304432344.pdf",
  },
  {
    title: "Full Stack Web Development Using MERN",
    issuer: "CipherSchools",
    date: "July 2024",
    link: "https://www.cipherschools.com/certificate/preview?id=66aa7ed7777cd431c3cc53da",
  },
  {
    title: "Server Side JavaScript with Node.js",
    issuer: "Coursera",
    date: "April 2024",
    link: "https://www.coursera.org/account/accomplishments/verify/PPS3QL4DT3VL",
  },
];

const achievements = [
  '2nd Prize, State-Level Tech Fest ("Digi Park")',
  "3rd Prize, Business Plan Competition, APJ Spark",
];

const CERT_ICON = "https://cdn-icons-png.flaticon.com/512/942/942748.png";

function Certificates() {
  return (
    <section id="certificates" className="mt-40 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-[50px] mb-12 font-bold text-accent">Certificates</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={CERT_ICON}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-lg font-bold mb-2 leading-snug">{cert.title}</h3>
              <p className="text-sm text-white/70">{cert.issuer}</p>
              <p className="text-sm text-white/70 mb-4">{cert.date}</p>

              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block px-5 py-2 rounded-full bg-accent text-white font-semibold text-sm transition-opacity hover:opacity-80"
                >
                  View Certificate
                </a>
              ) : (
                <span className="mt-auto inline-block px-5 py-2 rounded-full border border-white/20 text-white/60 font-semibold text-sm">
                  Completed
                </span>
              )}
            </div>
          ))}
        </div>

        <h2 className="text-[36px] mb-8 font-bold text-accent">Achievements</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-3xl mx-auto">
          {achievements.map((item) => (
            <div
              key={item}
              className="flex-1 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <span className="text-3xl block mb-3" role="img" aria-label="trophy">🏆</span>
              <p className="text-base leading-snug">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
