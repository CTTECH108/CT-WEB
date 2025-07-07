import { useEffect } from "react";
import {
  GraduationCap,
  Code,
  Users,
  Calendar,
  Rocket,
  Trophy,
} from "lucide-react";

export default function ServicesDone() {
  useEffect(() => {
    // GSAP animations for cards
    if (typeof window !== "undefined" && (window as any).gsap) {
      const gsap = (window as any).gsap;

      if (gsap.ScrollTrigger) {
        gsap.utils.toArray(".neon-card").forEach((card: any, i: number) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: i * 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });
      }
    }
  }, []);

  const achievements = [
    {
      icon: <GraduationCap className="text-ct-primary text-3xl" />,
      title: "Educational Website",
      description: "Full ERP system for student & trainer management.",
    },
    {
      icon: <Code className="text-ct-primary text-3xl" />,
      title: "Web Dev Course",
      description: "Trained 200+ students in Full Stack Development.",
    },
    {
      icon: <Users className="text-ct-primary text-3xl" />,
      title: "Training @ NOVA SPARK HUB",
      description: "Taught 50+ students in advanced technologies.",
    },
    {
      icon: <Calendar className="text-ct-primary text-3xl" />,
      title: "Free One-Day Workshop",
      description: "Trained 200+ students in technology fundamentals.",
    },
    {
      icon: <Rocket className="text-ct-primary text-3xl" />,
      title: "Crash Course for VLGE Pvt. Ltd.",
      description: "Frontend + Cloud training for 20+ students.",
    },
    {
      icon: <Trophy className="text-ct-primary text-3xl" />,
      title: "Awards & Recognition",
      description: (
        <div className="space-y-2 text-sm">
          <p>
            <strong>Teckathon Winner:</strong> ₹50,000 prize for "Cyclone
            Underwater Glider" by Ingage Tech & Naan Mudhalvan.
          </p>
          <p>
            <strong>Hackathon Award:</strong> Top performer in Agri and Food
            Hackathon – Project BPEH.
          </p>
        </div>
      ),
    },
  ];

  const galleryImages = [
    {
      src: "/attached_assets/image_1751802614599.png",
      alt: "Agri and Food Hackathon 2025 - Award ceremony with participants",
    },
    {
      src: "/attached_assets/image_1751802624132.png",
      alt: "Full Stack Web Development Course - CT Tech Solutions promotional material",
    },
    {
      src: "/attached_assets/image_1751802634029.png",
      alt: "Nova Spark Hub - Full Stack Course online learning platform",
    },
    {
      src: "/attached_assets/NOV 24_1751802735677.jpg",
      alt: "IIOT & Industry 4.0 Winners - Award ceremony with cash prize",
    },
    {
      src: "/attached_assets/image_1751802760408.png",
      alt: "Virtual training session - Online learning platform interface",
    },
  ];

  return (
    <section className="py-20 bg-ct-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-tech font-bold text-ct-primary neon-glow mild-black-neon mb-6">
            Portfolio & Achievements
          </h2>
          <p className="text-xl text-ct-text-secondary max-w-3xl mx-auto mild-black-neon">
            Our successful projects and training accomplishments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`neon-card p-6 rounded-xl ${index === 5 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="bg-ct-primary/10 p-4 rounded-lg mb-4 w-fit">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold text-ct-primary mb-3">
                {achievement.title}
              </h3>
              <div className="text-ct-text-secondary">
                {typeof achievement.description === "string" ? (
                  <p>{achievement.description}</p>
                ) : (
                  achievement.description
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Photo Grid */}
        <div>
          <h3 className="text-2xl font-bold text-ct-primary text-center mb-8 mild-black-neon">
          Sessions Gallery
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="rounded-lg shadow-md w-full h-40 object-cover neon-border hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
