const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');
const componentRoutes = require('./routes/components');
const addComponentRequestRoutes = require('./routes/componentRequestRoute');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/components', componentRoutes);
app.use('/api', addComponentRequestRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
