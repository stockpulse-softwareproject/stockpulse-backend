const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://tharushichamodya03:0GjO7C9UkCWmuSlB@cluster0.iydktcn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to the database');
});

module.exports = db;
