const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');
const componentRoutes = require('./routes/components');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/components', componentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
