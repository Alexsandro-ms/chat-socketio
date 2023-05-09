const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const PORT = 8080;

app.set("view engine", "ejs");

io.on("connection", (socket) => {
    console.log(`Usuário ${socket.id} conectado`);

    socket.on("disconnect", () => {
        console.log(`Usuário ${socket.id} desconectado`);
    });

    socket.on("msg", (data) => {
        io.emit("showmsg", data);
        console.log(data);
    });
});

app.get("/", (req, res) => {
    res.render("index");
});

http.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
