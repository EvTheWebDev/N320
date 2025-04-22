const express = require('express');
const http = require('http');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'views')));


const port = process.env.PORT || 14749;

app.listen(port, () => {
    console.log(`Server is running on port ${port} http://localhost:${port}`);
});