'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('school',{
    school_id :{
    primaryKey:true,
    autoIncrement:true,
    type:Sequelize.INTEGER,
    allowNull:false,
    },
    school_name:{
    type:Sequelize.STRING,
    allowNull:false
    },
    school_type:{
    type:Sequelize.STRING,
    allowNull:false
    },

    school_description:{
    type:Sequelize.STRING,
    allowNull:false
    },
    school_address:{
    type:Sequelize.STRING,
    allowNull:false
    },


    createdAt:{
    type:Sequelize.DATE,
    allowNull:false
    },
    updatedAt:{
    type:Sequelize.DATE,
    allowNull:false}

    }

)



  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('school');
  }
};
