import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WavyBackground } from "@/components/ui/wavy-background";

export const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <WavyBackground
      containerClassName="min-h-screen"
      colors={["#a855f7", "#8b5cf6", "#c084fc", "#a78bfa", "#d946ef"]}
      waveWidth={50}
      backgroundFill="hsl(270, 30%, 8%)"
      blur={10}
      speed="slow"
      waveOpacity={0.5}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Role Badge */}
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-2 text-sm font-medium animate-fade-in backdrop-blur-sm bg-secondary/80"
            style={{ animationDelay: "0.2s" }}
          >
            B.Tech CSE Student
          </Badge>

          {/* Name */}
          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in text-white"
            style={{ animationDelay: "0.4s" }}
          >
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-400">
              Sounak Patra
            </span>
          </h1>

          {/* Tagline */}
          <div
            className="mb-8 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto">
              "Building solutions through code, creativity, and curiosity."
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white shadow-lg shadow-purple-500/30 hover:opacity-90 transition-opacity border-0"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-purple-400/50 text-white hover:bg-purple-500/20 backdrop-blur-sm"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
            style={{ animationDelay: "1.5s" }}
          >
            <button
              onClick={() =>
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-white/60 hover:text-white transition-colors"
            >
              <ArrowDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </WavyBackground>
  );
};
