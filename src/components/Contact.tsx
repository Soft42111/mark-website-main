
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:markandeys7@gmail.com?subject=${subject}&body=${body}`;
    
    // Open mail client
    window.open(mailtoLink, '_blank');
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-['Orbitron']">
          Let's Build Together
        </h2>
        
        <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 shadow-xl shadow-purple-500/10">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">
              Ready to collaborate? Let's connect!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-purple-300">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your awesome name..."
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-slate-900/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-purple-300">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@web3.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-slate-900/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-purple-300">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Let's build something amazing together..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-3 py-2 bg-slate-900/50 border border-purple-500/30 rounded-md text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-colors"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 text-lg rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
