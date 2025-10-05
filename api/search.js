export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { query } = req.body;

  // Dummy results
  const results = [
    { id: 1, title: "Andromeda Galaxy", score: 0.95 },
    { id: 2, title: "Lunar Crater Tycho", score: 0.89 }
  ];

  res.status(200).json({ results });
}
