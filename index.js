const http = require("http");
const os = require("os");

const port = 3000;

const server = http.createServer((req, res) => {
  const now = new Date().toLocaleString();
  const hostname = os.hostname();
  const uptime = process.uptime().toFixed(0);
  const memory = (process.memoryUsage().rss / 1024 / 1024).toFixed(2);
  const cpuCount = os.cpus().length;
  const platform = os.platform();

  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({
      status: "UP",
      uptime: uptime,
      memory: memory + " MB",
      timestamp: now
    }));
  }

  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>🚀 DevOps Demo Dashboard</title>
    <style>
      body {
        margin: 0;
        font-family: 'Segoe UI', sans-serif;
        background: radial-gradient(circle at top, #1f1c2c, #928dab);
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }

      .card {
        width: 420px;
        background: rgba(255,255,255,0.08);
        padding: 35px;
        border-radius: 18px;
        text-align: center;
        box-shadow: 0 15px 40px rgba(0,0,0,0.4);
        backdrop-filter: blur(12px);
      }

      h1 {
        margin-bottom: 5px;
      }

      .subtitle {
        font-size: 14px;
        opacity: 0.8;
        margin-bottom: 20px;
      }

      .status {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 15px 0;
        font-weight: bold;
        color: #00ffcc;
      }

      .dot {
        width: 12px;
        height: 12px;
        background: #00ffcc;
        border-radius: 50%;
        margin-right: 8px;
        animation: pulse 1.5s infinite;
      }

      @keyframes pulse {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.6); opacity: 0.5; }
        100% { transform: scale(1); opacity: 1; }
      }

      .grid {
        text-align: left;
        margin-top: 20px;
      }

      .grid p {
        margin: 6px 0;
        font-size: 14px;
      }

      .badge {
        margin-top: 15px;
        padding: 8px 14px;
        background: linear-gradient(45deg, #00ffcc, #00c3ff);
        color: #000;
        border-radius: 8px;
        font-weight: bold;
        display: inline-block;
      }

      .footer {
        margin-top: 20px;
        font-size: 12px;
        opacity: 0.7;
      }

      .highlight {
        color: #00ffcc;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>🚀 DevOps Demo</h1>
      <div class="subtitle">CI/CD • Docker • Monitoring</div>

      <div class="status">
        <div class="dot"></div>
        System Healthy
      </div>

      <div class="badge">✅ Deployment Successful</div>

      <div class="grid">
        <p><b>🕒 Time:</b> ${now}</p>
        <p><b>💻 Host:</b> ${hostname}</p>
        <p><b>⏱ Uptime:</b> <span class="highlight">${uptime}s</span></p>
        <p><b>🧠 Memory:</b> ${memory} MB</p>
        <p><b>⚙️ CPUs:</b> ${cpuCount}</p>
        <p><b>🖥 Platform:</b> ${platform}</p>
        <p><b>🌐 Port:</b> ${port}</p>
      </div>

      <div class="footer">
        Monitored via Uptime Kuma • Auto-deployed pipeline 💡
      </div>
    </div>
  </body>
  </html>
  `);
});

server.listen(port, "0.0.0.0", () => {
  console.log(\`🚀 Server running at http://0.0.0.0:\${port}/\`);
});