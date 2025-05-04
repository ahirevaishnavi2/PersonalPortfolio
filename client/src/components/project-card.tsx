import { useState } from "react";
import { ChevronDown, ChevronUp, Github, ExternalLink, PlayCircle, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectType } from "@/lib/data";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: ProjectType;
  expanded: boolean;
  onToggle: () => void;
}

export default function ProjectCard({ project, expanded, onToggle }: ProjectCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="project-card flex flex-col h-full rounded-2xl overflow-hidden border border-border/40 hover:border-primary/30 bg-card/50 dark:bg-card/30 backdrop-blur-sm shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
    >
      {/* Image header with overlay */}
      <div className="relative h-52 overflow-hidden group">
        <img
          src={project.image}
          alt={`${project.title} project thumbnail`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300">
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-black/50 text-white border-none">
              {project.date}
            </Badge>
          </div>
        </div>
        
        {/* Tech badges */}
        <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-black/70 text-white border-white/20 backdrop-blur-sm">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline" className="bg-black/70 text-white border-white/20 backdrop-blur-sm">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>
      </div>
      
      {/* Content area */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold font-heading">{project.title}</h3>
          <Button
            size="sm"
            variant="ghost"
            onClick={onToggle}
            className="h-8 w-8 p-0 ml-2 rounded-full flex-shrink-0"
            aria-label={expanded ? "Hide details" : "Show details"}
          >
            {expanded ? 
              <ChevronUp className="h-4 w-4 text-foreground/70" /> : 
              <ChevronDown className="h-4 w-4 text-foreground/70" />
            }
          </Button>
        </div>
        
        <p className="text-foreground/70 text-sm">{project.shortDescription}</p>
        
        {/* Tech stack full list - shown when expanded */}
        <div className={`project-details overflow-hidden transition-all duration-500 ${expanded ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-2">
              <Code className="h-4 w-4 text-primary" />
              <h4 className="font-medium text-sm">Tech Stack</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="border-primary/20 text-foreground/80">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="border-t border-border/30 pt-3 mb-4">
            <p className="text-sm text-foreground/70">{project.description}</p>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {project.links.github && (
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-border hover:border-primary/30 btn-hover-effect"
              asChild
            >
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </Button>
          )}
          
          {project.links.demo && (
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-border hover:border-primary/30 btn-hover-effect"
              asChild
            >
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                <PlayCircle className="h-4 w-4" />
                <span>Demo</span>
              </a>
            </Button>
          )}
          
          {project.links.website && (
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-border hover:border-primary/30 btn-hover-effect"
              asChild
            >
              <a href={project.links.website} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                <span>Website</span>
              </a>
            </Button>
          )}
          
          {project.links.link && (
            <Button
              variant="outline"
              size="sm" 
              className="gap-2 border-border hover:border-primary/30 btn-hover-effect"
              asChild
            >
              <a href={project.links.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                <span>Link</span>
              </a>
            </Button>
          )}
          
          {/* View details button (shown when NOT expanded) */}
          {!expanded && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className="gap-2 ml-auto text-primary"
            >
              <span>Details</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
