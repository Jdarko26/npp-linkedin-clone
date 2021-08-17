const http = require("http");
const app = require("./app");

const server = http.createServer(app);
const host = process.env.HOST || "0.0.0.0";

const port = process.env.PORT || 4500;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
