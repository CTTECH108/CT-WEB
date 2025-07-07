import { useEffect } from "react";
import { Star, Users, Globe } from "lucide-react";

export default function About() {
  useEffect(() => {
    // GSAP animations for cards
    if (typeof window !== 'undefined' && (window as any).gsap) {
      const gsap = (window as any).gsap;
      
      if (gsap.ScrollTrigger) {
        gsap.utils.toArray('.neon-card').forEach((card: any, i: number) => {
          gsap.fromTo(card, 
            {
              opacity: 0,
              y: 50
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: i * 0.1,
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        });
      }
    }
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-tech font-bold text-ct-primary neon-glow mild-black-neon mb-6">
            About CTSolutions
          </h2>
          <p className="text-xl text-ct-text-secondary max-w-3xl mx-auto mild-black-neon">
            Let's build your digital future together!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="neon-card p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="bg-ct-primary/10 p-3 rounded-full">
                  <Star className="text-ct-primary" size={24} />
                </div>
                <div>
                  <p className="text-ct-text leading-relaxed">
                    ☆ At CT Solutions, we are passionate about delivering innovative technology solutions and training future tech leaders.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="neon-card p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="bg-ct-primary/10 p-3 rounded-full">
                  <Users className="text-ct-primary" size={24} />
                </div>
                <div>
                  <p className="text-ct-text leading-relaxed">
                    ☆ Our team of experts provides tailored IT services and hands-on training programs to help businesses and individuals thrive in the digital world.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="neon-card p-6 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="bg-ct-primary/10 p-3 rounded-full">
                  <Globe className="text-ct-primary" size={24} />
                </div>
                <div>
                  <p className="text-ct-text leading-relaxed">
                    ☆ With a commitment to excellence, we serve clients across Tamil Nadu and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional team collaboration"
              className="rounded-2xl shadow-xl neon-border w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-ct-primary text-white p-6 rounded-xl neon-border">
              <div className="text-center">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}