
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto text-center z-10 animate-fade-in">
        {/* Profile Image */}
        <div className="mb-8 relative inline-block">
          <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-purple-400 via-pink-500 to-blue-500 p-1 animate-scale-in shadow-2xl shadow-purple-500/50 relative">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
              <img 
                src="/lovable-uploads/3c7be008-c06e-4793-a403-6bdcb6640619.png" 
                alt="Markandey Singh" 
                className="w-60 h-60 rounded-full object-cover brightness-110 contrast-110 saturate-150"
              />
            </div>
          </div>
          <div className="absolute -inset-8 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur-lg opacity-60 animate-pulse -z-10"></div>
        </div>

        {/* Name and Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-fade-in font-['Orbitron']">
          Markandey Singh
        </h1>
        
        <p className="text-xl md:text-2xl text-purple-300 mb-6 animate-fade-in delay-300">
          Community Architect in Web3 & AI
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-300 animate-fade-in delay-500">
          <div className="flex items-center gap-2">
            <span className="text-purple-400">Discord:</span>
            <span className="text-cyan-400 font-mono">mark0294</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-purple-400" />
            <span>Varanasi, India</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-700">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
            Let's Connect
          </Button>
        </div>

        {/* Contact Details */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-400 animate-fade-in delay-1000">
          <div className="flex items-center gap-2 hover:text-purple-400 transition-colors cursor-pointer">
            <Mail className="w-4 h-4" />
            <span>markandeys7@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 hover:text-purple-400 transition-colors cursor-pointer">
            <Phone className="w-4 h-4" />
            <span>+91 85275 32636</span>
          </div>
        </div>
      </div>
    </section>
  );
};
