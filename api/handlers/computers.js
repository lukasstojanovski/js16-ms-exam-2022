const computers = require("../pkg/computers")
const computersMongo = require("../pkg/computers/mongo");
const { validate } = require("../pkg/computers/validate")

const getAll = async (req, res) => {
    try{
        let pcs = await computersMongo.getAllComputers();
        return res.status(200).send(pcs)
    }catch(err) {
        console.log(err);
        return res.status(500).send("server error")
    }
};

const getOne = async (req, res) => {
    try {
        let pcs = await computersMongo.getOne(req.params.id)
        return res.status(200).send(pcs)
    }catch(err){
        console.log(err)
        return res.status(500).send("Internal Server Error")
    }
};

module.exports= {
    getOne,
    getAll
}
