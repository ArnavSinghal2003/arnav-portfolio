import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Lightbulb, Target } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Tech in Computer Science from Vellore Institute of Technology (VIT)",
    },
    {
      icon: Lightbulb,
      title: "Philosophy",
      description: "Turning complex problems into elegant, user-centric solutions",
    },
    {
      icon: Target,
      title: "Focus",
      description: "Building technology that creates real-world impact",
    },
  ];

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-3">
            Get to know me
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Computer Science graduate from{" "}
              <span className="text-foreground font-medium">Vellore Institute of Technology</span>,
              driven by curiosity and a strong passion for building scalable, impactful technology solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My professional interests lie at the intersection of{" "}
              <span className="text-foreground font-medium">Software Engineering</span>,{" "}
              <span className="text-foreground font-medium">Data Analytics</span>,{" "}
              <span className="text-foreground font-medium">Artificial Intelligence</span>, and{" "}
              <span className="text-foreground font-medium">Automation</span>. I specialize in{" "}
              <span className="text-foreground font-medium">software implementation</span>,{" "}
              <span className="text-foreground font-medium">data-driven analysis</span>, and intelligent{" "}
              <span className="text-foreground font-medium">system design</span>, leveraging technology 
              to optimize workflows, enhance business processes, and enable informed decision-making.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond technical expertise, I bring a mindset rooted in{" "}
              <span className="text-foreground font-medium">discipline, creativity</span>, and{" "}
              <span className="text-foreground font-medium">continuous learning</span>. 
              Whether developing robust applications, analyzing complex datasets, or exploring emerging technologies, 
              I approach every challenge with precision, adaptability, and a results-oriented mindset.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
