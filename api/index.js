const express = require("rexpress");
const config = require("./pkg/config")
const computers = require("./handlers/computers")

const api = express();

api.use(express.json());

api.get("/api/portable-computer", computers.getAll);
api.post("/api/portable-computer", computers.addPc);
api.get("/api/portable-computer/:id", computers.getById);
api.put("/api/portable-computer/:id", computers.addById);
api.patch("/api/portable-computer/:id", computers.updatePc);
api.delete("/api/portable-computer/:id", computers.removePc);

api.listen(config.get("service").port, err => {
    if(err) return console.log(err);
    console.log(`Server started on port ${config.get("service").port}`)
});