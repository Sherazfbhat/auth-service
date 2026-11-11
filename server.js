const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => res.json({ status: "Auth Service is running" }));

app.post('/auth/register', (req, res) => {
  const { email, name } = req.body;
  res.json({ message: "User registered successfully", user: { email, name } });
});

app.post('/auth/login', (req, res) => {
  const { email } = req.body;
  res.json({ token: "mock-jwt-token-drykart-secret", email });
});

app.listen(PORT, () => console.log(`Auth Service running on port ${PORT}`));
