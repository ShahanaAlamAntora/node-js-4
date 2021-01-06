'use strict'
module.exports = function (sequelize,DataTypes)
{
var student = sequelize.define('student',{
 stu_id :{
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER,
    allowNull:false,
    },

    stu_name:{
    type:DataTypes.STRING,
    allowNull:false
    },

    stu_mobile:{
    type:DataTypes.INTEGER,
    allowNull:false
    },

    stu_address:{
    type:DataTypes.STRING,
    allowNull:false
    },

    stu_email:{
    type:DataTypes.STRING,
    allowNull:false
    },

    stu_pass:{
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
return student;
}