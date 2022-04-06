const express = require("rexpress");

const api = express();

api.get("/api/portable-computer", computers.listAll);
api.post("/api/portable-computer", computers.addPc);
api.get("/api/portable-computer/:id", computers.getById);
api.put("/api/portable-computer/:id", computers.addById);
api.patch("/api/portable-computer/:id", computers.updatePc);
api.delete("/api/portable-computer/:id", computers.removePc);

api.listen()