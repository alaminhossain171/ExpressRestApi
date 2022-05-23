// const apiMiddleware = require('../middlewares/ApiMiddleware');

const routes=require('express').Router();

routes.get('/',(req,res)=>{
    res.render('index',{
        title:'Home page'
    })
})

routes.get('/about',(req,res)=>{
    res.render('about',{
        title:'About page'
    })

 
})

routes.get('/product',(req,res)=>{
    res.render('product',{
        title:'Product page'
    })
})


module.exports=routes;