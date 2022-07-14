const mongoose = require('mongoose');

connect().catch((err) => console.log(err));

async function connect() {
    await mongoose.connect('mongodb://localhost:27017/PhanDung_dev');
    console.log('Connect SucessFully!!!');
}
module.exports = { connect };
