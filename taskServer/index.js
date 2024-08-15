require("dotenv").config();
const app = require("./app");
const http = require("http");
const connectDB = require("./config/db");
connectDB();

const server = http.createServer(app);
const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`server listening at port ${port}`);
});
