import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BeamsBackground } from "@/components/ui/beams-background";

export const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BeamsBackground intensity="strong" className="min-h-screen">
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
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Hi, I'm{" "}
            <span className="gradient-text">Sounak Patra</span>
          </h1>

          {/* Tagline */}
          <div
            className="mb-8 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
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
              className="gradient-bg text-primary-foreground shadow-primary hover:opacity-90 transition-opacity"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-primary/30 hover:bg-primary/10 backdrop-blur-sm"
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
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </BeamsBackground>
  );
};
