import React, { useState } from "react";
import Viewer from "./components/viewer.jsx";
import AnnotationPanel from "./components/annotationpanel.jsx";
import SearchBar from "./components/searchbar.jsx";

export default function App() {
  const [annotations, setAnnotations] = useState([]);

  const handleAddAnnotation = (annotation) => {
    setAnnotations([...annotations, annotation]);
  };

  return (
    <div className="app">
      <h1>Web Viewer</h1>
      <SearchBar />
      <Viewer annotations={annotations} onAddAnnotation={handleAddAnnotation} />
      <AnnotationPanel annotations={annotations} />
    </div>
  );
}
