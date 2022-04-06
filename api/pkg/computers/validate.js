const { Validator } = require("node-input-validator");

const Computer = {
        brand: "required|String",
        model: "required|String",
        cpu_cores: "required|Number",
        ram: "required|Number",
        disk: "required|String",
        price: "required|Number",
        stores: "required|Array",
        num_ports: "required|Object",
        created: "required|Date"
};

const validate = async (data, scheme) => {
    let v = new Validator(data, scheme);
    let e = await v.check();
    if(!e) {
        throw{
            code: 400,
            error: v.errors
        };
    }
};

module.exports = {
    Computer,
    validate
}