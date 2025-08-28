const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch'); // npm install node-fetch

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
  res.send('TalkTide backend is running');
});

// Translation route
app.post('/translate', async (req, res) => {
  const { text, target } = req.body;

  if (!text || !target) {
    return res.status(400).json({ error: "Both 'text' and 'target' are required" });
  }

  try {
    const response = await fetch('https://libretranslate.de/translate', { // Corrected URL
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        q: text,
        source: 'en',  // AI sentence language
        target: target, 
        format: 'text'
      }),
    });

    // Parse JSON safely
    const data = await response.json();
    res.json(data); // { translatedText: "..." }

  } catch (err) {
    console.error('Translation error:', err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
