const express = require('express');
const client = require('prom-client');

const app = express();
const register = new client.Registry();

// Collect default metrics
client.collectDefaultMetrics({ register });

app.get('/', (req, res) => {
  res.send('Hello from app1!');
});

// Metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
