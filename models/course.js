'use strict'
module.exports = function (sequelize,DataTypes)
{
var course = sequelize.define('course',{
  course_id :{
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER,
    allowNull:false,
    },
    course_name:{
    type:DataTypes.STRING,
    allowNull:false
    },
    course_student_id:{
    type:DataTypes.INTEGER,
    allowNull:false
    },

    course_type:{
    type:DataTypes.STRING,
    allowNull:false
    },

    course_description:{
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
return course;
}