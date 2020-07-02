const express = require('express');
const connection = require('./database/connection');
const pathAbsolute = require('path');

const router = express.Router();

router.get('/download/:id', async (req, res)=>{
    const id = req.params.id;
    try{
        const { path, type } = (await connection.select('path', 'type').from('library').where('id', '=', id).first());
        const fileURL = pathAbsolute.resolve(__dirname, '../', path + '.' + type);
        return res.sendFile(fileURL);
    }catch(err){
        console.log(err);
        return res.send('Ocorreu algum erro.');
    }
    //return res.json({id});
})

router.get('/library', async (req, res)=>{
    const library = await connection.select('*').from('library');
    return res.json(library);
})

module.exports = router;