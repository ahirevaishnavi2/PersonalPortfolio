import { motion } from "framer-motion";
import TypedText from "@/components/typed-text";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  ArrowDown,
  ExternalLink,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const handleDownloadResume = () => {
    window.open("/api/download-resume", "_blank");
  };

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden section-container"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-[10%] w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-soft"></div>
        <div className="absolute bottom-[20%] left-[5%] w-72 h-72 bg-secondary/10 rounded-full blur-[100px] animate-pulse-soft animation-delay-1000"></div>
        <div className="absolute bottom-[10%] right-[20%] w-64 h-64 bg-accent/10 rounded-full blur-[100px] animate-pulse-soft animation-delay-2000"></div>
      </div>

      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Left content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-6"
            >
              <Badge
                variant="outline"
                className="px-4 py-1.5 text-sm font-medium border-primary/30 text-primary flex items-center justify-center w-fit mb-4"
              >
                <span className="animate-pulse mr-2 w-2 h-2 rounded-full bg-primary"></span>
                Available for opportunities
              </Badge>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hello, I'm{" "}
                <span className="text-primary relative inline-block">
                  Vaishnavi Ahire
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-primary/20 -z-10 rounded"></span>
                </span>
              </h1>

              <h2 className="font-medium text-2xl md:text-3xl text-foreground/80">
                <TypedText />
              </h2>

              <p className="text-lg md:text-xl text-foreground/70 max-w-2xl">
                Computer Science student with expertise in development and
                problem-solving. Microsoft Learn Student Ambassador with
                achievements in hackathons and open source.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  <Mail className="mr-2 h-4 w-4" /> Let's Connect
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleDownloadResume}
                  className="border-primary/20 text-primary hover:bg-primary/5 shadow-sm btn-hover-effect rounded-lg"
                >
                  <Download className="mr-2 h-4 w-4" /> Resume
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://github.com/ahirevaishnavi2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-background hover:bg-primary/10 text-foreground hover:text-primary border border-border hover:border-primary/30 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="h-5 w-5" />
                </a>

                <a
                  href="http://linkedin.com/in/ahirevaishnavi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-background hover:bg-primary/10 text-foreground hover:text-primary border border-border hover:border-primary/30 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>

                <a
                  href="mailto:ahirevaishnavi82@gmail.com"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-background hover:bg-primary/10 text-foreground hover:text-primary border border-border hover:border-primary/30 transition-all duration-300"
                  aria-label="Send Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center items-center"
          >
            <div className="relative">
              {/* Image decorations and accents */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl opacity-20 animate-pulse-soft"></div>
              <div className="absolute -inset-1 bg-gradient-to-br from-primary via-background to-secondary opacity-30 rounded-full"></div>

              {/* Main image */}
      
              <div className="relative z-10 p-1 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm">
  <div className="rounded-full p-2 bg-background/80 backdrop-blur-sm">
    <img
      src="/assets/VaishnaviImage.jpg"
      alt="Vaishnavi Ahire"
      className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border border-primary/40 shadow-lg"
    />
  </div>
</div>


              {/* Skills badges floating around the image */}
              <div className="absolute -top-6 -right-6 bg-background/60 dark:bg-background/60 backdrop-blur-lg rounded-xl shadow-lg p-2 animate-float">
                <Badge variant="secondary" className="font-medium">
                  Java
                </Badge>
              </div>
              <div className="absolute top-1/2 -right-10 bg-background/60 dark:bg-background/60 backdrop-blur-lg rounded-xl shadow-lg p-2 animate-float animation-delay-500">
                <Badge variant="secondary" className="font-medium">
                  React
                </Badge>
              </div>
              <div className="absolute -bottom-6 right-10 bg-background/60 dark:bg-background/60 backdrop-blur-lg rounded-xl shadow-lg p-2 animate-float animation-delay-1000">
                <Badge variant="secondary" className="font-medium">
                  Python
                </Badge>
              </div>
              <div className="absolute bottom-20 -left-10 bg-background/60 dark:bg-background/60 backdrop-blur-lg rounded-xl shadow-lg p-2 animate-float animation-delay-1500">
                <Badge variant="secondary" className="font-medium">
                  DSA
                </Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <button
          onClick={scrollToNext}
          aria-label="Scroll to next section"
          className="text-primary/70 hover:text-primary transition-colors"
        >
          <ArrowDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}
