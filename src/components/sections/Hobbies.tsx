import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Dumbbell, 
  Music, 
  Gamepad2, 
  BookOpen, 
  Camera, 
  Plane,
  TrendingUp
} from "lucide-react";

const Hobbies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const hobbies = [
    {
      icon: Dumbbell,
      title: "Sports & Fitness",
      description: "Football, basketball, swimming, pickle ball and regular gym workouts keep me energized and focused.",
      color: "bg-orange-500/10 text-orange-500",
    },
    {
      icon: Music,
      title: "Music",
      description: "I like to play the guitar and piano and also I do music production in my free time.",
      color: "bg-purple-500/10 text-purple-500",
      link: "https://drive.google.com/drive/folders/1hAGntm0v1uHM9rt61Kk9yH08bIhQssPJ?usp=sharing",
    },
    {
      icon: BookOpen,
      title: "Reading",
      description: "Tech blogs, science fiction, and books on psychology and leadership.",
      color: "bg-green-500/10 text-green-500",
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "Passionate about studying financial markets, analyzing trends, and exploring investment opportunities.",
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description: "Enjoy strategic games and e-sports, which help develop quick thinking and teamwork skills.",
      color: "bg-red-500/10 text-red-500",
    },
    {
      icon: Plane,
      title: "Traveling",
      description: "Exploring new places, cultures, and cuisines whenever possible.",
      color: "bg-cyan-500/10 text-cyan-500",
    },
  ];

  return (
    <section id="hobbies" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-3">
            Life beyond code
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Hobbies & Interests
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 group cursor-default"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${hobby.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <hobby.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {hobby.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {hobby.description}
              </p>
              {hobby.link && (
                <a
                  href={hobby.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-xs bg-accent/10 text-accent rounded-full hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                >
                  <hobby.icon className="w-3 h-3" />
                  Listen/Play
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
