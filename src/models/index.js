const Sequelize=require('sequelize');
const env=process.env.NODE_ENV || 'delvelopment';
const config=require('../config/cpmfog')[env];
const Me=require('./me');
const Chat=require('./chat');

const db={};
const sequelize=new Sequelize(
	config.database,config.username,config.password,config,
);

db.sequelize=sequelize;
db.Me=Me;
db.Chat=Chat;

Me.init(sequelize);
Chat.init(sequelize);

Me.associate(db);
Chat.associate(db);

module.exports=db;
