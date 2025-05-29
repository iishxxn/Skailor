const express = require("express");
const bodyParser = require("body-parser");
const OpenAI = require("openai");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.post("/chat", async (req, res) => {
  const { message, subject } = req.body;
  let systemPrompt = "You are a helpful AI tutor.";
  if (subject === "math") systemPrompt = "You are a brilliant Math tutor.";
  else if (subject === "science") systemPrompt = "You are a Science tutor.";
  else if (subject === "history") systemPrompt = "You are a History expert.";

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ]
    });
    res.json({ message: response.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Chat error" });
  }
});

app.get("/data/:class", (req, res) => {
  const classNum = req.params.class;
  const filePath = path.join(__dirname, "data", "cbse", `class${classNum}.json`);
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Data load error" });
    res.json(JSON.parse(data));
  });
});

app.listen(3000, () => console.log("✅ Skailor backend running on port 3000"));
