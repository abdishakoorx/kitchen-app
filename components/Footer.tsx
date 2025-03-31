import { ChefHat, Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "/", label: "Facebook" },
    { icon: Instagram, href: "/", label: "Instagram" },
    { icon: Twitter, href: "/", label: "Twitter" },
    { icon: Mail, href: "/", label: "Email" }
  ];

  const footerLinks = [
    {
      title: "Features",
      links: [
        { label: "Smart Cooking", href: "/" },
        { label: "Pantry Management", href: "/" },
        { label: "Nutrition Tools", href: "/" },
        { label: "Community", href: "/" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/" },
        { label: "Recipes", href: "/" },
        { label: "Cooking Tips", href: "/" },
        { label: "FAQs", href: "/" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/" },
        { label: "Contact", href: "/" },
        { label: "Privacy Policy", href: "/" },
        { label: "Terms of Service", href: "/" }
      ]
    }
  ];

  return (
    <footer className="bg-tertiary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ChefHat className="h-6 w-6 text-kitchen-terracotta" />
              <span className="text-xl font-bold">Bottleyx</span>
            </div>
            <p className="text-sm text-white/70 mb-4">
              Your smart kitchen companion, powered by AI to make cooking enjoyable and efficient.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link 
                  key={social.label}
                  href={social.href} 
                  className="text-white/70 hover:text-kitchen-terracotta transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
          
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2 text-white/70">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="hover:text-kitchen-terracotta transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-sm text-white/50 text-center">
          &copy; {new Date().getFullYear()} Bottleyx. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;