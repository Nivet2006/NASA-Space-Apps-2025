import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-space.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
      </div>

      {/* Animated Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/10 border border-primary/30 rounded-full shadow-glow-primary">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Source-D-Code</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-nebula bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Explore the Universe
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
          Space Apps Challenge 2025 Submission.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button
            size="lg"
            className="gap-2 bg-primary hover:bg-primary/90 shadow-glow-primary text-lg px-8 py-6"
            onClick={() => window.location.href = "https://space-apps-local-wjct.vercel.app/"}
          >
            <Rocket className="w-5 h-5" />
            Start Exploring
            <ArrowRight className="w-5 h-5" />
          </Button>

          {/*<Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6 border-accent/30 hover:border-accent hover:bg-accent/10 hover:shadow-glow-accent">
            View Demo Mission
          </Button>*/}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            {/*{ value: "1T+", label: "Pixels Processed" },
            { value: "500+", label: "Datasets Available" },
            { value: "AI", label: "Powered Search" },
            { value: "Real-time", label: "Collaboration" },*/}
          ].map((stat, i) => (
            <div key={i} className="animate-in fade-in slide-in-from-bottom-4 duration-1000" style={{ animationDelay: `${400 + i * 100}ms` }}>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
