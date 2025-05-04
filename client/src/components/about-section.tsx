import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { 
  Code, 
  Lightbulb, 
  User, 
  GraduationCap, 
  Award, 
  Mail, 
  Phone, 
  Sparkles, 
  Heart, 
  BookOpen, 
  Music, 
  Map, 
  HandHeart 
} from "lucide-react";
import { FaCertificate, FaMicrosoft, FaJava, FaPython, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function AboutSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" ref={ref} className="section-container">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Profile Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            {/* Bio Card */}
            <Card className="mb-6 bg-card/50 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <User className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold ml-3 font-heading">Professional Summary</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative pl-4 border-l-2 border-primary/30">
                  <p className="text-foreground/80">
                    I'm a second-year <span className="text-primary font-medium">Computer Science undergraduate</span> student with a passion for technology and innovation. My experience spans from technical development to leadership roles in collegiate organizations.
                  </p>
                </div>

                <div className="relative pl-4 border-l-2 border-primary/30">
                  <p className="text-foreground/80">
                    As a <span className="text-primary font-medium">Microsoft Learn Student Ambassador</span> and E-Cell Yukta Head of Events, I've developed strong project management skills while maintaining technical excellence in my academic pursuits.
                  </p>
                </div>

                <div className="relative pl-4 border-l-2 border-primary/30">
                  <p className="text-foreground/80">
                    I'm particularly interested in <span className="text-primary font-medium">software development</span>, with a focus on building impactful applications and contributing to open source projects.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="flex flex-col space-y-3 pt-4 mt-4 border-t border-border/30">
                  <div className="flex items-center text-sm">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mr-3">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <a href="mailto:ahirevaishnavi82@gmail.com" className="text-foreground/80 hover:text-primary transition-colors">ahirevaishnavi82@gmail.com</a>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mr-3">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <a href="mailto:ahirevaishnavi47@gmail.com" className="text-foreground/80 hover:text-primary transition-colors">ahirevaishnavi47@gmail.com</a>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mr-3">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground/80">+91 8530017432</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="mb-6 bg-card/50 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-secondary/70"></div>
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold ml-3 font-heading">Certifications</h3>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start py-2 px-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <FaMicrosoft className="text-secondary mr-3 mt-1 text-lg flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Microsoft Learn Student Ambassador</h4>
                      <p className="text-sm text-foreground/60">Recognized for technical advocacy and community leadership</p>
                    </div>
                  </li>
                  <li className="flex items-start py-2 px-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <FaCertificate className="text-secondary mr-3 mt-1 text-lg flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Java Programming</h4>
                      <p className="text-sm text-foreground/60">Udemy Certification</p>
                    </div>
                  </li>
                  <li className="flex items-start py-2 px-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <FaCertificate className="text-secondary mr-3 mt-1 text-lg flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Python BootCamp</h4>
                      <p className="text-sm text-foreground/60">Comprehensive Python development skills</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="bg-card/50 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/70"></div>
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold ml-3 font-heading">Interests</h3>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <BookOpen className="w-4 h-4 mr-2 text-accent" />
                    <span className="text-sm">Reading books</span>
                  </div>
                  <div className="flex items-center p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <Music className="w-4 h-4 mr-2 text-accent" />
                    <span className="text-sm">Dancing</span>
                  </div>
                  <div className="flex items-center p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <Map className="w-4 h-4 mr-2 text-accent" />
                    <span className="text-sm">Traveling</span>
                  </div>
                  <div className="flex items-center p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <HandHeart className="w-4 h-4 mr-2 text-accent" />
                    <span className="text-sm">Volunteering</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-7 order-1 lg:order-2 space-y-6"
          >
            {/* Technical Skills Card */}
            <Card className="bg-card/50 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/70"></div>
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Code className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold ml-3 font-heading">Technical Skills</h3>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Programming Languages */}
                  <div>
                    <h4 className="flex items-center text-base font-medium mb-3">
                      <Code className="inline w-4 h-4 mr-2 text-primary" />
                      Programming Languages
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="flex items-center p-3 rounded-lg bg-muted/30 hover:bg-primary/5 transition-colors">
                        <FaJava className="text-lg mr-2 text-primary" />
                        <div>
                          <span className="text-sm font-medium">Java</span>
                          <div className="w-full h-1.5 bg-muted/50 rounded-full mt-1.5">
                            <div className="h-full bg-primary rounded-full" style={{ width: '90%' }}></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center p-3 rounded-lg bg-muted/30 hover:bg-primary/5 transition-colors">
                        <span className="text-lg mr-2 text-primary font-mono font-bold">C</span>
                        <div>
                          <span className="text-sm font-medium">C</span>
                          <div className="w-full h-1.5 bg-muted/50 rounded-full mt-1.5">
                            <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center p-3 rounded-lg bg-muted/30 hover:bg-primary/5 transition-colors">
                        <FaPython className="text-lg mr-2 text-primary" />
                        <div>
                          <span className="text-sm font-medium">Python</span>
                          <div className="w-full h-1.5 bg-muted/50 rounded-full mt-1.5">
                            <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center p-3 rounded-lg bg-muted/30 hover:bg-primary/5 transition-colors">
                        <span className="text-lg mr-2 text-primary font-mono font-bold">JS</span>
                        <div>
                          <span className="text-sm font-medium">JavaScript</span>
                          <div className="w-full h-1.5 bg-muted/50 rounded-full mt-1.5">
                            <div className="h-full bg-primary rounded-full" style={{ width: '80%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Web Technologies */}
                  <div>
                    <h4 className="flex items-center text-base font-medium mb-3">
                      <FaReact className="inline mr-2 text-primary" />
                      Web Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary/5 text-foreground hover:bg-primary/10 transition-colors">
                        <FaReact className="mr-1 text-primary" /> React.js
                      </Badge>
                      <Badge variant="outline" className="bg-primary/5 text-foreground hover:bg-primary/10 transition-colors">
                        <FaNodeJs className="mr-1 text-primary" /> Node.js
                      </Badge>
                      <Badge variant="outline" className="bg-primary/5 text-foreground hover:bg-primary/10 transition-colors">
                        HTML
                      </Badge>
                      <Badge variant="outline" className="bg-primary/5 text-foreground hover:bg-primary/10 transition-colors">
                        CSS
                      </Badge>
                      <Badge variant="outline" className="bg-primary/5 text-foreground hover:bg-primary/10 transition-colors">
                        <SiMongodb className="mr-1 text-primary" /> MongoDB
                      </Badge>
                      <Badge variant="outline" className="bg-primary/5 text-foreground hover:bg-primary/10 transition-colors">
                        <SiMysql className="mr-1 text-primary" /> MySQL
                      </Badge>
                      <Badge variant="outline" className="bg-primary/5 text-foreground hover:bg-primary/10 transition-colors">
                        Express.js
                      </Badge>
                      <Badge variant="outline" className="bg-primary/5 text-foreground hover:bg-primary/10 transition-colors">
                        MERN Stack
                      </Badge>
                    </div>
                  </div>

                  {/* Concepts */}
                  <div>
                    <h4 className="flex items-center text-base font-medium mb-3">
                      <Sparkles className="inline w-4 h-4 mr-2 text-primary" />
                      Concepts
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-primary/5 text-foreground hover:bg-primary/10 transition-colors">
                        Data Structures
                      </Badge>
                      <Badge variant="outline" className="bg-primary/5 text-foreground hover:bg-primary/10 transition-colors">
                        Algorithms
                      </Badge>
                      <Badge variant="outline" className="bg-primary/5 text-foreground hover:bg-primary/10 transition-colors">
                        OOP
                      </Badge>
                      <Badge variant="outline" className="bg-primary/5 text-foreground hover:bg-primary/10 transition-colors">
                        Git/GitHub
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills Card */}
            <Card className="bg-card/50 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-secondary/70"></div>
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold ml-3 font-heading">Soft Skills</h3>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-muted/30 hover:bg-secondary/5 transition-colors">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                        <Lightbulb className="w-6 h-6 text-secondary" />
                      </div>
                      <h4 className="font-medium text-sm">Leadership</h4>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/30 hover:bg-secondary/5 transition-colors">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                        <Lightbulb className="w-6 h-6 text-secondary" />
                      </div>
                      <h4 className="font-medium text-sm">Communication</h4>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/30 hover:bg-secondary/5 transition-colors">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                        <Lightbulb className="w-6 h-6 text-secondary" />
                      </div>
                      <h4 className="font-medium text-sm">Problem Solving</h4>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/30 hover:bg-secondary/5 transition-colors">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                        <Lightbulb className="w-6 h-6 text-secondary" />
                      </div>
                      <h4 className="font-medium text-sm">Teamwork</h4>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/30 hover:bg-secondary/5 transition-colors">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                        <Lightbulb className="w-6 h-6 text-secondary" />
                      </div>
                      <h4 className="font-medium text-sm">Public Speaking</h4>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/30 hover:bg-secondary/5 transition-colors">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                        <Lightbulb className="w-6 h-6 text-secondary" />
                      </div>
                      <h4 className="font-medium text-sm">Networking</h4>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
