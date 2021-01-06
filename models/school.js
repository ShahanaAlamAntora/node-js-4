'use strict'
module.exports = function (sequelize,DataTypes)
{
var school = sequelize.define('school',{
school_id :{
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER,
    allowNull:false,
    },
    school_name:{
    type:DataTypes.STRING,
    allowNull:false
    },
    school_type:{
    type:DataTypes.STRING,
    allowNull:false
    },

    school_description:{
    type:DataTypes.STRING,
    allowNull:false
    },
    school_address:{
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
return school;
}