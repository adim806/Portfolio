import React from 'react'

const projects = [
    {
      title: "Fintech Dashboard",
      description:
        "A comprehensive financial analytics platform with real-time data visual",
      image: "/projects/project1.png",
      tags: ["React", "Typescript", "NodeJS"],
      link: "#",
      github: "#",
    },

    {
      title: "E-commerce Platform",
      description:
        "A fully functional e-commerce platform with a modern UI and smooth user experience",
      image: "/projects/project2.png",
      tags: ["React", "TailwindCSS", "Next.js", "Shadcn UI"],
      link: "#",
      github: "#",
    },
    {
      title: "Social Media Platform",
      description:
        "A fully functional social media platform with a modern UI and smooth user experience",
      image: "/projects/project3.png",
      tags: ["React", "TailwindCSS", "Next.js", "Shadcn UI"],
      link: "#",
      github: "#",
    },  
    {
      title: "Blog Platform",
      description:
        "A fully functional blog platform with a modern UI and smooth user experience",
      image: "/projects/project4.png",
      tags: ["React", "TailwindCSS", "Next.js", "Shadcn UI"],
      link: "#",
      github: "#",
    },
  ];

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
                <div
                    key={idx}
                    className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                    style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-video">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    </div>
                </div>
                ))}

             </div>

            </div>
        </section>
    );
};