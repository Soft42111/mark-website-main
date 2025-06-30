import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Projects = () => {
  const projects = [
    {
      title: "Web3 Community Events",
      description: "Organized 500+ virtual and hybrid events across multiple Web3 projects",
      metrics: "100K+ participants",
      highlight: "Event Planning"
    },
    {
      title: "Community Growth Initiatives",
      description: "Developed strategies that increased community engagement by 300%",
      metrics: "300% growth",
      highlight: "Growth Strategy"
    },
    {
      title: "Cross-Platform Campaigns",
      description: "Led promotional campaigns across Discord, Twitter, and Telegram",
      metrics: "1M+ reach",
      highlight: "Multi-Platform"
    },
    {
      title: "Partnership Collaborations",
      description: "Facilitated partnerships between major Web3 projects and communities",
      metrics: "25+ partnerships",
      highlight: "Collaboration"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-['Orbitron']">
          Community Highlights
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </CardTitle>
                  <span className="text-xs bg-gradient-to-r from-purple-600/30 to-pink-600/30 px-3 py-1 rounded-full text-purple-300 border border-purple-400/30">
                    {project.highlight}
                  </span>
                </div>
                <CardDescription className="text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-4 py-2 rounded-lg border border-purple-400/30">
                  <span className="text-purple-300 font-bold">{project.metrics}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
