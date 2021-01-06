'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return queryInterface.createTable('librarynew',{
    library_id :{
    primaryKey:true,
    autoIncrement:true,
    type:Sequelize.INTEGER,
    allowNull:false,
    },

    library_user_id:{
    type:Sequelize.INTEGER,
    allowNull:false
    },

    library_user_department_semester:{
    type:Sequelize.INTEGER,
    allowNull:false
    },

    library_user_mobile:{
    type:Sequelize.INTEGER,
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
     return queryInterface.dropTable('librarynew');

  }
};
