'use strict'
module.exports = function (sequelize,DataTypes)
{
var registration = sequelize.define('registration',{
registration_id :{
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER,
    allowNull:false,
    },


    registration_type:{
    type:DataTypes.STRING,
    allowNull:false
    },

    registration_description:{
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
return registration;
}