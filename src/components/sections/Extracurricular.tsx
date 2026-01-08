import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Users, Award, Flag, Heart } from "lucide-react";

const Extracurricular = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const activities = [
    {
      icon: Users,
      title: "Internet of Things Community",
      role: "Senior Core - Student Club",
      period: "2022 - 2024",
      description: "Conducted technical & soft-skills training impacting over 1000 students.",
      achievement: "Outstanding Contribution Award",
    },
    {
      icon: Users,
      title: "The Institution of Engineering and Technology",
      role: "Senior Core – Chapter",
      period: "2021 - 2023",
      description: "Organized workshops, hackathons, and tech talks for 500+ students, fostering a culture of innovation.",
      achievement: "Best Event Award",
    },
    {
      icon: Heart,
      title: "Youth Red Cross Association",
      role: "Senior Volunteer",
      period: "2021 - 2025",
      description: " Conducted and participated in organizing regular blood donation drives in collaboration with local hospitals.",
      achievement: "Community Impact Award",
    },
    {
      icon: Flag,
      title: "Coding Club Mentor",
      role: "Senior Mentor",
      period: "2021 - 2023",
      description: "Mentored 50+ junior students in data structures, algorithms, and competitive programming.",
      achievement: "Best Mentor Recognition",
    },
  ];

  return (
    <section id="extracurricular" className="py-24 px-6 bg-secondary/50" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-3">
            Beyond academics
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Extracurricular Activities
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 group"
            >
              <div className="flex gap-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 h-fit">
                  <activity.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {activity.title}
                    </h3>
                    <span className="px-2 py-0.5 text-xs bg-accent/10 text-accent rounded-full font-medium">
                      {activity.period}
                    </span>
                  </div>
                  <p className="text-accent font-medium text-sm mb-2">
                    {activity.role}
                  </p>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {activity.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-foreground">
                      {activity.achievement}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
