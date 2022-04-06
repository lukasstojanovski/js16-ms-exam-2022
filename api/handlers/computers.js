const computers = require("../pkg/computers")

const getAll = async (req, res) => {
    try{
        let pcs = await computers.getAllComputers();
        return res.status(200).send(pcs)
    }catch(err) {
        console.log(err);
        return res.status(500).send("server error")
    }
};

const getOne = async (req, res) => {
    
}