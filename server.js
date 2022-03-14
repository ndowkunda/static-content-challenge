const PORT = process.env.PORT || 3000;
const app = require('./src/app.js')

app.listen(PORT, "localhost", () => {
  console.log(`Content management system listening at http://localhost:${PORT}`);
});