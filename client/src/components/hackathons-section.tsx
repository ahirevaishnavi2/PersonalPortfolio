import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Trophy, CheckCircle, Medal, Calendar } from "lucide-react";
import { hackathonsData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function HackathonsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="hackathons" ref={ref} className="section-container bg-background dark:bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="section-title">Hackathons</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {hackathonsData.map((hackathon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * Math.min(index, 5) }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full p-6 shadow-md hover:shadow-lg transition-all duration-300 bg-card/50 border border-border/50 relative overflow-hidden">
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/70"></div>
                
                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-4">
                    {/* Icon with gradient background */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center text-white shadow-md relative overflow-hidden flex-shrink-0">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3),transparent_70%)]"></div>
                      <Trophy className="w-6 h-6 relative z-10" />
                    </div>
                    
                    {/* Title & Badges */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                        <h3 className="text-xl font-bold font-heading">{hackathon.title}</h3>
                        <Badge 
                          variant="default" 
                          className="bg-accent/20 hover:bg-accent/30 text-accent border-none w-fit"
                        >
                          <Medal className="w-3.5 h-3.5 mr-1" />
                          {hackathon.achievement}
                        </Badge>
                      </div>
                      <div className="flex items-center mt-2 text-foreground/60 text-sm">
                        <Calendar className="w-4 h-4 mr-1.5" />
                        <span>{hackathon.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Details */}
                  <div className="mt-6 flex-1">
                    <ul className="space-y-3">
                      {hackathon.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-foreground/80">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
