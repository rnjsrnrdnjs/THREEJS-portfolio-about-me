const express=require('express');

const router=express.Router();

router.use((req,res,next)=>{
	/* res.locals 값추가 가능*/
	next();
});

router.get('/',(req,res,next)=>{
	res.render('room');
});
router.get('/party',(req,res,next)=>{
	res.render('party');
});
router.get('/food',(req,res,next)=>{
	res.render('food');
});
router.get('/fairy',(req,res,next)=>{
	res.render('fairy');
});
router.get('/computer',(req,res,next)=>{
	res.render('computer');
});


module.exports = router;