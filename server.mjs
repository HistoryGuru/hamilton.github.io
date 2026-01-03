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

        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () =>
    console.log("Hamilton running at http://localhost:3000")
);
import { Purchases } from "@revenuecat/purchases-js";

const API_KEY = "test_PajAUOIeeVPpAXZaLdTjjPKUjXI";

// Initialize the SDK
// Replace 'my_app_user_id' with your internal user ID if available
const purchases = Purchases.configure({
  apiKey: API_KEY,
  appUserId: "my_app_user_id", // Optional: leave null for anonymous users
});

export default purchases;
