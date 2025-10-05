import { Search, Globe, Layers, Map } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Globe className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-foreground">NASA Visual Explorer</h1>
              <p className="text-xs text-muted-foreground">Space Apps Challenge 2025</p>
            </div>
          </div>
          
          {/*<nav className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm" className="gap-2">
              <Search className="w-4 h-4" />
              Search
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Layers className="w-4 h-4" />
              Datasets
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Map className="w-4 h-4" />
              Annotations
            </Button>
          </nav>*/}

          <Button className="bg-primary hover:bg-primary/90 shadow-glow-primary" onClick={() => window.location.href = "https://space-apps-local-wjct.vercel.app/"}>
            Launch Explorer
          </Button>
        </div>
      </div>
    </header>
  );
};
