const http = require('http');
const os = require('os');

const port = 3000;

const server = http.createServer((req, res) => {
  const now = new Date().toLocaleString();
  const hostname = os.hostname();

  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      status: 'OK',
      time: now
    }));
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>🚀 CI/CD Demo App</title>
      <style>
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .card {
          background: rgba(255,255,255,0.1);
          padding: 40px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          backdrop-filter: blur(10px);
        }
        h1 {
          margin-bottom: 10px;
        }
        .badge {
          margin-top: 15px;
          padding: 8px 12px;
          background: #00ffcc;
          color: #000;
          border-radius: 8px;
          display: inline-block;
          font-weight: bold;
        }
        .info {
          margin-top: 20px;
          font-size: 14px;
          opacity: 0.9;
        }
        .footer {
          margin-top: 25px;
          font-size: 12px;
          opacity: 0.7;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🚀 CI/CD Pipeline Demo version 3</h1>
        <p>Your deployment is working perfectly!!</p>

        <div class="badge">✅ Build Successful</div>

        <div class="info">
          <p><strong>Time:</strong> ${now}</p>
          <p><strong>Server:</strong> ${hostname}</p>
          <p><strong>Port:</strong> ${port}</p>
        </div>

        <div class="footer">
          Auto-deployed via CI/CD 💡
        </div>
      </div>
    </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}/`);
});
