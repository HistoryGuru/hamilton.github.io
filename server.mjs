import express from "express";
import fetch from "node-fetch";
import path from "path";

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/api/ai", async (req, res) => {
  try {
    const response = await fetch(
      "https://api.puter.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.PUTER_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(req.body)
      }
    );

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Puter API error: ${error}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Backend error:", err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
