const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(require('./router/route'));

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "Yo pal, ur API is working, just report if has any problems 😎🤙"
    });
});
app.listen(3000, '0.0.0.0', () => {
    console.log(`Im Running with u 🤙`);
})