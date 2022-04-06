const files = require('../files');
const DATA_SOURCE = `${__dirname}/../../data`;

const addPc = async (computer) => {
    try{
        let data = await files.readData(DATA_SOURCE);
        data.push(computer);
        await files.writeData(data, DATA_SOURCE);
    }catch (err) {
        throw err;
    };
};

const removePc = async (index) => {
    try{
        let data = await files.readData(DATA_SOURCE);
        let out = data.filter((_, i) => index !== i);
        await files.writeData(out, DATA_SOURCE);
    }catch (err) {
        throw err;
    }
};

const updatePc = async (index, computer) => {
    try{
        let data = await files.readData(DATA_SOURCE);
        let out = data.map((c, i) => {
            if (index !== i) {
                c = computer; 
            }
            return c;
        });
        await files.writeData(out, DATA_SOURCE);
    }catch(err){
    throw err;
    }
};

const getAllComputers = async () => {
    try{
        let data = await files.readData(DATA_SOURCE);
        return data;
    }catch(err) {
        throw err;
    }
};

const getOne = async (index) => {
    try{
        let data = await files.readData(DATA_SOURCE);
        return data[index];
    }catch(err) {
        throw err;
    }
};

module.exports = {
    addPc,
    removePc,
    updatePc,
    getAllComputers,
    getOne
    
};