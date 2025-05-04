import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Briefcase, GitBranch, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ExperienceSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="experience" ref={ref} className="section-container bg-background dark:bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="section-title">Experience</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline container */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 h-full w-1 bg-border/50 transform md:-translate-x-1/2 rounded-full"></div>

            {/* Experience 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16 md:mb-24 relative"
            >
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex md:w-1/2 mb-6 md:mb-0 md:justify-end md:pr-10">
                  <div className="md:text-right">
                    <h3 className="text-xl font-bold font-heading">Microsoft Learn Student Ambassador – Alpha</h3>
                    <p className="text-primary font-medium mt-1">Jan 2025 - Present</p>
                  </div>
                </div>

                <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 w-12 h-12 rounded-full bg-primary/90 border-4 border-background dark:border-background shadow-lg shadow-primary/20 flex items-center justify-center z-10">
                  <Briefcase className="h-5 w-5 text-white" />
                </div>

                <div className="md:w-1/2 md:pl-10">
                  <Card className="p-5 shadow-md hover:shadow-lg transition-all duration-300 bg-card/50 border border-border/50">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span className="text-foreground/80">Organized and hosted online technical events, engaging 1000+ participants across multiple sessions</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
            </motion.div>

            {/* Experience 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-16 md:mb-24 relative"
            >
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-10 md:order-1 md:text-right">
                  <div>
                    <h3 className="text-xl font-bold font-heading">E-Cell Yukta – Head of Events</h3>
                    <p className="text-primary font-medium mt-1">Oct 2023 - Present</p>
                  </div>
                </div>

                <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 w-12 h-12 rounded-full bg-primary/90 border-4 border-background dark:border-background shadow-lg shadow-primary/20 flex items-center justify-center z-10">
                  <Briefcase className="h-5 w-5 text-white" />
                </div>

                <div className="md:w-1/2 md:pl-10 md:order-2">
                  <Card className="p-5 shadow-md hover:shadow-lg transition-all duration-300 bg-card/50 border border-border/50">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span className="text-foreground/80">Organized and anchored 7+ events, fostering entrepreneurial thinking and ensuring smooth execution through teamwork and stakeholder coordination</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
            </motion.div>

            {/* Experience 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex md:w-1/2 mb-6 md:mb-0 md:justify-end md:pr-10">
                  <div className="md:text-right">
                    <h3 className="text-xl font-bold font-heading">Hacktoberfest 2024 – Open Source Contributor</h3>
                    <p className="text-primary font-medium mt-1">Oct 2024</p>
                  </div>
                </div>

                <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 w-12 h-12 rounded-full bg-secondary/90 border-4 border-background dark:border-background shadow-lg shadow-secondary/20 flex items-center justify-center z-10">
                  <GitBranch className="h-5 w-5 text-white" />
                </div>

                <div className="md:w-1/2 md:pl-10">
                  <Card className="p-5 shadow-md hover:shadow-lg transition-all duration-300 bg-card/50 border border-border/50">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span className="text-foreground/80">Successfully contributed to 4+ open-source repositories, enhancing skills in collaborative software development and version control</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
