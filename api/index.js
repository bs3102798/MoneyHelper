const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserModel = require('./models/User');
const cookieParser = require('cookie-parser');
require('dotenv').config()
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10)
const jwtSecret = 'anjfpoveiwajne';

app.use(express.json());

app.use(cookieParser());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

mongoose.connect(process.env.MONGO_URL);

app.get('/test', (req, res) => {
    res.json('test ok i work fine')
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    //res.json({ name, email, password });
    try {
        const userDoc = await UserModel.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt),

        })
        res.json(userDoc)

    } catch (e) {
        res.status(422).json(e);
    }



})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const userDoc = await UserModel.findOne({ email })
    if (userDoc) {
        //res.json('found')
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if (passOk) {
            jwt.sign({
                email: userDoc.email,
                id: userDoc._id
            },
                jwtSecret, {}, (err, token) => {
                    if (err) throw err;
                    res.cookie('token', token).json(userDoc);

                })
        } else {
            res.status(422).json('pass not ok')
        }
    } else {
        res.json('not found')
    }
})

app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err;
            // const userDoc = await UserModel.findById(userData.id);
            const { name, email, _id } = await UserModel.findById(userData.id);
            res.json({ name, email, _id });
            //res.json(userData);

        })

    } else {
        res.json(null);

    }
    // res.json({ token })
})

app.post('/logout', (req, res) => {
    res.cookie('token', '').json(true);
});



app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000')
});