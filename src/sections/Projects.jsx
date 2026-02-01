import React, { useState } from 'react'
import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';

const projects = [
  {
    title: "DreamTrip-AI, smart travel assistant",
    description:
      "A Software Engineering capstone project: An intelligent travel agent providing personalized itineraries. It features a sophisticated recommendation engine for hotels, restaurants, and 'hidden gems' tailored to user preferences.",
    images: ["/projects/DreamTrip.png", "/projects/D1.png", "/projects/D2.png", "/projects/D3.png", "/projects/D4.png"],
    tags: ["React", "Typescript", "NodeJS"],
    link: "#",
    github: "#",
  },

  {
    title: "Resume Builder-AI",
    description:
      "A full-stack platform for crafting professional resumes with a real-time live preview. Integrated with a specialized LLM for smart content rewriting and optimization, helping users build polished, ATS-ready documents efficiently.",
    images: ["/projects/resumeBuilder.png", "/projects/R4.png", "/projects/R1.png", "/projects/R3.png", "/projects/R2.png"],
    tags: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"], // תיקנתי לפי השיחה שלנו שזה MERN
    link: "#",
    github: "#",
  },

  {
    title: "Interview Prep-AI",
    description:
      "A smart technical interview simulator that creates personalized practice sessions. Utilizing a trained AI model, it generates role-specific professional questions, allowing users to practice, learn, and improve their performance in real-time.",
    images: ["/projects/Interview1.png", "/projects/interview2.png", "/projects/interview3.png", "/projects/interview4.png"],
    tags: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    link: "#",
    github: "#",
  },  

  {
    title: "Chatbot-AI",
    description:
      "A feature-rich Gemini-inspired conversational agent. It supports multi-modal interactions including image upload and recognition, featuring full conversation history persistence in a database for a seamless user experience.",
    images: ["/projects/chatClone.png"],
    tags: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    link: "#",
    github: "#",
  },
];

const ProjectCard = ({ project, idx }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setDirection(1);
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setDirection(-1);
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const goToImage = (e, imgIdx) => {
    e.stopPropagation();
    setDirection(imgIdx > currentImageIndex ? 1 : -1);
    setCurrentImageIndex(imgIdx);
  };

  return (
    <div
      className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
      style={{ animationDelay: `${(idx + 1) * 100}ms` }}
    >
      {/* Image Carousel */}
      <div className="relative overflow-hidden aspect-video">
        {/* Images Container with smooth transitions */}
        <div className="relative w-full h-full">
          {project.images.map((image, imgIdx) => (
            <div
              key={imgIdx}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                imgIdx === currentImageIndex
                  ? 'opacity-100 translate-x-0 scale-100 z-10'
                  : imgIdx < currentImageIndex
                  ? 'opacity-0 -translate-x-full scale-95 z-0'
                  : 'opacity-0 translate-x-full scale-95 z-0'
              }`}
              style={{
                transitionProperty: 'opacity, transform',
              }}
            >
              <img
                src={image}
                alt={`${project.title} - Image ${imgIdx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
        <div className='absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 pointer-events-none'/>
        
        {/* Navigation Arrows - Show only if multiple images */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 hover:shadow-lg hover:shadow-primary/50 z-50"
              aria-label="Previous image"
            >
              <ChevronLeft className='w-5 h-5'/>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 hover:shadow-lg hover:shadow-primary/50 z-50"
              aria-label="Next image"
            >
              <ChevronRight className='w-5 h-5'/>
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
              {project.images.map((_, imgIdx) => (
                <button
                  key={imgIdx}
                  onClick={(e) => goToImage(e, imgIdx)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    imgIdx === currentImageIndex 
                      ? 'bg-primary w-8 shadow-lg shadow-primary/50' 
                      : 'bg-white/50 hover:bg-white/75 w-2 hover:w-4'
                  }`}
                  aria-label={`Go to image ${imgIdx + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Overlay Links */}
        <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40 pointer-events-none'>
          <a href={project.link} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50 pointer-events-auto'>
            <ArrowUpRight className='w-5 h-5'/>
          </a>
          <a href={project.github} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/50 pointer-events-auto'>
            <Github className='w-5 h-5'/>
          </a>
        </div>
      </div>

      {/* Content */}
      <div className='p-6 space-y-4'>
        <div className='flex items-start justify-between'>
          <h3 className='text-xl font-semibold group-hover:text-primary transition-colors'>{project.title}</h3>
          <ArrowUpRight className='w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all' />
        </div>
        <p className='text-muted-foreground text-sm'>{project.description}</p>
        <div className='flex flex-wrap gap-2'>{project.tags.map((tag,tagIdx) => (
          <span key={tagIdx} className='px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hove:border-primary/50 hover:text-primary transition-all duration-300'>{tag}</span>
        ))}</div>
      </div>
    </div>
  );
};

export const Projects = () => {
 return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className='container mx-auto px-6 relative z-10'>
                {/* Section Header */}
                <div className='text-center mx-auto max-w-3xl mb-16'>
                    <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>
                        Featured Work
                    </span>
                    <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
                        Projects that
                        <span className='font-serif italic font-normal text-white'> make an impact.</span>
                    </h2>
                    <p className='text-muted-foreground animate-fade-in animation-delay-200'>
                        A selection of my favorite projects that showcase my skills and expertise.
                    </p>
                    
                </div>



             {/* Projects Grid */}
             <div className='grid md:grid-cols-2 gap-8'>
             {projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} idx={idx} />
             ))}

             </div>
            

            {/* View all CTA */}
             <div className='text-center mt-12 animate-fade-in animation-delay-500'>
              <AnimatedBorderButton >
                View All Projects
                <ArrowUpRight className='w-5 h-5'/>
              </AnimatedBorderButton >
             </div>
            </div>
        </section>
    );
};