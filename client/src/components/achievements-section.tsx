import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { 
  Medal, Award, Trophy, Star, Sparkles, Check
} from "lucide-react";
import { achievementsData } from "@/lib/data";
import { Card } from "@/components/ui/card";

export default function AchievementsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  // Map achievement indices to icons
  const getIcon = (index: number) => {
    const icons = [Medal, Award, Trophy, Star, Sparkles];
    return icons[index % icons.length];
  };

  // Map achievement indices to gradient colors
  const getGradient = (index: number) => {
    const gradients = [
      "from-primary to-primary/70",
      "from-secondary to-secondary/70",
      "from-accent to-accent/70",
      "from-blue-500 to-purple-500",
      "from-orange-500 to-amber-500"
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="achievements" ref={ref} className="section-container bg-background dark:bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="section-title">Activities & Achievements</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {achievementsData.map((achievement, index) => {
            const IconComponent = getIcon(index);
            const gradient = getGradient(index);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * Math.min(index, 5) }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="h-full"
              >
                <Card className="h-full p-6 shadow-md hover:shadow-lg transition-all duration-300 bg-card/50 border border-border/50 relative overflow-hidden flex flex-col">
                  {/* Top gradient line */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradient}`}></div>
                  
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-md relative overflow-hidden flex-shrink-0`}>
                      {/* Add shine effect */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3),transparent_70%)]"></div>
                      <IconComponent className="h-5 w-5 relative z-10" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-bold font-heading">{achievement.title}</h3>
                    </div>
                  </div>

                  {/* Optional details section - empty now but can be used in the future */}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
