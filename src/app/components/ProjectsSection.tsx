"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Code2, ShoppingCart } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  technologies: string[];
  hoverText: string;
  isDesignOnly?: boolean;
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    // Static project data based on Jean Bonheur's resume with custom cart project
    const staticProjects: Project[] = [
      {
        title: "E-Commerce Cart System",
        description: "Interactive shopping cart with real-time updates, price calculations, and checkout flow.",
        image: "/images/cart-project.jpg",
        link: "/projects/cart",
        github: "#",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
        hoverText: "Fully functional shopping cart with add/remove items, quantity updates, total price calculation, and responsive design.",
        isDesignOnly: true
      },
      {
        title: "Ndaje · Bus Ticket Booking",
        description: "Multi-language web platform for booking public bus tickets across Rwanda.",
        image: "/images/ndaje-project.jpg",
        link: "https://ndaje.rw",
        github: "https://github.com/nzasingizimana/ndaje",
        technologies: ["Python", "PHP", "JavaScript", "MySQL", "Tailwind CSS"],
        hoverText: "Full-stack web application with real-time booking, payment integration, and multi-language support. Built with Python, PHP, and JavaScript."
      },
      {
        title: "Shop Management System",
        description: "Complete business management system built entirely in Excel with automated dashboards.",
        image: "/images/excel-dashboard.jpg",
        link: "#",
        github: "https://github.com/nzasingizimana/shop-management-excel",
        technologies: ["Excel VBA", "Advanced Formulas", "Dashboards", "Data Automation"],
        hoverText: "Full-featured business management system with inventory, sales, invoices, and expense tracking. Automated cross-linked formulas for real-time sync."
      },
      {
        title: "IT Support & Consulting",
        description: "Professional IT support and system management services for insurance companies.",
        image: "/images/it-consulting.jpg",
        link: "#",
        github: "https://github.com/nzasingizimana/it-support-tools",
        technologies: ["IT Support", "Networking", "Troubleshooting", "EBM Operation"],
        hoverText: "Provided IT support and consultancy services at Radiant Company, handling system operations, data management, and technical troubleshooting."
      },
      {
        title: "Network Infrastructure Lab",
        description: "Hands-on networking projects covering TCP/IP, routing, and Cisco IOS fundamentals.",
        image: "/images/networking-lab.jpg",
        link: "#",
        github: "https://github.com/nzasingizimana/networking-lab",
        technologies: ["Cisco IOS", "TCP/IP", "Subnetting", "Routing Protocols"],
        hoverText: "Practical networking exercises and configurations covering OSI model, subnetting, routing, and Cisco IOS fundamentals."
      },
      {
        title: "Python Automation Scripts",
        description: "Collection of Python scripts for automating data processing and system tasks.",
        image: "/images/python-automation.jpg",
        link: "#",
        github: "https://github.com/nzasingizimana/python-automation",
        technologies: ["Python", "Automation", "Data Processing", "APIs"],
        hoverText: "Reusable Python scripts for data entry automation, file management, and system task automation."
      }
    ];

    setProjects(staticProjects);
  }, []);

  if (error) {
    return (
      <section id="projects" className="py-20 flex items-center justify-center p-6 bg-slate-900 scroll-mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white">My Projects</h2>
          <p className="text-red-500 mt-4 text-lg">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <h2 className="text-5xl font-bold text-white mb-4 relative">
              My Projects
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
              />
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Building Practical Solutions · Code that Solves Real Problems
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                {project.isDesignOnly ? (
                  <div className="flex flex-col items-center justify-center text-white/40">
                    <ShoppingCart size={64} className="mb-2 text-orange-400/60" />
                    <span className="text-sm font-medium text-white/40">Design Preview</span>
                    <span className="text-xs text-white/20 mt-1">UI/UX Concept</span>
                  </div>
                ) : project.image.startsWith('/images/') ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="text-6xl text-white/20">🚀</div>
                )}
                
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-blue-900/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.hoverText}</p>
                  
                  {/* Technology Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.isDesignOnly ? (
                      <div className="flex items-center gap-2 bg-orange-500/80 text-white px-4 py-2 rounded-lg font-medium cursor-default">
                        <ShoppingCart size={16} />
                        Design Only
                      </div>
                    ) : (
                      <>
                        <motion.a
                          href={project.link}
                          target={project.link.startsWith('/') ? '_self' : '_blank'}
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                        >
                          <Eye size={16} />
                          {project.link.startsWith('/') ? 'View Project' : 'Live Demo'}
                        </motion.a>
                        {project.github !== '#' && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                          >
                            <Code2 size={16} />
                            Code
                          </motion.a>
                        )}
                      </>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="p-6 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  {project.isDesignOnly && (
                    <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full font-medium">
                      Design
                    </span>
                  )}
                </div>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies - Visible Version */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full border border-orange-200">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects Button */}
        
          
      </div>
    </section>
  );
}