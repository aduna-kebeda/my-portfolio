import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Handle section observation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -20% 0px' }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 z-50">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Aduna K.
            </button>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-1 bg-muted/50 backdrop-blur-sm rounded-full p-1 border border-border/50">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                    activeSection === item.id
                      ? 'text-primary bg-background shadow-md'
                      : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button - Positioned to avoid overlap with theme toggle */}
          <div className="md:hidden z-50">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative flex items-center justify-center hover:bg-muted/50 mr-20"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0' : 'rotate-0 -translate-y-2'}`}>
                  <Menu className={`w-6 h-6 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                </span>
                <span className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-y-0' : 'rotate-0 translate-y-2'}`}>
                  <X className={`w-6 h-6 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} />
                </span>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen pb-6' : 'max-h-0'
        }`}>
          <div className="bg-background/95 backdrop-blur-md rounded-2xl border border-border/50 shadow-xl mt-4 p-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/10 border border-primary/20'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
