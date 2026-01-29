import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';
import React from 'react'


const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code that stands the test of time.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with teams to bring ideas to life.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Staying ahead with the latest technologies and best practices.",
    },
  ];

  export const About = () => {
    return (
      <section id="about" className="py-32 relative overflow-hidden">
        <div className='container mx-auto px-6 relative z-10'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            {/* Left Column */}
            <div className='space-y-8'>
                <div className='animate-fade-in'>
                 <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>About Me</span>

                </div>
                <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>
                Building the future,
                    <span className='font-serif italic font-normal text-white'>
                        {""}
                        one component at a time.
                    </span>
                </h2>
                <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
                    <p>
                    As a Software Engineering graduate and an IDF combat Captain, I bring a unique perspective to software development. My experience as an Intelligence Officer—analyzing complex data to support strategic decisions.
                    </p>
                    <p>
                    This experience informs my focus on building intelligent, API-driven systems. Having navigated the challenges of service-related injuries, I possess a profound sense of adaptability and grit. As a specialist in the JavaScript ecosystem and modern Dev-Ops, I am dedicated to crafting robust software solutions.
                    </p>
                    <p>
                        When I'm not coding, you'll find me exploring new technologies,
                        contributing to open-source projects, or sharing knowledge with
                        the developer community.
                    </p>
                </div>

                <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300'>
                    <p className='text-lg font-medium italic text-foreground'>
                    "My mission is to translate complex technical challenges into simple, crafting
                    intelligent systems that solve real-world problems while remaining
                    clean, maintainable, and profoundly user-friendly."
                    </p>

                </div>
            </div>

            {/* Right Column */}
            <div className='grid sm:grid-cols-2 gap-6'>
                {highlights.map((item, idx) => (
                    <div key={idx} className='glass p-6 rounded-2xl animate-fade-in' style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                        <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20'>
                            <item.icon className='w-6 h-6 text-primary' />
                        </div>
                        <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
                        <p className='text-sm text-muted-foreground'>{item.description}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    );
  };