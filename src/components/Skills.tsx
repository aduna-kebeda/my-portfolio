
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'HTML', 'CSS', 'SQL'],
      color: 'bg-blue-500/10 text-blue-600 border-blue-200'
    },
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Angular', 'Bootstrap'],
      color: 'bg-green-500/10 text-green-600 border-green-200'
    },
    {
      title: 'Backend',
      skills: ['FastAPI', 'Node.js', 'Express.js', 'Django', 'ASP.NET Core'],
      color: 'bg-purple-500/10 text-purple-600 border-purple-200'
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQL Server'],
      color: 'bg-orange-500/10 text-orange-600 border-orange-200'
    },
    {
      title: 'Mobile Development',
      skills: ['Flutter', 'React Native'],
      color: 'bg-pink-500/10 text-pink-600 border-pink-200'
    },
    {
      title: 'AI/ML Tools',
      skills: ['Scikit-learn', 'Transformers (Hugging Face)', 'TensorFlow', 'LangChain'],
      color: 'bg-indigo-500/10 text-indigo-600 border-indigo-200'
    },
    {
      title: 'Tools & DevOps',
      skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'Postman', 'AWS', 'Heroku'],
      color: 'bg-red-500/10 text-red-600 border-red-200'
    },
    {
      title: 'Other Skills',
      skills: ['REST API', 'GraphQL', 'VSTO Add-ins', 'Web Scraping', 'Selenium'],
      color: 'bg-teal-500/10 text-teal-600 border-teal-200'
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary" 
                      className={`${category.color} hover:scale-105 transition-transform cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
