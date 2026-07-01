import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // AI Code Assistant Endpoint
  app.post("/api/ask-ai", async (req, res) => {
    try {
      const { prompt, currentCode, fileType } = req.body;
      
      if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ error: "Gemini API key is missing. Please configure it in the secrets menu." });
      }

      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const systemInstruction = `You are an expert CSS/HTML coding mentor. The user is asking for help with their code in the in-app code editor.
The current file type is ${fileType}. Provide a helpful, clean, and exact code snippet that they can insert.
Respond ONLY with the raw code that should be inserted. Do not include markdown blocks like \`\`\`html or \`\`\`css, just the raw text. Do not provide explanations unless specifically asked, because your output will be directly inserted into the editor.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
          { role: "user", parts: [{ text: `Current ${fileType} code:\n${currentCode}\n\nUser Prompt: ${prompt}` }] }
        ],
        config: {
          systemInstruction,
          temperature: 0.2,
        }
      });

      res.json({ code: response.text });
    } catch (error: any) {
      console.error("AI Error:", error);
      res.status(500).json({ error: error.message || "Failed to generate code." });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
