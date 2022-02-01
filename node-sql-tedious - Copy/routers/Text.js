const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const textModel = require('../models/Text');

router.post('/', async (request,response) =>{
    console.log(request.body);
    try{
        const text = await new textModel(request.body).save();
        response.send(text);
    }
    catch (error) {
        response.status(500).send(error);
    }
})
router.get('/getById/:id',async(request,response)=>{
    try{
        const text = await textModel.find({"id":request.params.id});
         
        response.send(text);
    }
    catch{
          response.status(500).send(error);
    }
})

router.get('/getMaxId',async(request,response)=>{
    try{
         const text = await textModel.find().sort({"id":-1}).limit(1);
        console.log(text[0].id);
        response.send({id:+text[0].id});
    }
    catch{
          response.status(500).send(error);
    }
})

router.get('/:id',async(request,response)=>{
    try{
        const text = await textModel.find({"id":request.params.id});
        console.log(text[0]);
        if(text[0]===undefined)
        response.send("0");
        else response.send("1");

    }
    catch{
          response.status(500).send(error);
    }
})
router.get('/:password/:id', async (request,response) =>{
    try{
        
        const text = await textModel.find({"id":request.params.id});
        if(text[0].password===request.params.password){
        response.send("1");
    }
        else response.send("0");

        
    }
    catch (error) {
        response.status(500).send(error);
    }
})

 



module.exports = router