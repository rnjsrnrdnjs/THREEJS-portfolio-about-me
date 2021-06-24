const Sequelize=require('sequelize');

module.exports=class Chat extends Sequelize.Model{
	static init(sequelize){
		return super.init({
			ip:{
				type:Sequelize.STRING(20),
				allowNull:false,
			},
			chat:{
				type:Sequelize.STRING(400),
				allowNull:true,
			},
			img:{
				type:Sequelize.STRING(400),
				allowNull:true,
			}
		});
	}
	
	static associate(db){}
};