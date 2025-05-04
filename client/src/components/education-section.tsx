import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { GraduationCap, School, Calendar, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function EducationSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="education" ref={ref} className="section-container bg-background dark:bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="section-title">Education</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Education 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <Card className="p-6 shadow-md hover:shadow-lg transition-all duration-300 bg-card/50 border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/70"></div>
              
              <div className="flex items-start gap-4">
                <div className="hidden md:flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full flex-shrink-0">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-bold font-heading">MKSSS Cummins College Of Engineering For Women</h3>
                    <div className="flex items-center text-primary font-medium mt-1 md:mt-0">
                      <Calendar className="h-4 w-4 mr-1 flex-shrink-0" />
                      <span>Aug 2023 - Present</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex flex-col gap-2">
                    <div className="flex items-center text-foreground/80">
                      <Award className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                      <span className="font-medium">B.Tech Computer Science</span>
                    </div>
                    <p className="text-foreground/70 mt-2 pl-6">Focusing on core computer science concepts and advanced programming, with coursework in data structures, algorithms, and software development.</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Education 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <Card className="p-6 shadow-md hover:shadow-lg transition-all duration-300 bg-card/50 border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-secondary/70"></div>
              
              <div className="flex items-start gap-4">
                <div className="hidden md:flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full flex-shrink-0">
                  <School className="h-8 w-8 text-secondary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-bold font-heading">Fergusson College</h3>
                    <div className="flex items-center text-secondary font-medium mt-1 md:mt-0">
                      <Calendar className="h-4 w-4 mr-1 flex-shrink-0" /> 
                      <span>Jun 2022 - Mar 2023</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex flex-col gap-2">
                    <div className="flex items-center text-foreground/80">
                      <Award className="h-4 w-4 mr-2 text-secondary flex-shrink-0" />
                      <span className="font-medium">HSC (Higher Secondary Certificate)</span>
                    </div>
                    <p className="text-foreground/70 mt-2 pl-6">Completed higher secondary education with a focus on science and mathematics, building a strong foundation for engineering studies.</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
