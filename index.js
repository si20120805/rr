const express = require('express')

const app = express();
const cos = require('cors');
const mongoose = require('mongoose');

app.use(express.json())
app.use(express.urlencoded())

app.use(cos())

mongoose.connect("mongodb://127.0.0.1:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true

}, () => {
    console.log('Connected')

})

//Routes
app.post('/login', (req, res) => {
    const { name, password } = req.body

    modeUser.findOne({ name:name }, (err,data) => {

        if (data) {

            if (password === data.password) {
                res.send({msg:'Inside the function',data:data} )
            } else {
                res.send({msg:'passord not match'})
            }

        }
        else {
            res.send("user not register")
        }
    })





})
app.post('/registration', (req, res) => {
    const { name, email, password, repassword } = req.body
    modeUser.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send('user there')
        } else {

            const user = new modeUser({
                name: name,
                email: email,
                password: password
            })
            user.save((error) => {
                if (error) {
                    res.send(error)
                } else {

                    res.send('DONE')
                }

            })

        }
    })




})


app.listen(8000, () => {
    console.log('listining port', 8000)
})

const usersch = mongoose.Schema({
    name: String,
    email: String,
    password: String

})

//Model

const modeUser = new mongoose.model('Sid', usersch)