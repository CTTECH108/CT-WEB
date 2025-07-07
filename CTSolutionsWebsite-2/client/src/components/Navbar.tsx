import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoPath from "@assets/WhatsApp Image 2025-03-19 at 12.21.50 PM_1751801533681.jpeg";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#products", label: "Products" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#milestones", label: "Milestones" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      if (!target.closest('.mobile-menu') && !target.closest('.mobile-menu-btn')) {
        closeMobileMenu();
      }
    };

    // Scroll spy to highlight active section
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'products', 'portfolio', 'milestones', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('#home')}>
            <img src={logoPath} alt="CTSolutions Logo" className="h-10 w-10 rounded-full" />
            <div className="text-2xl font-tech font-bold text-ct-primary neon-glow">
              CT<span className="text-ct-secondary">Solutions</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`nav-link font-medium transition-colors duration-300 ${
                    activeSection === item.href.substring(1)
                      ? "text-ct-primary"
                      : "text-ct-text hover:text-ct-primary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="mobile-menu-btn text-ct-primary hover:text-ct-secondary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu md:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-2">
              <img src={logoPath} alt="CTSolutions Logo" className="h-8 w-8 rounded-full" />
              <div className="text-xl font-tech font-bold text-ct-primary neon-glow">CTSolutions</div>
            </div>
            <button
              onClick={closeMobileMenu}
              className="text-ct-primary"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="space-y-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left font-medium py-2 transition-colors duration-300 ${
                  activeSection === item.href.substring(1)
                    ? "text-ct-primary"
                    : "text-ct-text hover:text-ct-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  );
}
