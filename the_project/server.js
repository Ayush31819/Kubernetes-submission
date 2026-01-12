// server.js
const express = require('express');
const path = require('path');
const app = express();

// Serve a simple HTML string
app.get('/', (req, res) => {
  res.send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Welcome</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>body{font-family:system-ui;margin:2rem}</style>
</head>
<body>
  <h1>Hello from Express</h1>
  <p>This is the root route (/).</p>
</body>
</html>`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
