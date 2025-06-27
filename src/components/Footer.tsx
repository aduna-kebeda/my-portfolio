import { Button } from './ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-8">
          {/* Main CTA */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Let's Build Impactful Software Together
            </h3>
            <p className="text-muted-foreground mb-6">
              Ready to turn your ideas into reality? I'm here to help you create 
              innovative solutions that make a difference.
            </p>
            <Button size="lg" asChild>
              <a href="mailto:kebedeadugna45@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Start a Conversation
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/aduna-kebeda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/aduna-kebede-42b842309/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:kebedeadugna45@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Download Resume */}
          <div>
            <a href="/resume.pdf" download>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground">
              © {currentYear} Aduna Kebede Hunde. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
