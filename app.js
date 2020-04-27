

const express = require('express')
const mongoose = require('mongoose')
const model = require('./models/model')
const PORT = process.env.PORT || 5000
const URL = 'mongodb+srv://musekwa:Ssssssss12@cluster0-up3xb.mongodb.net/test?retryWrites=true&w=majority'


mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('MongoDB Connected ...')
})
.catch(err => console.log(err))


const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))
var url = {}
var output = []

app.post('/api', async (req, res)=>{
    url = {original_url: req.body.longUrl}
    var original = model.findOne({original_url: url.original_url})
    if (original.original_url == null){
        await model.create({original_url: req.body.longUrl})
    }
    res.redirect('/')
})

app.get('/', async (req, res)=>{
    var document = await model.findOne({original_url: url.original_url})
    url = {}
    if (document == null){
        output = []
        res.render('index', {output: output})
    }
    else{
        if (output.includes(document) == false){
            output.push(document)
        }
        res.render('index', {output: output})
    }  
})

app.listen(PORT, (req, res)=>{
    console.log('App started on port '+PORT)
})