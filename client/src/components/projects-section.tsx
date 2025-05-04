import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import ProjectCard from "@/components/project-card";
import { projectsData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Filter, 
  Code, 
  Server, 
  Database, 
  Layout, 
  Monitor, 
  Search,
  X
} from "lucide-react";

export default function ProjectsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Extract all unique technologies from projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projectsData.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter projects based on selected technology and search query
  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      // Filter by tech
      const techMatch = selectedTech 
        ? project.technologies.includes(selectedTech)
        : true;
      
      // Filter by search
      const searchLower = searchQuery.toLowerCase();
      const searchMatch = searchQuery 
        ? project.title.toLowerCase().includes(searchLower) || 
          project.shortDescription.toLowerCase().includes(searchLower) ||
          project.description.toLowerCase().includes(searchLower) ||
          project.technologies.some(tech => tech.toLowerCase().includes(searchLower))
        : true;
      
      return techMatch && searchMatch;
    });
  }, [selectedTech, searchQuery]);

  const toggleProject = (projectId: string) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectId);
    }
  };

  // Reset expanded project when filter changes
  useEffect(() => {
    setExpandedProject(null);
  }, [selectedTech, searchQuery]);

  // Group technologies into categories for better organization
  const techCategories = {
    "Languages": ["Java", "Python", "JavaScript", "TypeScript", "C++"],
    "Frontend": ["React", "HTML/CSS"],
    "Backend": ["Spring Boot", "Node.js", "Express.js"],
    "Database": ["MongoDB", "SQL"],
    "Other": ["DSA", "Algorithms", "Steganography", "Cryptography", "Computer Vision", "OpenCV"]
  };

  // Find which category a tech belongs to
  const getTechCategory = (tech: string) => {
    for (const [category, techs] of Object.entries(techCategories)) {
      if (techs.includes(tech)) return category;
    }
    return "Other";
  };

  return (
    <section id="projects" ref={ref} className="section-container bg-background dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <h2 className="section-title">Projects</h2>
          </motion.div>
          
          {/* Search and filter controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-3xl mx-auto mb-8"
          >
            {/* Search input */}
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-foreground/50" />
              </div>
              <input
                type="text"
                placeholder="Search projects by name, description or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all duration-300"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <X className="h-4 w-4 text-foreground/50 hover:text-foreground" />
                </button>
              )}
            </div>
            
            {/* Tech filter */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-medium text-foreground/70">Filter by technology</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedTech === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTech(null)}
                  className="rounded-full text-xs"
                >
                  All
                </Button>
                
                {allTechnologies.map((tech) => (
                  <Button
                    key={tech}
                    variant={selectedTech === tech ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTech(tech === selectedTech ? null : tech)}
                    className={`rounded-full text-xs ${
                      selectedTech === tech 
                        ? "" 
                        : "hover:bg-primary/10 hover:text-primary hover:border-primary/30"
                    }`}
                  >
                    {getTechCategory(tech) === "Languages" && <Code className="mr-1 h-3 w-3" />}
                    {getTechCategory(tech) === "Frontend" && <Layout className="mr-1 h-3 w-3" />}
                    {getTechCategory(tech) === "Backend" && <Server className="mr-1 h-3 w-3" />}
                    {getTechCategory(tech) === "Database" && <Database className="mr-1 h-3 w-3" />}
                    {getTechCategory(tech) === "Other" && <Monitor className="mr-1 h-3 w-3" />}
                    {tech}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Display number of results */}
        {(selectedTech || searchQuery) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-8"
          >
            <p className="text-sm text-foreground/70">
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
              {selectedTech && <span> with <Badge variant="outline" className="ml-1 font-normal">{selectedTech}</Badge></span>}
              {searchQuery && <span> matching "<span className="font-medium">{searchQuery}</span>"</span>}
            </p>
          </motion.div>
        )}

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * Math.min(index, 5) }}
              >
                <ProjectCard
                  project={project}
                  expanded={expandedProject === project.id}
                  onToggle={() => toggleProject(project.id)}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                <Search className="h-8 w-8 text-foreground/30" />
              </div>
              <h3 className="text-xl font-medium">No projects found</h3>
              <p className="text-foreground/60 max-w-md">
                No projects match your current filters. Try changing your search terms or clearing filters.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSelectedTech(null);
                  setSearchQuery("");
                }}
                className="mt-2"
              >
                Clear filters
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
