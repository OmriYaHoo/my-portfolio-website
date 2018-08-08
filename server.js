const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('dist'));

    app.get('*', (req, res) => {
       res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));