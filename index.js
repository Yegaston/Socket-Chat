const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");

const SocketIo = require("socket.io");

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Rutas

const server = app.listen(app.get("port"), () => {
  console.log(`server running in port ${app.get("port")}`);
});

// Sockets

const io = SocketIo(server);

io.on("connection", socket => {
  console.log(`Connection Id -> ${socket.id}`);
});
