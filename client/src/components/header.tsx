import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Menu, 
  X, 
  Download, 
  Home, 
  User, 
  Code, 
  Briefcase, 
  GraduationCap, 
  FolderKanban, 
  Award, 
  Mail,
  ChevronRight 
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isMobile = useIsMobile();
  const [, setLocation] = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Set header styles based on scroll position
      setIsScrolled(window.scrollY > 10);
      
      // Highlight active section in the navigation
      const sections = [
        "home", "about", "skills", "experience", 
        "education", "projects", "hackathons", 
        "achievements", "contact"
      ];
      
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (
            scrollPosition >= offsetTop && 
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // If mobile menu is open, prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };
  
  const handleResumeDownload = () => {
    window.open("/api/download-resume", "_blank");
  };

  // Navigation items with icons
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "achievements", label: "Achievements", icon: Award },
    { id: "contact", label: "Contact", icon: Mail }
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 dark:bg-background/95 backdrop-blur-lg shadow-md border-b border-border/20" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3),transparent_70%)]"></div>
            <span className="relative text-white font-bold text-xl">VA</span>
          </div>
          <span className="font-heading font-bold text-xl tracking-tight">Vaishnavi Ahire</span>
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <div className="bg-muted/50 backdrop-blur-sm rounded-full p-1 mx-auto">
            <div className="flex space-x-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a 
                    key={item.id}
                    href={`#${item.id}`} 
                    className={`nav-link relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      isActive 
                        ? "text-primary-foreground" 
                        : "text-foreground/70 hover:text-foreground hover:bg-muted"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-primary rounded-full"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </nav>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <ThemeToggle />
          </motion.div>
          
          <motion.div 
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={handleResumeDownload}
              variant="outline" 
              size="sm" 
              className="items-center gap-2 border-primary/30 text-primary hover:bg-primary/10 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </Button>
          </motion.div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="focus:outline-none text-foreground/70 hover:text-foreground"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/60 backdrop-blur-md md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-[70%] max-w-sm bg-background border-l border-border/20 shadow-xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">VA</span>
                    </div>
                    <h3 className="font-heading font-bold">Menu</h3>
                  </div>
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="space-y-1">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.a
                        key={item.id}
                        whileHover={{ x: 5 }}
                        href={`#${item.id}`}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                          activeSection === item.id 
                            ? "bg-primary/10 text-primary font-medium" 
                            : "text-foreground/80 hover:bg-muted"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.id);
                        }}
                      >
                        <Icon className="h-5 w-5" />
                        <span>{item.label}</span>
                        {activeSection === item.id && (
                          <ChevronRight className="ml-auto h-4 w-4" />
                        )}
                      </motion.a>
                    );
                  })}
                </div>
                
                <div className="pt-4 border-t border-border/20">
                  <Button 
                    onClick={handleResumeDownload}
                    variant="default" 
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Resume</span>
                  </Button>
                </div>
                
                <div className="pt-4 flex justify-center">
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
