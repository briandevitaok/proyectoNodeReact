const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 8080
const cors = require('cors');
const Product = require('./models/product')



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


///Conexion a base de datos
mongoose.connect(`mongodb+srv://briandevitaok:12345@development.jwaya24.mongodb.net/test`, (err, res)=>{
    if (err) {throw err}

    console.log('Connected to MongoDB Database')
})


app.post('/api/v1/product',(req, res)=>{
    let body = req.body;
    let productos = new Product({
        name: body.name,
        price: body.price,
        category: body.category,
        stock: body.stock,
        city: body.city,
        description: body.description,
    })

    productos.save((err, productosDB)=>{
        if(err) {
            return res.status(400).json({
                ok: false,
                err,
        })
     }
        res.json({
            ok:true,
            producto:productosDB
        })
        
    })

})




app.get('/api/v1/products', (req, res)=>{

    Product.find({}, 'name price category stock city description')
    .exec((err, productos)=>{
        if(err) { return res.status(400).json({
            ok: false,
            err,
    })}
    res.json({
        ok:true,
        producto: productos
        })
    })})

app.put('/details/:id', function (req, res) {
    let id = req.params.id;
    let body 
})





app.listen(port, (err, res)=>{
    if (err)   {throw err} 
     
    console.log(`Listening on port ${port}`)    
})