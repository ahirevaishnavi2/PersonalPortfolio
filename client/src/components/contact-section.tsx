import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Link as LinkIcon,
  SendHorizonal,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import ContactForm from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="contact"
      ref={ref}
      className="section-container bg-background dark:bg-background relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-primary/5 rounded-full blur-[100px] opacity-70"></div>
        <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-secondary/5 rounded-full blur-[100px] opacity-70"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="section-title">Contact Me</h2>
          <p className="text-center mt-4 text-foreground/70 max-w-lg">
            Interested in working together? Fill out the form below or reach out
            to me directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 lg:col-span-2"
          >
            <Card className="overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/70"></div>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading">Email</h3>
                      <a
                        href="mailto:ahirevaishnavi82@gmail.com"
                        className="text-foreground/70 hover:text-primary transition-colors"
                      >
                        ahirevaishnavi82@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading">Phone</h3>
                      <p className="text-foreground/70">+91 8530017432</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading">
                        Location
                      </h3>
                      <p className="text-foreground/70">
                        Pune, Maharashtra, India
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-border/30 pt-6">
                    <h3 className="text-lg font-bold font-heading mb-4">
                      Connect with me
                    </h3>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/ahirevaishnavi2"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-muted/50 hover:bg-primary/10 text-foreground/70 hover:text-primary transition-colors border border-border hover:border-primary/30"
                      >
                        <FaGithub className="h-5 w-5" />
                      </a>
                      <a
                        href="http://linkedin.com/in/ahirevaishnavi"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-muted/50 hover:bg-primary/10 text-foreground/70 hover:text-primary transition-colors border border-border hover:border-primary/30"
                      >
                        <FaLinkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <Card className="overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-secondary/70"></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                    <SendHorizonal className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold font-heading">
                    Send me a message
                  </h3>
                </div>

                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
