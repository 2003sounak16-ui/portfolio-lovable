import { Heart, Github, Linkedin, Mail } from "lucide-react";
import { WavyBackground } from "@/components/ui/wavy-background";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/sounakpatra", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/sounakpatra", label: "LinkedIn" },
  { icon: Mail, href: "mailto:sounak.patra@example.com", label: "Email" },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative">
      <WavyBackground
        containerClassName="min-h-0 h-auto py-12"
        colors={["#a855f7", "#8b5cf6", "#c084fc", "#a78bfa", "#d946ef"]}
        waveWidth={30}
        backgroundFill="hsl(270, 30%, 8%)"
        blur={8}
        speed="slow"
        waveOpacity={0.3}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Logo & Copyright */}
              <div className="text-center md:text-left">
                <a
                  href="#"
                  className="font-display text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-400 mb-2 inline-block"
                >
                  Sounak.
                </a>
                <p className="text-sm text-white/60">
                  © {new Date().getFullYear()} Sounak Patra. All rights reserved.
                </p>
              </div>

              {/* Quick Navigation */}
              <div className="flex flex-wrap justify-center gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-white/60 hover:text-purple-400 hover:bg-purple-500/20 transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Made with Love */}
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-sm text-white/60 flex items-center justify-center gap-1">
                Made with <Heart className="h-4 w-4 text-pink-500 fill-pink-500" /> using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </WavyBackground>
    </footer>
  );
};
