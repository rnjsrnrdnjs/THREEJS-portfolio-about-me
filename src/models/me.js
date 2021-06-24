const Sequelize=require('sequelize');

module.exports=class Me extends Sequelize.Model{
	static init(sequelize){
		return super.init({
			backjoon:{
				type:Sequelize.STRING(20),
				allowNull:false,
			},
			codeforces:{
				type:Sequelize.STRING(400),
				allowNull:true,
			},
		});
	}
	
	static associate(db){}
};