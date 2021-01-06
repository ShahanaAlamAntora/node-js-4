'use strict'
module.exports = function (sequelize,DataTypes)
{
var roles = sequelize.define('roles',{
role_id :{
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER,
    allowNull:false,
    },


    role_name:{
    type:DataTypes.STRING,
    allowNull:false
    },

    role_description:{
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

})
return roles;
}