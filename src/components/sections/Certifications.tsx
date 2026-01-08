import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      issueDate: "December 2023",
      expiryDate: "December 2026",
      credentialId: "1e009a82e5324199b95bf7669c2b3e33",
      description: "Demonstrates foundational understanding of AWS Cloud concepts, including core services, cloud architecture, security best practices, and AWS pricing and billing models. Validates the ability to identify cloud use cases and support cloud-based solutions.",
      skills: ["AWS", "Cloud Architecture", "Infrastructure as Code", "Security"],
      certificateLink: "https://drive.google.com/drive/folders/1_pXvX4DPS4YMKq5FhN0kNBg2lmEV6LJM?usp=sharing",
    },
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      issuer: "Microsoft",
      issueDate: "November 2023",
      expiryDate: null,
      credentialId: "644405227E54A3E3",
      description: "Validates expertise in managing and administering Microsoft Azure environments, including virtual machines, networking, storage, identity, security, and monitoring. Demonstrates the ability to implement, manage, and optimize cloud resources to support business requirements.",
      skills: ["Microsoft Azure", "Cloud Administration", "Virtual Machines", "Networking", "Security"],
      certificateLink: "https://drive.google.com/drive/folders/1_pXvX4DPS4YMKq5FhN0kNBg2lmEV6LJM?usp=sharing",
    },
    {
      title: "BCG GenAI Job Simulation",
      issuer: "Forage",
      issueDate: "June 2025",
      expiryDate: null,
      description: "Completed a hands-on Generative AI job simulation focused on applying AI concepts to real-world business problems, including data extraction, analysis, and building an AI-powered financial chatbot.",
      skills: ["Generative AI", "Data Extraction & Analysis", "AI Chatbot Development", "Prompt Engineering"],
      certificateLink: "https://drive.google.com/drive/folders/1_pXvX4DPS4YMKq5FhN0kNBg2lmEV6LJM?usp=sharing",
      featured: false,
    },
    {
      title: "Deloitte Technology Job Simulation",
      issuer: "Forage",
      issueDate: "June 2025",
      description: "Completed a hands-on technology job simulation focused on applying core coding and development skills to solve practical, real-world technology challenges in a business context.",
      skills: ["Software Development", "Problem Solving", "Logical Thinking"],
      certificateLink: "https://drive.google.com/drive/folders/1_pXvX4DPS4YMKq5FhN0kNBg2lmEV6LJM?usp=sharing",
      featured: true,
    },
    {
      title: "Deloitte Data Analytics Job Simulation",
      issuer: "Forage",
      issueDate: "June 2025",
      description: "Completed a practical data analytics job simulation focused on applying analytical techniques to real-world business scenarios, including data analysis and forensic technology to derive insights and support decision-making.",
      skills: ["Data Analysis", "Tableau", "Data Interpretation", "Analytical Thinking", "Business Insights", "Power BI"],
      certificateLink: "https://drive.google.com/drive/folders/1_pXvX4DPS4YMKq5FhN0kNBg2lmEV6LJM?usp=sharing",
      featured: false,
    },
  ];

  return (
    <section id="certifications" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-3">
            Professional Credentials
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications that validate my technical expertise and commitment to continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden flex flex-col ${
                cert.featured ? "ring-2 ring-accent/20" : ""
              }`}
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {cert.title}
                  </h3>
                  {cert.featured && (
                    <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded-full font-medium">
                      Featured
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-accent font-medium mb-2">
                  <Award className="w-4 h-4" />
                  {cert.issuer}
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>Issued: {cert.issueDate}</span>
                  {cert.expiryDate && <span>• Expires: {cert.expiryDate}</span>}
                </div>

                {cert.credentialId && (
                  <p className="text-xs text-muted-foreground mb-4">
                    Credential ID: {cert.credentialId}
                  </p>
                )}

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs bg-secondary text-muted-foreground rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 pt-0">
                <Button variant="accent" size="sm" asChild className="w-full">
                  <a href={cert.certificateLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Certificate
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;