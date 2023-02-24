const app = require("express.js")();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}...`);
})

app.get(('/'), (req, res) => {
  res.send('Hello world!');
})
