import React, { useEffect, useRef, useState } from "react";
import OpenSeadragon from "openseadragon";

export default function Viewer({ annotations, onAddAnnotation }) {
  const viewerRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);

  // Initialize OpenSeadragon whenever imageUrl changes
  useEffect(() => {
    if (!imageUrl) return;

    // Destroy old viewer before reinitializing
    if (viewerRef.current) {
      viewerRef.current.destroy();
      viewerRef.current = null;
    }

    // Create new viewer
    viewerRef.current = OpenSeadragon({
      id: "openseadragon-viewer",
      prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
      tileSources: {
        type: "image",
        url: imageUrl, // Local or remote image
      },
      showNavigator: true,
      animationTime: 1.2,
      blendTime: 0.5,
      constrainDuringPan: true,
    });

    // Add click-to-annotate feature
    viewerRef.current.addHandler("canvas-click", (event) => {
      const viewportPoint = viewerRef.current.viewport.pointFromPixel(event.position);
      const annotation = {
        id: Date.now(),
        coords: viewportPoint,
        label: prompt("Enter annotation label:"),
      };
      if (annotation.label) onAddAnnotation(annotation);
    });

    // Cleanup
    return () => {
      if (viewerRef.current) viewerRef.current.destroy();
    };
  }, [imageUrl]);

  // Handle local image upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check file type (must be image)
    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file (PNG, JPG, TIFF, etc.)");
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setImageUrl(objectUrl);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ margin: "10px 0" }}
      />

      <div
        id="openseadragon-viewer"
        style={{
          width: "100%",
          height: "600px",
          backgroundColor: "#000",
        }}
      />
    </div>
  );
}