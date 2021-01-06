'use strict'
module.exports = function (sequelize,DataTypes)
{
var login = sequelize.define('login',{
 login_id :{
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER,
    allowNull:false,
    },

    login_role_id:{
    type:DataTypes.INTEGER,
    allowNull:false
    },

    login_username:{
    type:DataTypes.STRING,
    allowNull:false
    },

    user_password:{
    type:DataTypes.STRING,
    allowNull:false
    },



    createdAt:{
    type:DataTypes.DATE,
    allowNull:false
    },
    updatedAt:{
    type:DataTypes.DATE,
    allowNull:false}

}

,{

freezeTableName: true,

}


)
return login;
}