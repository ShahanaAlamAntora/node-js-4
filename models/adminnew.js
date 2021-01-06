'use strict'
module.exports = function (sequelize,DataTypes)
{
var adminnew = sequelize.define('adminnew',{
    admin_id :{
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER,
    allowNull:false,
    },

    admin_name:{
    type:DataTypes.STRING,
    allowNull:false
    },

    admin_login_name:{
    type:DataTypes.STRING,
    allowNull:false
    },

    admin_password:{
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



},{

freezeTableName: true,

})
return adminnew;
}