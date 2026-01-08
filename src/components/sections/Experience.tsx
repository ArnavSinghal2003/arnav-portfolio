import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, MapPin, Instagram } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Programmer Analyst",
      company: "Cognizant Technology Solutions",
      location: "Bangalore, India",
      period: "June 2025 - Present",
      description: [
        "Developed modules for Kaiser Permanente, an Insurance Management Platform, using Angular, Javascript, Node.js, Express.js, and MongoDB.",
        "Collaborated with cross-functional teams to implement data-driven solutions",
        "Built responsive UI with HTML, CSS, Bootstrap, and implemented backend APIs for seamless data flow. ",
        "Gained hands-on experience with Jenkins and Docker for CI/CD and containerized deployment. ",
      ],
      technologies: ["FullStack", "Angular", "Node.js", "Javascript", "MongoDB", "Docker", "Jenkins", "Express.js", "TypeScript"],
    },
    {
      title: "Technology Intern",
      company: "Policybazaar.com",
      location: "Gurgaon, India",
      period: "October 2023 - December 2023",
      description: [
        "Designed and optimized automated data processing workflows, improving efficiency by 30%.",
        "Supported frontend and backend development using modern web technologies during a 61-day intensive program. ",
        "Participated in agile development processes and code reviews",
        "Assisted in resolving technical issues to ensure smooth product deployment",
      ],
      technologies: ["React", "JavaScript", "Node.js", "MongoDB", "Git"],
    },
    {
      title: "Founder",
      company: "Sign.co.in",
      location: "Noida, India",
      description: [
        "Founded and scaled a print-on-demand T-shirt brand, selling 500+ oversized T-shirts across India.",
        "Built and launched a full-stack e-commerce website, increasing user engagement by 40% in the first month.",
        "Managed end-to-end operations including design, manufacturing, order tracking, and social media marketing.",
        "Gained hands-on experience in digital marketing, customer engagement, and lean business operations. ",
      ],
      instagram: "https://www.instagram.com/sigh.co_/",
    },    {
      title: "Deloitte Australia Data Analytics Job Simulation",
      company: "Deloitte Australia",
      location: "India (Remote)",
      period: "June, 2025",
      description: [
        "Completed a Deloitte job simulation involving data analysis and forensic technology",
        "Created a data dashboard using Tableau and Used Excel to classify data and draw business conclusions ",
      ],
      technologies: ["Data Analysis", "Data Modeling", "Tableau", "Excel", "Power BI"],
    },  ];

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-3">
            My professional journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0" : "md:pl-12 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute hidden md:block w-4 h-4 bg-accent rounded-full border-4 border-background shadow-soft top-6 ${
                    index % 2 === 0 ? "-right-2 md:right-[-9px]" : "-left-2 md:left-[-9px]"
                  }`}
                />

                <div className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300">
                  <div className="flex flex-wrap gap-3 mb-3 text-sm text-muted-foreground">
                    {exp.period && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-1 text-left">
                    {exp.title}
                  </h3>
                  <p className="flex items-center gap-2 text-accent font-medium mb-4 text-left">
                    <Building2 className="w-4 h-4" />
                    {exp.company}
                  </p>

                  <ul className="space-y-2 mb-4 text-muted-foreground list-disc list-inside text-left">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>

                  {exp.technologies && exp.technologies.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs bg-accent/10 text-accent rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : exp.instagram ? (
                    <div className="flex">
                      <a
                        href={exp.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-all duration-300"
                      >
                        <Instagram className="w-4 h-4" />
                        Follow on Instagram
                      </a>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
