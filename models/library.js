'use strict'
module.exports = function (sequelize,DataTypes)
{
var library = sequelize.define('library',{
  library_id :{
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER,
    allowNull:false,
    },
     library_user_id:{
    type:DataTypes.STRING,
    allowNull:false
    },

    library_user_department_semester:{
    type:DataTypes.INTEGER,
    allowNull:false
    },

    library_user_mobile:{
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
return library;
}