import { GraduationCap, Award, Code, Users, Trophy, Target, Brain, Rocket } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { icon: Code, label: 'Problems Solved', value: '800+', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-950/20' },
    { icon: GraduationCap, label: 'SGPA', value: '3.5/4', color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-950/20' },
    { icon: Users, label: 'Team Leadership', value: '4+ Devs', color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-950/20' },
    { icon: Award, label: 'Years Experience', value: '5+', color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-950/20' },
  ];

  const highlights = [
    {
      icon: Trophy,
      title: "Competitive Programming",
      description: "800+ problems solved on LeetCode and Codeforces, building strong algorithmic thinking"
    },
    {
      icon: Rocket,
      title: "Production Experience",
      description: "Led development teams and shipped scalable applications at Eskalate"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Expertise in modern AI tools and machine learning integration"
    },
    {
      icon: Target,
      title: "Community Impact",
      description: "Backend Instructor at GDSC AASTU, mentoring the next generation"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-muted/30 via-background to-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-950 dark:to-blue-950 px-4 py-2 rounded-full text-sm font-medium text-purple-700 dark:text-purple-300 mb-6">
            <Brain className="w-4 h-4" />
            About Me
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Passionate About Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Full-stack developer with expertise in modern technologies and AI integration, 
            committed to building solutions that make a real impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Content */}
          <div className="animate-slide-in-left space-y-8">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg">
              <h3 className="text-3xl font-bold mb-6 text-foreground">My Journey</h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  I'm a final-year <span className="font-semibold text-foreground">Software Engineering student</span> at 
                  Addis Ababa Science and Technology University, with a passion for creating innovative solutions 
                  that make a real impact in people's lives.
                </p>
                <p className="text-lg">
                  My journey began with <span className="font-semibold text-foreground">competitive programming</span>, 
                  where I've solved over 800 problems on LeetCode and Codeforces. This foundation in problem-solving 
                  has been instrumental in my development as a software engineer.
                </p>
                <p className="text-lg">
                  Through my role as a <span className="font-semibold text-foreground">Software Engineer Intern at Eskalate</span>, 
                  I've led teams, built production-ready applications, and gained valuable experience in modern web 
                  technologies and AI integration.
                </p>
                <p className="text-lg">
                  I'm also active in the developer community, serving as a <span className="font-semibold text-foreground">Backend Instructor at GDSC AASTU</span> 
                  and participating in the prestigious A2SV (Africa to Silicon Valley) program.
                </p>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="animate-slide-in-right">
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-2xl ${stat.bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                    <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-950 dark:to-blue-950 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-foreground">{highlight.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;