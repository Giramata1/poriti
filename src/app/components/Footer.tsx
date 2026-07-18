import React from 'react';
import { Github, Linkedin, Mail, MapPin, Code2, Briefcase } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'Software Development',
    'Web Applications',
    'IT Support & Consulting',
    'Business Automation'
  ];

  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Code2 size={18} className="text-white" />
              </div>
              <h3 className="text-lg font-bold">JEAN BONHEUR</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Software Developer & IT Support Specialist building practical solutions.
            </p>
            <div className="flex space-x-3">
              <a href="https://github.com/nzasingizimana" className="w-8 h-8 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Github size={16} />
              </a>
              <a href="https://linkedin.com/in/nzasingizimana-jean-bonheur" className="w-8 h-8 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links & Services */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-400 text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin size={14} className="text-gray-400" />
                <span className="text-gray-400 text-sm">Kigali, Rwanda</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} className="text-gray-400" />
                <a href="mailto:leatusbonheur@gmail.com" className="text-gray-400 hover:text-white text-sm transition-colors">
                  leatusbonheur@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase size={14} className="text-gray-400" />
                <span className="text-gray-400 text-sm">+250 791 467 695</span>
              </div>
            </div>
            <div className="mt-4 inline-flex items-center px-2 py-1 bg-green-900/30 rounded-full">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
              <span className="text-xs text-green-400">Open to Work</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} NZASINGIZIMANA Jean Bonheur. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;