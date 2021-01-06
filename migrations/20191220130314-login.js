'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

     return queryInterface.createTable('login',{
    login_id :{
    primaryKey:true,
    autoIncrement:true,
    type:Sequelize.INTEGER,
    allowNull:false,
    },

    login_role_id:{
    type:Sequelize.INTEGER,
    allowNull:false
    },

    login_username:{
    type:Sequelize.STRING,
    allowNull:false
    },

    user_password:{
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

    return queryInterface.dropTable('login');

  }
};
