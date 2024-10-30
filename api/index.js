const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

app.get('/test', (req, res) => {
    res.json('test ok i work fine')
});

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000')
})
    ;