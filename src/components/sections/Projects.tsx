import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "MediBro",
      description: "AI and NLP Powered Prescription Analysis and Medication Management System.",
      highlights: [
        "Built an AI-powered healthcare application to digitize and analyze handwritten prescriptions using OCR and NLP",
        "Extracted key medical information including medicines, dosages, and usage instructions",
        "Implemented Streamlit frontend and Flask backend for real-time processing",
        "Enabled multilingual support using Google Translate API",
        "Applied post-extraction error correction to improve accuracy and readability",
      ],
      technologies: ["Python", "Streamlit", "Flask", "NLP", "OCR", "Google Translate API"],
      github: "https://github.com/ArnavSinghal2003/MediBro",
      demo: "https://demo.com",
    },
    {
      title: "Insurix",
      description: "Developed a full-stack insurance management web application to streamline insurance policy operations through a responsive, user-friendly interface and a scalable, well-structured architecture following modern web development practices.",
      highlights: [
        "Built a responsive insurance management system",
        "Ensured clear frontend–backend separation for scalability",
        "Emphasized usability, performance, and clean code structure",
      ],
      technologies: ["TypeScript", "JavaScript", "HTML/CSS", "Git", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/ArnavSinghal2003/Insurix",
      demo: "https://demo.com",
      featured: false,
    },
    {
      title: "Stock Market Analytics Dashboard",
      description: "Built an end-to-end stock market analytics platform to analyze price trends, returns, and volatility using real market data.",
      highlights: [
        "Calculated daily returns and volatility to assess stock risk",
        "Applied moving averages for technical trend analysis",
        "Designed an interactive Power BI dashboard for decision-making",
      ],
      technologies: ["Python", "SQL", "Power BI"],
      github: "https://github.com/ArnavSinghal2003/Stock-Market-Analytics",
      demo: "https://drive.google.com/file/d/1Q11iU_xNQ7ENICneVGvTcP2x5tMRireZ/view?usp=sharing",
    },
    {
      title: "Dr.Medilyf",
      description: "A healthcare platform that enhances access to quality care through technology. It connects patients with providers, improving affordability and convenience.",
      highlights: [
        "Implemented telemedicine consultations and appointment scheduling features",
        "Built modules for health records management and medication support",
        "Developed using HTML, CSS, JavaScript, and React",
      ],
      technologies: ["React", "HTML", "CSS", "Javascript", "Figma"],
      github: "https://github.com/ArnavSinghal2003/MedLyf",
      demo: "https://demo.com",
    },
    {
      title: "E-Voting through Blockchain",
      description: "Built a blockchain-based e-voting system using Smart Contracts and a private Ethereum (Geth) network to ensure secure, transparent, and tamper-proof elections.",
      highlights: [
        "Implemented secure voter registration and vote validation via Smart Contracts",
        "Enabled real-time vote updates with blockchain immutability",
        "Improved election security, transparency, and efficiency",
      ],
      technologies: ["Blockchain", "Ethereum(Geth)", "Smart Contracts", "Cryptography"],
      github: null,
      demo: null,
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-secondary/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-3">
            What I've built
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my problem-solving approach and technical skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden flex flex-col ${
                project.featured ? "ring-2 ring-accent/20" : ""
              }`}
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded-full font-medium">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <ArrowUpRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs bg-secondary text-muted-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button variant="accent" size="sm" asChild className="flex-1">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
