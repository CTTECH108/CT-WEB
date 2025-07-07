import { useEffect } from "react";
import { Rocket, Phone, Code, Cpu, Zap } from "lucide-react";

export default function Home() {
  useEffect(() => {
    // GSAP animations
    if (typeof window !== 'undefined' && (window as any).gsap) {
      const gsap = (window as any).gsap;
      
      gsap.timeline()
        .from('.hero-title', { opacity: 0, scale: 0.8, duration: 1 })
        .from('.hero-3d', { opacity: 0, y: 50, duration: 1 }, '-=0.5')
        .from('.hero-buttons', { opacity: 0, y: 30, duration: 0.8 }, '-=0.3');
    }
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-ct-bg to-ct-accent flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8 hero-title">
            <h1 className="text-2xl md:text-3xl text-ct-text-secondary mb-4 font-light mild-black-neon">
              Welcome To,
            </h1>
            <h2 className="text-5xl md:text-7xl font-tech font-bold text-ct-primary neon-glow mild-black-neon mb-6">
              CT<span className="text-ct-secondary">Solutions</span>
            </h2>
            <p className="text-xl md:text-2xl text-ct-text-secondary font-medium mb-12 mild-black-neon">
              Your Trusted Partner In Technology Solutions
            </p>
          </div>
          
          {/* 3D Animation */}
          <div className="mb-12 relative hero-3d">
            <div className="relative w-full max-w-4xl mx-auto h-96 flex items-center justify-center">
              {/* Floating Cards */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="floating-card neon-card p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-ct-primary/30 absolute top-10 left-10 transform rotate-12">
                  <Code size={32} className="text-ct-primary mb-2" />
                  <div className="text-sm font-medium text-ct-text mild-black-neon">Web Development</div>
                </div>
                
                <div className="floating-card neon-card p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-ct-secondary/30 absolute top-20 right-10 transform -rotate-12" style={{ animationDelay: '2s' }}>
                  <Cpu size={32} className="text-ct-secondary mb-2" />
                  <div className="text-sm font-medium text-ct-text mild-black-neon">IoT Solutions</div>
                </div>
                
                <div className="floating-card neon-card p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-ct-primary/30 absolute bottom-10 left-20 transform rotate-6" style={{ animationDelay: '4s' }}>
                  <Zap size={32} className="text-ct-primary mb-2" />
                  <div className="text-sm font-medium text-ct-text mild-black-neon">AI Training</div>
                </div>
              </div>
              
              {/* Central Rotating Cube */}
              <div className="rotating-cube relative">
                <div className="w-32 h-32 bg-gradient-to-br from-ct-primary to-ct-secondary rounded-2xl neon-border flex items-center justify-center">
                  <div className="text-white font-tech font-bold text-2xl">CT</div>
                </div>
              </div>
              
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-ct-primary/20 via-transparent to-transparent rounded-full"></div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center hero-buttons">
            <button 
              onClick={() => {
                const element = document.querySelector('#services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="neon-button text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center"
            >
              <Rocket className="mr-2" size={20} />
              Explore Services
            </button>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-ct-primary text-ct-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-ct-primary hover:text-white transition-all duration-300 flex items-center"
            >
              <Phone className="mr-2" size={20} />
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
