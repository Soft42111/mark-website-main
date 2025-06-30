
import { Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-purple-500/20 bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4 font-['Orbitron']">
              Markandey Singh
            </h3>
            <p className="text-gray-400">
              Community Architect in Web3 & AI
            </p>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">
                <span className="text-purple-400">Discord:</span>
                <span className="text-cyan-400 font-mono">mark0294</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">
                <Mail className="w-4 h-4" />
                <span>markandeys7@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">
                <Phone className="w-4 h-4" />
                <span>+91 85275 32636</span>
              </div>
            </div>
          </div>
          
          {/* Location */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Location</h4>
            <p className="text-gray-400">Varanasi, India</p>
            <div className="mt-4">
              <span className="text-2xl">🇮🇳</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-purple-500/20 mt-8 pt-8 flex flex-col items-center">
          <p className="text-gray-400 text-sm mb-4">
            © Mark 2025 All rights reserved
          </p>
          <div className="text-sm text-center">
            <span className="text-gray-400">Developer </span>
            <a 
              href="https://x.com/soft4211" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-lg transition-colors"
              style={{ color: '#ff0202' }}
            >
              BASIT
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
