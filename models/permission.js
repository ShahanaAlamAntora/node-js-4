'use strict'
module.exports = function (sequelize,DataTypes)
{
var permission = sequelize.define('permission',{
per_id :{
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER,
    allowNull:false,
    },

    per_role_id:{
    type:DataTypes.INTEGER,
    allowNull:false
    },

    per_module:{
    type:DataTypes.STRING,
    allowNull:false
    },

    per_name:{
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
return permission;
}