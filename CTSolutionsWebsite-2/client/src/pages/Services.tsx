import { useEffect } from "react";
import { GraduationCap, Code, Cpu, CheckCircle } from "lucide-react";

export default function Services() {
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

  const softwareInternships = [
    { icon: "fas fa-globe", name: "Full Stack Web Development" },
    { icon: "fab fa-react", name: "MERN Stack Development" },
    { icon: "fab fa-java", name: "Java Full Stack" },
    { icon: "fab fa-python", name: "Python Full Stack" },
    { icon: "fas fa-cloud", name: "Cloud Computing" },
    { icon: "fas fa-shield-alt", name: "Cybersecurity" },
    { icon: "fas fa-link", name: "Blockchain" },
    { icon: "fas fa-paint-brush", name: "UI/UX Design" },
    { icon: "fab fa-js", name: "Beginner JavaScript" },
    { icon: "fas fa-database", name: "Database Management" },
  ];

  const eceInternships = [
    { icon: "fas fa-microchip", name: "Embedded Systems (Arduino / Raspberry Pi)" },
    { icon: "fas fa-wifi", name: "Internet of Things (IoT)" },
    { icon: "fas fa-robot", name: "Robotics & Automation" },
    { icon: "fas fa-memory", name: "VLSI Design Fundamentals" },
    { icon: "fas fa-sitemap", name: "Digital Electronics (Simulation)" },
    { icon: "fas fa-wave-square", name: "Signal Processing using MATLAB" },
  ];

  const softwareWorkshops = [
    "Full Stack Web Development",
    "MERN Stack",
    "Java & JavaScript Basics",
    "Python Full Stack",
    "Cloud Fundamentals",
    "Cybersecurity Essentials",
    "Blockchain Introduction",
    "UI/UX Design",
    "Database Management",
  ];

  const eceWorkshops = [
    "Embedded C Programming",
    "IoT Prototyping & Simulations",
    "Robotics with Arduino",
    "VLSI Design (with simulation tools)",
    "Digital Circuit Simulations",
    "Signal Processing in MATLAB",
  ];

  return (
    <section className="py-20 bg-ct-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-tech font-bold text-ct-primary neon-glow mild-black-neon mb-6">
              Our Services
            </h2>
            <p className="text-xl text-ct-text-secondary max-w-3xl mx-auto mild-black-neon">
              Comprehensive technology training and development programs
            </p>
          </div>
          
          {/* Internship Domains */}
          <div className="mb-16">
            <h3 className="text-3xl font-tech font-bold text-ct-primary text-center mb-8 neon-glow">
              INTERNSHIP DOMAINS - All at ₹999
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Software-Oriented */}
              <div className="neon-card p-8 rounded-xl">
                <h4 className="text-2xl font-bold text-ct-primary mb-6 flex items-center">
                  <Code className="mr-3" size={32} />
                  Software-Oriented Domains
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {softwareInternships.map((item, index) => (
                    <div key={index} className="bg-white/50 p-4 rounded-lg border border-ct-primary/20">
                      <i className={`${item.icon} text-ct-primary mb-2`}></i>
                      <div className="font-medium text-sm">{item.name}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* ECE-Oriented */}
              <div className="neon-card p-8 rounded-xl">
                <h4 className="text-2xl font-bold text-ct-primary mb-6 flex items-center">
                  <Cpu className="mr-3" size={32} />
                  ECE-Oriented Domains
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {eceInternships.map((item, index) => (
                    <div key={index} className="bg-white/50 p-4 rounded-lg border border-ct-primary/20">
                      <i className={`${item.icon} text-ct-primary mb-2`}></i>
                      <div className="font-medium text-sm">{item.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Workshop Modules */}
          <div>
            <h3 className="text-3xl font-tech font-bold text-ct-primary text-center mb-8 neon-glow">
              WORKSHOP MODULES (FREE & PAID)
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Software Workshops */}
              <div className="neon-card p-8 rounded-xl">
                <h4 className="text-2xl font-bold text-ct-primary mb-6 flex items-center">
                  <i className="fas fa-laptop-code mr-3 text-2xl"></i>
                  Software Workshops
                </h4>
                <div className="space-y-3">
                  {softwareWorkshops.map((workshop, index) => (
                    <div key={index} className="flex items-center p-3 bg-white/50 rounded-lg">
                      <CheckCircle className="text-ct-primary mr-3" size={20} />
                      <span>{workshop}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* ECE Workshops */}
              <div className="neon-card p-8 rounded-xl">
                <h4 className="text-2xl font-bold text-ct-primary mb-6 flex items-center">
                  <i className="fas fa-cogs mr-3 text-2xl"></i>
                  ECE Workshops
                </h4>
                <div className="space-y-3">
                  {eceWorkshops.map((workshop, index) => (
                    <div key={index} className="flex items-center p-3 bg-white/50 rounded-lg">
                      <CheckCircle className="text-ct-primary mr-3" size={20} />
                      <span>{workshop}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="neon-button text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center mx-auto"
            >
              <GraduationCap className="mr-2" size={20} />
              Join Internship Program
            </button>
          </div>
        </div>
    </section>
  );
}
