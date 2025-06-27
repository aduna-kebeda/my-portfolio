
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Github, ExternalLink, Filter } from 'lucide-react';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects = [
    {
      title: 'AI-Driven Ethiopian Travel Platform',
      description: 'Intelligent travel recommendation system that suggests places using FastAPI backend, MongoDB, and AI-driven filtering and search capabilities.',
      image: '/ethio-travel.png',
      technologies: ['Django', 'Next.js', 'Postgress', 'AI/ML'],
      category: 'ai',
      features: ['AI Recommendations', 'Smart Filtering', 'Location Search', 'Travel Insights'],
      github: 'https://github.com/Ai-driven-travel-platform',
      live: 'https://ai-driven-travel-x3sc.vercel.app/'
    },
    {
      title: 'Bank Dashboard',
      description: 'Role-based admin dashboard for account and transaction insights with comprehensive analytics, filtering capabilities, and responsive design.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      technologies: ['Next.js', 'Redux', 'Tailwind', 'Chart.js'],
      category: 'fullstack',
      features: ['Role-based Authentication', 'Real-time Analytics', 'Data Filtering', 'Responsive Layout'],
      github: '#',
      live: '#'
    },
    
    {
      title: 'A2SV Hub Platform',
      description: 'MERN-stack web application for internal collaboration and announcements, designed for community-focused interaction and scalable architecture.',
      image: 'a2sv-hub.png',
      technologies: ['Postgress', 'Golang', 'Next.js'],
      category: 'fullstack',
      features: ['Real-time Collaboration', 'Announcement System', 'User Management', 'Community Features'],
      github: 'https://github.com/aduna-kebeda/a2sv_hub',
      live: 'https://hub.a2sv.org/'
    },
    {
      title: 'LinkedIn Profile Scraper',
      description: 'Automated scraping and summarization tool using Selenium for data extraction and T5 model for intelligent content summarization.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop',
      technologies: ['Selenium', 'Python', 'T5 (Hugging Face)', 'SpaCy'],
      category: 'ai',
      features: ['Automated Scraping', 'AI Summarization', 'Data Processing', 'Profile Analysis'],
      github: '#',
      live: '#'
    },
    {
      title: 'Discovering AASTU App',
      description: 'Mobile application to help students navigate the AASTU campus with integrated maps, service directories, and faculty contact information.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop',
      technologies: ['Flutter', 'Dart', 'Google Maps API'],
      category: 'mobile',
      features: ['Interactive Maps', 'Service Directory', 'Faculty Contacts', 'Campus Navigation'],
      github: '#',
      live: '#'
    },
    {
      title: 'News Aggregator AI Agent',
      description: 'NLP-based intelligent agent that clusters and summarizes recent news using advanced natural language processing techniques.',
      image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=500&h=300&fit=crop',
      technologies: ['SpaCy', 'TextRank', 'T5-small', 'Python'],
      category: 'ai',
      features: ['News Clustering', 'AI Summarization', 'Content Analysis', 'Real-time Processing'],
      github: '#',
      live: '#'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in web development, AI integration, and mobile applications
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? 'default' : 'outline'}
              onClick={() => setSelectedFilter(filter.id)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </a>
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Key Features</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
