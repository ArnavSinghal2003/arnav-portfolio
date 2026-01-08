import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Brain, 
  Database, 
  Code2, 
  BarChart3, 
  Users, 
  Wrench,
  Cpu,
  Globe,
  Languages
} from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming & Scripting Languages",
      icon: Code2,
      skills: ["C, C++","Python", "JavaScript", "TypeScript", "Java", "SQL", "HTML/CSS"],
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: ["TensorFlow", "PyTorch","NLP"],
    },
    {
      title: "Data Analytics",
      icon: BarChart3,
      skills: ["Pandas", "NumPy", "Tableau", "Power BI", "Microsoft Excel"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "MySQL"],
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["Angular", "React", "Node.js", "REST APIs", "Express.js"],
    },
    {
      title: "Developer & Engineering Tools",
      icon: Wrench,
      skills: ["Git", "Jenkins", "Docker", "Python Scripting", "Figma", "AWS", "Linux", "CI/CD"],
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Problem Solving", "Stakeholder Management", "Leadership", "Client Communication", "Agile/Scrum", "Teamwork"],
    },
    {
      title: "Languages",
      icon: Languages,
      skills: ["English (Fluent)", "Hindi (Native)", "Spanish (Classroom Proficiency)"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-3">
            What I bring to the table
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Skills & Expertise
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-muted-foreground rounded-full hover:bg-accent/10 hover:text-accent transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
