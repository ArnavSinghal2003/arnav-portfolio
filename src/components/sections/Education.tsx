import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Vellore Institute of Technology (VIT)",
      location: "Vellore, India",
      period: "2021 - 2025",
      grade: "CGPA: 8.14/10",
      highlights: [
        "Specialized in Data Structures, Web Development, Data Analytics, and AI",
        "Got a patent for capstone project on MediBro – AI Powered Prescription Analysis & Medication Management System",
        "Active member of technical and non-technical clubs and hackathons",
      ],
    },
    {
      degree: "Higher Secondary Education (Class XII)",
      institution: "Apeejay School Noida",
      location: "Noida, India",
      period: "2020 - 2021",
      grade: "Percentage: 89.4%",
      highlights: [
        "PCM Stream with Physical Education",
        "Developed strong foundation in Mathematics and Physics",
        "Participated in inter-school Football and Basketball tournaments",
      ],
    },
    {
      degree: "Secondary Education (Class X)",
      institution: "Apeejay School Noida",
      location: "Noida, India",
      period: "2018 - 2019",
      grade: "Percentage: 91.8%",
      highlights: [
        "Received Scholar Badge for academic excellence",
        "Secured highest marks in English for Class 10 Board Exams",
        "Active participant in debates and quizzes",
      ],
    },
    {
      degree: "Early Education",
      institution: "Wynberg Allen School",
      location: "Mussoorie, India",
      period: "2009 - 2017",
      highlights: [
        "Worked on public speaking by participating in various plays and elocution contests",
        "Represented school in inter-school football, swimming, and athletics competitions",
      ],
    },
  ];

  return (
    <section id="education" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-wider uppercase">
            Academic Background
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Education
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My academic journey that shaped my foundation in computer science and technology.
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-accent" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-accent font-medium">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <span className="text-foreground font-medium">
                      {edu.institution}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  {edu.grade && (
                    <div className="flex items-center gap-2 mb-4">
                      {edu.degree !== "Early Education" && <Award className="w-4 h-4 text-accent" />}
                      <span className="text-accent font-medium">{edu.grade}</span>
                    </div>
                  )}

                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
