import React from 'react'
import { Button } from "@/components/Button";
import { ArrowRight, Download, Github, Linkedin, Twitter } from 'lucide-react';
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';

export const Hero = () => {
 return <section className='relative min-h-screen flex items-center overflow-hidden'>
    {/*bg*/}
    <div className='absolute inset-0'>
        <img src="/test.jpg" alt="Hero image" className='w-full h-full object-cover opacity-40' />
     <div className='absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background'/>
    </div>

    {/*Green Dots*/}
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(30)].map((_, i) => (
            <div key={i} className='absolute w-1.5 h-1.5 rounded-full opacity-60'
            style={{
                backgroundColor: "#20B2A6",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
            }} />
        ))}
    </div>

    {/* Content*/}
    <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Left Column - Text Content*/}
            <div className='space-y-8'>
                <div className='animate-fade-in'>
                    <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'> 
                      <span className='w-2 h-2 bg-primary rounded-full animate-pulse'/>Software Engineer
                    </span>
                </div>

                {/* Headline*/}
                <div className='space-y-4'>
                    <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100'>
                        Crafting <span className='text-primary glow-text'>digital</span>
                        <br />
                        experiences with
                        <br />
                        <span className='font-serif italic font-normal text-white'>precision.</span>
                    </h1>
                    <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200'>
                        Hi, I'm Adi Meller - a software engineer spacializing in Full stack development, I build scalable, performant web applications that user love.
                    </p>
                </div>

                {/* CTAs */}
                <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>
                    <Button size="lg">
                        Contact Me <ArrowRight className='w-5 h-5'/>
                    </Button>
                  <AnimatedBorderButton/>
                </div>

                {/* Social Links*/}
                <div className='flex items-center gap-4 animate-fade-in animation-delay-400'>
                    <span className='text-sm text-muted-foreground'>Follow me: </span>
                    {[
                        {icon: Github, href: 'https://github.com/adimeller'},
                        {icon: Linkedin, href: 'https://www.linkedin.com/in/adimeller/'},
                        {icon: Twitter, href: 'https://x.com/adimeller'},
                    ].map((social, idx) =>(
                        <a key={idx} href={social.href} className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300'>
                            {<social.icon className='w-5 h-5'/>}
                        </a>
                    ))}
                </div>
            </div>

            {/* Right Column - Profile Content*/}

        </div>
    </div>
 </section>
};