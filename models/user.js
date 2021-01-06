'use strict'
module.exports = function (sequelize,DataTypes)
{
var user = sequelize.define('user',{
 user_id :{
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER,
    allowNull:false,
    },

    user_name:{
    type:DataTypes.STRING,
    allowNull:false
    },

    user_mobile:{
    type:DataTypes.INTEGER,
    allowNull:false
    },

     user_email:{
    type:DataTypes.STRING,
    allowNull:false
    },

    user_address:{
    type:DataTypes.STRING,
    allowNull:false
    },

      createdAt:{
    type:DataTypes.DATE,
    allowNull:false
    },

    updatedAt:{
    type:DataTypes.DATE,
    allowNull:false
    }

}

,{

freezeTableName: true,

}

)
return user;
}