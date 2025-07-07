import { useEffect, useRef } from "react";
import { Users, Smile, Presentation, Book } from "lucide-react";

export default function Milestones() {
  const countersRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Counter animation
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target as HTMLElement;
          const target = parseInt(counter.getAttribute('data-count') || '0');
          const increment = target / 50;
          let current = 0;

          const updateCounter = () => {
            if (current < target) {
              current += increment;
              counter.textContent = Math.ceil(current) + (target >= 50 ? '+' : '');
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target + (target >= 50 ? '+' : '');
            }
          };

          updateCounter();
          observer.unobserve(counter);
        }
      });
    }, observerOptions);

    countersRef.current.forEach(counter => {
      if (counter) observer.observe(counter);
    });

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

    return () => observer.disconnect();
  }, []);

  const milestones = [
    {
      icon: <Users className="text-ct-primary text-3xl" />,
      count: 50,
      label: "Customers"
    },
    {
      icon: <Smile className="text-ct-primary text-3xl" />,
      count: 45,
      label: "Customer Satisfaction"
    },
    {
      icon: <Presentation className="text-ct-primary text-3xl" />,
      count: 20,
      label: "Workshops Conducted"
    },
    {
      icon: <Book className="text-ct-primary text-3xl" />,
      count: 25,
      label: "Courses Offered"
    }
  ];

  const timelineEvents = [
    {
      title: "Company Founded",
      description: "Started our journey in technology solutions at 2024",
      side: "left"
    },
    {
      title: "First 100 Students",
      description: "Won prestigious hackathon competitions",
      side: "right"
    },
    {
      title: "Award Recognition",
      description: "Now started building our own products",
      side: "left"
    },
    {
      title: "First 100 Students",
      description: "Loading...",
      side: "right"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-tech font-bold text-ct-primary neon-glow mild-black-neon mb-6">
            Our Milestones
          </h2>
          <p className="text-xl text-ct-text-secondary max-w-3xl mx-auto mild-black-neon">
            Numbers that speak for our commitment and excellence
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="text-center neon-card p-8 rounded-xl pulse-glow">
              <div className="bg-ct-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                {milestone.icon}
              </div>
              <div 
                className="text-4xl font-tech font-bold text-ct-primary neon-glow mb-2"
                data-count={milestone.count}
                ref={el => {
                  if (el) countersRef.current[index] = el;
                }}
              >
                {milestone.count}{milestone.count >= 50 ? '+' : ''}
              </div>
              <div className="text-ct-text-secondary font-medium">{milestone.label}</div>
            </div>
          ))}
        </div>
        
        {/* Achievement Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-ct-primary text-center mb-12">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-ct-primary"></div>
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className="flex items-center">
                  {event.side === "left" ? (
                    <>
                      <div className="w-1/2 pr-8 text-right">
                        <div className="neon-card p-6 rounded-xl">
                          <h4 className="font-bold text-ct-primary">{event.title}</h4>
                          <p className="text-ct-text-secondary">{event.description}</p>
                        </div>
                      </div>
                      <div className="w-4 h-4 bg-ct-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                      <div className="w-1/2 pl-8"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-8"></div>
                      <div className="w-4 h-4 bg-ct-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                      <div className="w-1/2 pl-8">
                        <div className="neon-card p-6 rounded-xl">
                          <h4 className="font-bold text-ct-primary">{event.title}</h4>
                          <p className="text-ct-text-secondary">{event.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
