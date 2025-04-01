import { ChefHat, Mail } from 'lucide-react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebook, href: "/", label: "Facebook" },
    { icon: FaInstagram, href: "/", label: "Instagram" },
    { icon: FaTwitter, href: "/", label: "Twitter" },
    { icon: Mail, href: "/", label: "Email" },
    { icon: FaTiktok, href: "/", label: "Tiktok" },
    { icon: FaYoutube, href: "/", label: "Youtube" }
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
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1 pr-8">
            <div className="flex items-center mb-4">
              <ChefHat className="h-8 w-8 mr-3" />
              <span className="text-xl font-bold mr-4">Bottleyx</span>
            </div>
            <p className="text-gray-400 mb-6 pr-8">
              Your smart kitchen companion, powered by AI to make cooking enjoyable and efficient.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              {socialLinks.map((social) => (
                <Link 
                  key={social.label} 
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="mt-8 md:mt-0">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          © {new Date().getFullYear()} Bottleyx. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;