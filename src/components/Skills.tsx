
export const Skills = () => {
  const skills = [
    { name: "Community Engagement", color: "from-purple-500 to-pink-500" },
    { name: "Social Media Strategy", color: "from-blue-500 to-cyan-500" },
    { name: "Operations Management", color: "from-pink-500 to-purple-500" },
    { name: "Conflict Resolution", color: "from-cyan-500 to-blue-500" },
    { name: "Decision-Making", color: "from-purple-500 to-blue-500" },
    { name: "Promotional Planning", color: "from-pink-500 to-cyan-500" },
    { name: "Clear Communication", color: "from-blue-500 to-purple-500" },
    { name: "Web3 Protocols", color: "from-cyan-500 to-pink-500" }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-['Orbitron']">
          Skills
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${skill.color} p-[2px] rounded-full hover:p-[3px] transition-all duration-300`}>
                <div className="bg-slate-900 rounded-full px-6 py-3 group-hover:bg-slate-800 transition-all duration-300">
                  <span className="text-white font-medium group-hover:text-purple-300 transition-colors">
                    {skill.name}
                  </span>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
