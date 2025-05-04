import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Database, Layout, Terminal, Server, Cpu } from "lucide-react";

interface Skill {
  name: string;
  level: number; // 0-100
  category: "languages" | "frontend" | "backend" | "databases" | "tools" | "concepts";
}

export default function SkillsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const controls = useAnimation();
  const [activeTab, setActiveTab] = useState("languages");
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !animated) {
      controls.start("visible");
      setAnimated(true);
    }
  }, [isVisible, controls, animated]);

  const skills: Skill[] = [
    // Languages
    { name: "Java", level: 90, category: "languages" },
    { name: "Python", level: 85, category: "languages" },
    { name: "JavaScript", level: 80, category: "languages" },
    { name: "C", level: 75, category: "languages" },

    // Frontend
    { name: "React", level: 85, category: "frontend" },
    { name: "HTML/CSS", level: 90, category: "frontend" },

    // Backend
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express.js", level: 80, category: "backend" },

    // Databases
    { name: "MongoDB", level: 85, category: "databases" },
    { name: "MySQL", level: 80, category: "databases" },

    // Tools
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },

    // Concepts
    { name: "Data Structures", level: 90, category: "concepts" },
    { name: "Algorithms", level: 85, category: "concepts" },
    { name: "OOP", level: 90, category: "concepts" },
  ];

  // Get skills for currently active tab
  const filteredSkills = skills.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" ref={ref} className="section-container py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="section-title">Technical Skills</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Skill category tabs */}
          <Tabs 
            defaultValue="languages" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full mb-8"
          >
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
              <TabsTrigger 
                value="languages" 
                className="flex items-center justify-center gap-2 data-[state=active]:text-primary"
              >
                <Code className="h-4 w-4" />
                <span className="hidden md:inline">Languages</span>
              </TabsTrigger>
              <TabsTrigger 
                value="frontend" 
                className="flex items-center justify-center gap-2 data-[state=active]:text-primary"
              >
                <Layout className="h-4 w-4" />
                <span className="hidden md:inline">Frontend</span>
              </TabsTrigger>
              <TabsTrigger 
                value="backend" 
                className="flex items-center justify-center gap-2 data-[state=active]:text-primary"
              >
                <Server className="h-4 w-4" />
                <span className="hidden md:inline">Backend</span>
              </TabsTrigger>
              <TabsTrigger 
                value="databases" 
                className="flex items-center justify-center gap-2 data-[state=active]:text-primary"
              >
                <Database className="h-4 w-4" />
                <span className="hidden md:inline">Databases</span>
              </TabsTrigger>
              <TabsTrigger 
                value="tools" 
                className="flex items-center justify-center gap-2 data-[state=active]:text-primary"
              >
                <Terminal className="h-4 w-4" />
                <span className="hidden md:inline">Tools</span>
              </TabsTrigger>
              <TabsTrigger 
                value="concepts" 
                className="flex items-center justify-center gap-2 data-[state=active]:text-primary"
              >
                <Cpu className="h-4 w-4" />
                <span className="hidden md:inline">Concepts</span>
              </TabsTrigger>
            </TabsList>

            {/* Skills content for each tab */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6">
              {filteredSkills.map((skill) => (
                <SkillBar 
                  key={skill.name} 
                  name={skill.name} 
                  level={skill.level} 
                  isVisible={isVisible && animated}
                />
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

interface SkillBarProps {
  name: string;
  level: number;
  isVisible: boolean;
}

function SkillBar({ name, level, isVisible }: SkillBarProps) {
  return (
    <div className="relative mb-3">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-sm">{name}</span>
        <span className="text-xs text-foreground/60">{level}%</span>
      </div>
      <div className="w-full h-2 bg-muted/30 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${level}%` : 0 }}
          transition={{ 
            duration: 1,
            delay: 0.3,
            ease: "easeOut" 
          }}
        />
      </div>
    </div>
  );
}