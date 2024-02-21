const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('สวัสดี Express');
});

app.listen(9753, () => {
    console.log('run http://localhost:9753');
});

