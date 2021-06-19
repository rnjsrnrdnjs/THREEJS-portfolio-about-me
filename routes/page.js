const express=require('express');
const router=express.Router();

const moment=require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

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
router.get('/food',async(req,res,next)=>{
	try{
		const image=[];
		const foodCount=25
		for(let i=0;i<foodCount;i++){
			image.push(`F${i}`);
		}
		res.render('food',{
			image:image,
		});
	}catch(err){
		console.log(err);
	}
});
router.get('/fairy',async(req,res,next)=>{
	try{
		res.render('fairy');
	}catch(err){
		console.log(err);
	}
});
router.get('/computer',async(req,res,next)=>{
	try{
		//시간은 후에 노드 스케쥴러 크론을 이용해 주기적을 보내주자.
		let now=new Date();
		let time=moment().format("MM-DD HH:mm");
		
		res.render('computer',{
			time:time,
		});
	}catch(err){
		console.log(err);
	}
});


module.exports = router;