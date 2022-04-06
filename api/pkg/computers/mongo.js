const mongoose = require("mongoose");

const Computer = mongoose.model(
    "computers",
    {
        brand: String,
        model: String,
        cpu_cores: Number,
        ram: Number,
        disk: String,
        price: Number,
        stores: Array,
        num_ports: Object,
        created: Date
    },
    "computers"
);

const addPc = async (computer) => {
    let pc = new Computer(computer)
};

const removePc = async (id) => {
    return await Computer.deleteOne({_id: id});
};

const updatePc = async (id, computer) => {
    return await Computer.updateOne({_id: id}, computer);
};

const getAllComputers = async () => {
    return await Computer.find({});
};

const getOne = async (id) => {
    return await Computer.findOne({_id: id});
};

module.exports = {
    addPc,
    removePc,
    updatePc,
    getAllComputers,
    getOne
}