export const Experience = () => {
  const experiences = [
    {
      role: "Ambassador",
      company: "Humanity Protocol",
      type: "Current Role",
      description: "Leading community initiatives and driving protocol adoption",
      color: "from-purple-500 to-pink-500",
      logo: "/lovable-uploads/dad8387a-b73e-4800-b78a-651e3458d3f2.png"
    },
    {
      role: "Moderator",
      company: "Billionaire Fox Club",
      type: "Web3 Community",
      description: "Managing high-value NFT community with 50K+ members",
      color: "from-blue-500 to-cyan-500",
      logo: "/lovable-uploads/609613cb-a7a8-4220-bfa5-f6bd63fd7f2e.png"
    },
    {
      role: "Moderator",
      company: "Oilverse",
      type: "GameFi Project",
      description: "Community management for blockchain gaming ecosystem",
      color: "from-pink-500 to-purple-500",
      logo: "/lovable-uploads/29874c89-339a-432e-9249-64b2db02275e.png"
    },
    {
      role: "Moderator",
      company: "Sogni AI",
      type: "AI Platform",
      description: "Supporting AI-powered creative community growth",
      color: "from-cyan-500 to-blue-500",
      logo: "/lovable-uploads/b87aed88-43a4-4229-875f-052506375bb3.png"
    },
    {
      role: "Core Supporter",
      company: "IO.net",
      type: "DePIN Network",
      description: "Contributing to decentralized computing infrastructure",
      color: "from-purple-500 to-blue-500",
      logo: "/lovable-uploads/a4c3ec68-ec84-4302-94fe-3ce7a49766cf.png"
    },
    {
      role: "Shard Contributor",
      company: "Black Opal, $O",
      type: "DeFi Protocol",
      description: "Active participation in DeFi community building",
      color: "from-pink-500 to-cyan-500",
      logo: "/lovable-uploads/76649562-d344-45a5-80f6-f55522bb7a39.png"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-['Orbitron']">
          Experience
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className="flex items-center mb-4">
                {exp.logo ? (
                  <img 
                    src={exp.logo} 
                    alt={exp.company}
                    className="w-12 h-12 rounded-lg object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${exp.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-xl">
                      {exp.company.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {exp.role}
              </h3>
              
              <h4 className="text-lg font-semibold text-purple-400 mb-2">
                {exp.company}
              </h4>
              
              <span className="text-xs bg-gradient-to-r from-purple-600/30 to-pink-600/30 px-3 py-1 rounded-full text-purple-300 border border-purple-400/30 mb-3 inline-block">
                {exp.type}
              </span>
              
              <p className="text-gray-300 text-sm">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
