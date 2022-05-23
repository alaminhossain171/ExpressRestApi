const apiMiddleware=(req,res,next)=>{
    const setUrl="1234"
    const routerUrl=req.query.apikey;
    if(routerUrl && (setUrl===routerUrl)){
        next()
    }
    else{
        res.json({
            "msg":"you are not allowd"
        })
    }
}

module.exports=apiMiddleware