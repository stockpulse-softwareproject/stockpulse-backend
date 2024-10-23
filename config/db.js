const mongoose = require('mongoose');
const dbURI = process.env.NODE_ENV === 'test' ? 'mongodb://localhost:27017/test'  : 'mongodb+srv://tharushi:Tharushi123@stock0.amvvjur.mongodb.net/?retryWrites=true&w=majority&appName=Stock0'; // Original DB URI
mongoose.connect(
  dbURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

module.exports = db;
