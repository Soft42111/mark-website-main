
export const Education = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-['Orbitron']">
          Education & Languages
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                🎓
              </div>
              Education
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-purple-400">B.Tech in Electrical Engineering</h4>
                <p className="text-gray-300">JSS Academy of Technical Education</p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                🌍
              </div>
              Languages
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🇮🇳</span>
                <div>
                  <p className="text-lg font-semibold text-white">Hindi</p>
                  <p className="text-gray-400">Native</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🇬🇧</span>
                <div>
                  <p className="text-lg font-semibold text-white">English</p>
                  <p className="text-gray-400">Fluent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
