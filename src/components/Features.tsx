import { Card } from "@/components/ui/card";
import { ZoomIn, Tag, Search, Layers, Video, Share2 } from "lucide-react";

const features = [
  {
    icon: ZoomIn,
    title: "pixel bit Navigation",
    description: "Seamlessly zoom and pan through multi-terapixel images of Earth, planets, and deep space.",
    color: "text-primary",
    glow: "shadow-glow-primary",
  },
  {
    icon: Tag,
    title: "Annotations",
    description: "Label features with manual or AI-assisted tagging. Collaborate with researchers worldwide.",
    color: "text-accent",
    glow: "shadow-glow-accent",
  },
  {
    icon: Search,
    title: "AI-Powered Search",
    description: "Find features by coordinates, names, or natural language. Let AI discover patterns for you.",
    color: "text-mars",
    glow: "shadow-glow-mars",
  },
  {
    icon: Layers,
    title: "Datasets Comparison",
    description: "Compare multispectral data, time series, and measurements from different NASA missions.",
    color: "text-primary",
    glow: "shadow-glow-primary",
  },
  {
    icon: Video,
    title: "Time-Lapse Explorer",
    description: "Navigate through time with video sequences and temporal imagery. Watch planets evolve.",
    color: "text-accent",
    glow: "shadow-glow-accent",
  },
  {
    icon: Share2,
    title: "Collab Tools",
    description: "Share discoveries, export data, and integrate with science outreach platforms.",
    color: "text-mars",
    glow: "shadow-glow-mars",
  },
];

export const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to navigate and analyze NASA's vast image archives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:${feature.glow} transition-shadow`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
