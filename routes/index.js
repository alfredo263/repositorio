import express from 'express';

const router = express.Router();

router.get('/',(req,res) => { // req - lo que envimos : res - lo que express nos responde
    res.render('inicio')
});

router.get('/nosotros',(req,res) => { // req - lo que envimos : res - lo que express nos responde
    res.render('nosotros');
    });



export default router;