import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">NASA Visual Explorer</h3>
            <p className="text-sm text-muted-foreground">
              A hackathon project for NASA Space Apps Challenge 2025. Exploring the universe at gigapixel scale.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Tech Stack</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Vite</li>
              <li>• OpenSeadragon / Leaflet</li>
              <li>• Vercel API</li>
            </ul>
          </div>

          {/*<div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Resources</h3>
            <div className="space-y-2">
              <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground">
                <Github className="w-4 h-4" />
                GitHub Repository
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground">
                <ExternalLink className="w-4 h-4" />
                NASA Data Archive
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground">
                <ExternalLink className="w-4 h-4" />
                Documentation
              </Button>
            </div>
          </div>
        </div>*/}

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>Built for NASA Space Apps Challenge 2025 • Source-D-Code</p>
        </div>
      </div>
    </footer>
  );
};
