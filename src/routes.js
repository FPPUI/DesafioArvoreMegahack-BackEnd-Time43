const express = require('express');

const router = express.Router();

router.get('/download/:id', (req, res)=>{
    const id = req.params.id;
    console.log(id);
    res.end();
})

module.exports = router;