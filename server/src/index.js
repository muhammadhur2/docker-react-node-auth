
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('./config/mongoose');
const userRoutes = require('./routes/userRoutes');
// const { updateProfile, getProfile } = require('./controllers/userController');
// const { verifyToken } = require('./utils/jwtHelper');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect();

// // Define specific routes before the general /api route
// app.use('/api/profile', verifyToken, getProfile);
// app.put('/api/updateProfile', verifyToken, updateProfile);

// Then, define the general route
app.use('/api', userRoutes);

app.get('/hello', (req, res) => {
    res.send('Hello World');
  });

app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});



// const express = require('express');

// const app = express();
// const cors = require('cors')

// const mongoose = require('mongoose')

// const User = require('../models/user.model')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')
// const saltRounds = 10;


// app.use(cors())
// app.use(express.json())



// mongoose.connect(`mongodb://127.0.0.1:27017/mydatabase`)

// app.get('/hello', (req,res) => {
//     res.send('hello world')
// })

// app.post('/api/register', async (req,res) => {
//     console.log(req.body)
//     try {
//         const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        
//         const user = await User.create({
//             name: req.body.name,
//             email: req.body.email,
//             password: hashedPassword
//         })
//         res.json({ status: 'ok' })
//     } catch (err) {
//         console.log(err)
//         res.json({ status: 'error', error: 'Error' })
//     }
// })

// app.post('/api/login', async (req,res) => {
//     try {
//         const user = await User.findOne({
//             email: req.body.email
//         });
        
//         if (user) {
//             const match = await bcrypt.compare(req.body.password, user.password);
            
//             if (match) {
//                 const token = jwt.sign(
//                     {
//                         name: user.name,
//                         email: user.email
//                     },
//                     'secret123'
//                 );

//                 return res.json({ status: 'ok', user: token });
//             } else {
//                 return res.json({ status: 'error', user: false });
//             }
//         } else {
//             return res.json({ status: 'error', user: false });
//         }
//     } catch (err) {
//         res.json({ status: 'error', error: 'Error' });
//     }
// })


// app.listen(3001, () => {
//     console.log('Server running on http://localhost:3001');
//   });
