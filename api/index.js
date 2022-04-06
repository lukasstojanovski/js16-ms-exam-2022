const express = require("rexpress");
const config = require("./pkg/config")
const computers = require("./handlers/computers")

const api = express();

api.use(express.json());

api.get("/api/portable-computer", computers.getAll);
api.post("/api/portable-computer", computers.create);
api.get("/api/portable-computer/:id", computers.getOne);
api.put("/api/portable-computer/:id", computers.update);
api.patch("/api/portable-computer/:id", computers.updatePartial);
api.delete("/api/portable-computer/:id", computers.remove);

api.listen(config.get("service").port, err => {
    if(err) return console.log(err);
    console.log(`Server started on port ${config.get("service").port}`)
});