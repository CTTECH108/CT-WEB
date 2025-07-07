import { useState } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-ct-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-tech font-bold text-ct-primary neon-glow mild-black-neon mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-ct-text-secondary max-w-3xl mx-auto mild-black-neon">
            Ready to transform your digital future? Get in touch with us today!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="neon-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-ct-primary mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-ct-primary/10 p-3 rounded-full">
                    <MapPin className="text-ct-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-ct-text">Address</div>
                    <div className="text-ct-text-secondary">Tiruvannamalai, India</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-ct-primary/10 p-3 rounded-full">
                    <Mail className="text-ct-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-ct-text">Email</div>
                    <div className="text-ct-text-secondary">bastoffcial@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-ct-primary/10 p-3 rounded-full">
                    <Phone className="text-ct-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-ct-text">Phone</div>
                    <div className="text-ct-text-secondary">+91 9790155280</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-ct-primary/10 p-3 rounded-full">
                    <i className="fab fa-linkedin text-ct-primary text-xl"></i>
                  </div>
                  <div>
                    <div className="font-medium text-ct-text">LinkedIn</div>
                    <a
                      href="https://www.linkedin.com/company/crystals-tech-consulting/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ct-primary hover:text-ct-secondary transition-colors"
                    >
                      crystals-tech-consulting
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Office Hours */}
            <div className="neon-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-ct-primary mb-6">Office Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-ct-text">Monday - Friday</span>
                  <span className="text-ct-text-secondary">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ct-text">Saturday</span>
                  <span className="text-ct-text-secondary">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ct-text">Sunday</span>
                  <span className="text-ct-text-secondary">Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="neon-card p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-ct-primary mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-ct-text font-medium mb-2">First Name</label>
                  <Input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full neon-border"
                    required
                  />
                </div>
                <div>
                  <label className="block text-ct-text font-medium mb-2">Last Name</label>
                  <Input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full neon-border"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-ct-text font-medium mb-2">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full neon-border"
                  required
                />
              </div>
              
              <div>
                <label className="block text-ct-text font-medium mb-2">Subject</label>
                <Select onValueChange={(value) => handleInputChange('subject', value)}>
                  <SelectTrigger className="w-full neon-border">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="internship">Internship Inquiry</SelectItem>
                    <SelectItem value="workshop">Workshop Information</SelectItem>
                    <SelectItem value="training">Custom Training</SelectItem>
                    <SelectItem value="general">General Question</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-ct-text font-medium mb-2">Message</label>
                <Textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full neon-border"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full neon-button text-white px-8 py-4 rounded-lg font-semibold text-lg"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}