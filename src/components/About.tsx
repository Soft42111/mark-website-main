
export const About = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-['Orbitron']">
          About Me
        </h2>
        
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 shadow-xl shadow-purple-500/10">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm a passionate Community Manager with experience across top-tier Web3 projects like 
            <span className="text-purple-400 font-semibold"> Billionaire Fox Club</span>, 
            <span className="text-pink-400 font-semibold"> Oilverse</span>, and 
            <span className="text-blue-400 font-semibold"> Sogni AI</span>. 
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I bring communities to life through engaging experiences, structured operations, and creative energy. 
            My expertise lies in fostering meaningful connections within the Web3 ecosystem while driving growth 
            and engagement across multiple platforms.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            From organizing virtual events to managing complex community dynamics, I thrive on building 
            bridges between technology and people, creating spaces where innovation and collaboration flourish.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-4 py-2 rounded-full border border-purple-400/30">
              <span className="text-purple-300">🚀 Web3 Native</span>
            </div>
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 px-4 py-2 rounded-full border border-blue-400/30">
              <span className="text-blue-300">🤖 AI Enthusiast</span>
            </div>
            <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 px-4 py-2 rounded-full border border-pink-400/30">
              <span className="text-pink-300">🌟 Community Builder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
