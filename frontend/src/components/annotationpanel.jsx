import React from "react";

export default function AnnotationPanel({ annotations }) {
  return (
    <div className="panel">
      <h2>📝 Annotations</h2>
      {annotations.length === 0 && <p>No annotations yet.</p>}
      <ul>
        {annotations.map((a) => (
          <li key={a.id}>
            <b>{a.label}</b> @ ({a.coords.x.toFixed(3)}, {a.coords.y.toFixed(3)})
          </li>
        ))}
      </ul>
    </div>
  );
}