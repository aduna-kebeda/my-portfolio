
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Building, GraduationCap, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      icon: Building,
      title: 'Software Engineer Intern',
      company: 'Eskalate',
      period: '2023 - Present',
      description: 'Built a Bank Dashboard and Professional Networking Web App using modern technologies. Led a team of 4 developers in feature delivery and UI design.',
      technologies: ['Next.js', 'Redux Toolkit', 'RTK Query', 'Tailwind CSS'],
      achievements: [
        'Led a team of 4 developers',
        'Delivered production-ready applications',
        'Implemented responsive UI designs',
        'Optimized application performance'
      ]
    },
    {
      type: 'teaching',
      icon: Users,
      title: 'Backend Instructor',
      company: 'GDSC AASTU',
      period: '2023 - Present',
      description: 'Teaching Node.js, REST APIs, and web architecture to fellow students, sharing knowledge and helping build the next generation of developers.',
      technologies: ['Node.js', 'Express.js', 'REST API', 'Web Architecture'],
      achievements: [
        'Taught 50+ students',
        'Designed comprehensive curriculum',
        'Mentored junior developers',
        'Organized coding workshops'
      ]
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'A2SV Student',
      company: 'Africa to Silicon Valley',
      period: '2022 - Present',
      description: 'Intensive competitive programming and software engineering program focusing on problem-solving, backend development, and AI technologies.',
      technologies: ['Competitive Programming', 'Backend Development', 'AI/ML'],
      achievements: [
        '800+ LeetCode & Codeforces problems solved',
        'Advanced algorithm implementations',
        'Deep backend and AI training',
        'Silicon Valley preparation program'
      ]
    }
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'work': return 'text-blue-600';
      case 'teaching': return 'text-green-600';
      case 'education': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <section id="experience" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and continuous learning path
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-background border ${getIconColor(exp.type)}`}>
                    <exp.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <Badge variant="outline" className="w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-lg font-medium text-primary mb-2">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Key Achievements</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <CardTitle className="text-xl">BSc in Software Engineering</CardTitle>
                    <Badge variant="outline">Graduated June 2025</Badge>
                  </div>
                  <p className="text-lg font-medium text-primary mb-2">
                    Addis Ababa Science and Technology University
                  </p>
                  <p className="text-muted-foreground">
                    Pursuing a comprehensive software engineering degree with focus on modern development practices and emerging technologies.
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="text-2xl font-bold text-primary">3.5/4.0</div>
                <div className="text-muted-foreground">CGPA </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
