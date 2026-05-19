const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('NexusDeploy CI/CD Running!');
});

app.listen(3088, () => {
  console.log('Server running on port 3088');
});