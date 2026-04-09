const express = require("express");
const os = require("os");

const app = express();
const PORT = 3000;

// Health endpoint for Uptime Kuma
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    uptime: process.uptime(),
    timestamp: new Date(),
  });
});

// Main UI
app.get("/", (req, res) => {
  const uptime = process.uptime().toFixed(2);
  const hostname = os.hostname();
  const memory = (process.memoryUsage().rss / 1024 / 1024).toFixed(2);

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Node App Status</title>
      <style>
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #1e3c72, #2a5298);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .card {
          background: rgba(255,255,255,0.1);
          padding: 30px;
          border-radius: 15px;
          backdrop-filter: blur(10px);
          text-align: center;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        .status {
          font-size: 20px;
          margin: 10px 0;
          color: #00ffcc;
        }
        .title {
          font-size: 28px;
          font-weight: bold;
        }
        .pulse {
          width: 15px;
          height: 15px;
          background: #00ffcc;
          border-radius: 50%;
          display: inline-block;
          animation: pulse 1.5s infinite;
          margin-right: 8px;
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="title">🚀 Node.js App Running</div>
        <div class="status">
          <span class="pulse"></span>Healthy
        </div>
        <p><b>Hostname:</b> ${hostname}</p>
        <p><b>Uptime:</b> ${uptime} seconds</p>
        <p><b>Memory Usage:</b> ${memory} MB</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
