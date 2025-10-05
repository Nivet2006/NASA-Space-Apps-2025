import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Tag, Layers, ZoomIn, ZoomOut } from "lucide-react";
import marsImage from "@/assets/mars-sample.jpg";

export const ExplorerDemo = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            UI/ UX Design
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore space at gigapixel resolution
          </p>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-6">
          {/* Control Panel */}
          <Card className="p-6 bg-card border-border h-fit space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                <Search className="w-5 h-5 text-primary" />
                Search
              </h3>
              <Input 
                placeholder="Coordinates or feature name..." 
                className="bg-background border-border"
              />
              <Button className="w-full mt-2 bg-primary hover:bg-primary/90">
                Search
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                <Layers className="w-5 h-5 text-accent" />
                Datasets
              </h3>
              <div className="space-y-2">
                {["Mars HiRISE", "Thermal", "Elevation"].map((dataset) => (
                  <label key={dataset} className="flex items-center gap-2 text-sm cursor-pointer hover:text-accent transition-colors">
                    <input type="checkbox" className="rounded border-border" defaultChecked={dataset === "Mars HiRISE"} />
                    <span>{dataset}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                <Tag className="w-5 h-5 text-mars" />
                Annotations
              </h3>
              <Button variant="outline" className="w-full border-mars/30 hover:border-mars hover:bg-mars/10">
                Add Marker
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Coordinates
              </h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>Lat: -14.5°</div>
                <div>Lon: 175.4°</div>
                <div>Zoom: 1:50,000</div>
              </div>
            </div>
          </Card>

          {/* Viewer */}
          <Card className="relative overflow-hidden bg-card border-border min-h-[600px] group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${marsImage})` }}
            >
              {/* Overlay Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_0px,rgba(255,255,255,0.05)_1px),linear-gradient(90deg,transparent_0px,rgba(255,255,255,0.05)_1px)] bg-[size:50px_50px] opacity-20"></div>
            </div>

            {/* Controls Overlay */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <Button size="icon" variant="secondary" className="bg-secondary/80 backdrop-blur-sm hover:bg-secondary">
                <ZoomIn className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="secondary" className="bg-secondary/80 backdrop-blur-sm hover:bg-secondary">
                <ZoomOut className="w-4 h-4" />
              </Button>
            </div>

            {/* Info Badge */}
            <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
              <div className="text-sm font-semibold text-foreground">Mars - Jezero Crater</div>
              <div className="text-xs text-muted-foreground">HiRISE ESP_028335_1755</div>
            </div>

            {/* Sample Annotation Markers */}
            <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-accent rounded-full shadow-glow-accent animate-pulse cursor-pointer"></div>
            <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-mars rounded-full shadow-glow-mars animate-pulse cursor-pointer"></div>
          </Card>
        </div>
      </div>
    </section>
  );
};
