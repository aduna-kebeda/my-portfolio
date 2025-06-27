import { Button } from './ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1 animate-float">
                <img
                  src="/aduna.jpg"
                  alt="Aduna Kebede Hunde"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background animate-pulse"></div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">Aduna Kebede</span>
          </h1>
          
          <p className="text-2xl sm:text-3xl font-semibold text-foreground/90">
            Full-Stack Software Engineer 
          </p>
           <p className="text-lg sm:text-xl text-muted-foreground font-medium">
                  AI Enthusiast & Problem Solver
                </p>
          
          <p className="text-lg text-muted-foreground mb-2">
            📍 Addis Ababa, Ethiopia
          </p>
          
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            <span className="gradient-text font-semibold">
              "Building intelligent, scalable solutions that matter."
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button onClick={scrollToContact} size="lg" className="text-lg px-8 py-3">
              Let's Connect
            </Button>
            <a href="/resume.pdf" download>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/aduna-kebeda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/aduna-kebede-42b842309/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:kebedeadugna45@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
