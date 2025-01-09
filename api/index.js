const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserModel = require('./models/User');
const Transaction = require('./models/transaction')
const Bill = require('./models/Bills');
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
                    res.cookie('token', token, { httpOnly: true }).json(userDoc);

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
    res.cookie('token', '', { maxAge: 0 }).json(true);
});


// app.post('/api/transaction', async (req, res) => {
//     //console.log(process.env.MONGO_URL)
//     await mongoose.connect(process.env.MONGO_URL)
//     const { name, description, datetime, price } = req.body;
//     const transaction = await Transaction.create({
//         name, description, datetime, price,
//         //user: userData.id,

//     })

//     res.json(transaction)

// });

app.post('/api/bill', async (req, res) => {
    //await mongoose.connect(process.env.MONGO_URL)
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });

    }
    try {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) {
                return res.status(401).json({ message: 'Invalid token' });
            }
            const { name, price, datetime } = req.body;
            const bill = await Bill.create({
                name,
                price,
                datetime,
                user: userData.id,
            })
            res.json(bill)

        })
    } catch (error) {
        res.status(500).json({ message: 'Error saving transaction' });


    }
})

app.get('/api/bills', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err;

            const bills = await Bill.find({ user: userData.id });
            res.json(bills)
        })
    } else {
        res.status(401).json({ message: 'Unauthorized' })
    }


})



app.delete('/api/bills', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const _id = req.query.id;
    try {
        const result = await Bill.deleteOne({ _id });
        if (result.deletedCount === 1) {
            res.json({ success: true });
        } else {
            res.status(404).json({ error: 'Bill not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});


app.post('/api/transaction', async (req, res) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) {
                return res.status(401).json({ message: 'Invalid token' });
            }

            const { name, description, datetime, price } = req.body;
            const transaction = await Transaction.create({
                name,
                description,
                datetime,
                price,
                user: userData.id,  // Link transaction to logged-in user
            });

            res.json(transaction);
        });
    } catch (error) {
        res.status(500).json({ message: 'Error saving transaction' });
    }
});


// app.get('/api/transactions', async (req, res) => {
//     await mongoose.connect(process.env.MONGO_URL);
//     const transactions = await Transaction.find();
//     res.json(transactions)

// })

app.get('/api/transactions', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const { token } = req.cookies;

    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err;

            const transactions = await Transaction.find({ user: userData.id });
            res.json(transactions);
        });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
});



app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000')
});