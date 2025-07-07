import { MapPin, Mail, Phone, Heart } from "lucide-react";

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-3xl font-tech font-bold text-ct-primary neon-glow mb-4">
              CT<span className="text-ct-secondary">Solutions</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner in technology solutions and training. Building the digital future together.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/crystals-tech-consulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ct-primary/20 p-3 rounded-full hover:bg-ct-primary/40 transition-colors"
              >
                <i className="fab fa-linkedin text-ct-primary"></i>
              </a>
              <a
                href="https://x.com/crysteclogi1624?s=09"
                className="bg-ct-primary/20 p-3 rounded-full hover:bg-ct-primary/40 transition-colors"
              >
                <i className="fab fa-x-twitter text-ct-primary"></i>
              </a>
              <a
                href="https://www.instagram.com/at_crys_tec/profilecard/?igsh=YmRzdmN1Z3d6d2dn"
                className="bg-ct-primary/20 p-3 rounded-full hover:bg-ct-primary/40 transition-colors"
              >
                <i className="fab fa-instagram text-ct-primary"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-ct-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('#about')} className="text-gray-300 hover:text-ct-primary transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#services')} className="text-gray-300 hover:text-ct-primary transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#products')} className="text-gray-300 hover:text-ct-primary transition-colors">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#contact')} className="text-gray-300 hover:text-ct-primary transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-ct-primary mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <MapPin className="text-ct-primary mr-2" size={16} />
                Tiruvannamalai, India
              </p>
              <p className="flex items-center">
                <Mail className="text-ct-primary mr-2" size={16} />
                bastoffcial@gmail.com
              </p>
              <p className="flex items-center">
                <Phone className="text-ct-primary mr-2" size={16} />
                +91 9790155280
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center">
            © 2025 CTSolutions. All rights reserved. | We are here for the future.
          </p>
        </div>
      </div>
    </footer>
  );
}
