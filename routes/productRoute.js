const productRoute=require('express').Router();
productRoute.get('/api/products',(req,res)=>{
    res.json([
        {id:1,
        name:'Samsung Tv',
    price:'26000 $'},
    {id:2,
        name:'Nokia Mobile',
    price:'6000 $'},
    {id:3,
        name:'R1 5 bike',
    price:'360000 $'},

    ])
})
module.exports=productRoute;