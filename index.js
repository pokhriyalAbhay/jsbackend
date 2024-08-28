const express = require('express')
const app = express();
const morgran = require('morgan') // third party middleware 

/*app.use((req,res,next)=>{
    console.log(req.method);
    next() // thid is application lelvel middleware matlab pure server ke level ke middleware 
})*/
app.use(express.json()) // ek tarah ka middkeware hai jo body ko oarse karta hain matlab samjta hain iske bina body kaam nahi kregi 
// app.use(express.urlencoded()) // jab hamre pass from se data bhej rehe  hian 
//app.use(express.static('public')) public nam ka folder banaya hain waha se sifhe post kar do 
const auth =(req,res,next)=>{1
    if(req.body.password =='1234')
        {
            next()
        }
        else
        {
            res.send("please set the right password")
        }
}
app.use(morgran('default'))

app.get('/get',auth,(req,res)=>{
    //res.send("hello bro i am abhay pokhriyal")
    res.send("get page")
})
app.get('/',(req,res)=>{
    //res.send("hello bro i am abhay pokhriyal")
    res.send("home page")
})
app.post('/abhi',auth,(req,res)=>{
    //res.send("hello bro i am abhay pokhriyal")
    res.send("post page")
})


app.listen(3000)