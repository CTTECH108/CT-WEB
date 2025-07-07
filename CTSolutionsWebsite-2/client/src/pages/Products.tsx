import { useEffect } from "react";
import { Smartphone, Sprout, Eye } from "lucide-react";

export default function Products() {
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

  const products = [
    {
      icon: <Smartphone className="text-ct-primary text-2xl" />,
      title: "One Touch",
      description: "Multi-service app integrating radio, travel booking, food delivery, and healthcare."
    },
    {
      icon: <Sprout className="text-ct-primary text-2xl" />,
      title: "Farmers Friend",
      description: "Online E-Sandhai platform connecting farmers directly with consumers."
    },
    {
      icon: <Eye className="text-ct-primary text-2xl" />,
      title: "Electrooculography",
      description: "Eye-tracking simulation system to control digital devices using biosignals."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-tech font-bold text-ct-primary neon-glow mild-black-neon mb-6">
            Our Products
          </h2>
          <p className="text-xl text-ct-text-secondary max-w-3xl mx-auto mild-black-neon">
            Innovative solutions that transform industries
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="neon-card p-8 rounded-xl text-center">
              <div className="bg-ct-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                {product.icon}
              </div>
              <h3 className="text-2xl font-bold text-ct-primary mb-4 mild-black-neon">{product.title}</h3>
              <p className="text-ct-text-secondary leading-relaxed mild-black-neon">
                {product.description}
              </p>
              <div className="mt-6">
                <button className="text-ct-primary hover:text-white hover:bg-ct-primary border border-ct-primary px-6 py-2 rounded-full transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Product showcase image */}
        <div className="mt-16 text-center">
          <img
            src="https://github.com/CTTECH108/CT-WEB/blob/main/CTSolutionsWebsite-2/attached_assets/photo%20collage.png"
            alt="Product showcase with mobile and web applications"
            className="rounded-2xl shadow-xl neon-border mx-auto max-w-4xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
