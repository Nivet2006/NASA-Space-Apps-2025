nasa-visual-explorer/
│── api/                 # Serverless backend (Vercel)
│   ├── search.js
│   └── annotate.js
│
│── frontend/
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── src/
│       ├── main.jsx
│       ├── app.jsx
│       ├── components/
│       │    ├── Viewer.jsx          # OpenSeadragon viewer
│       │    ├── AnnotationPanel.jsx # add + list annotations
│       │    └── SearchBar.jsx       # coordinate/name search
│       └── styles.css
│
└── package.json   # root (just for vercel build commands)
