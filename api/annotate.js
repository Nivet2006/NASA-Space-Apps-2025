export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { coords, label } = req.body;
  res.status(200).json({ saved: { coords, label } });
}