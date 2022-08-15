'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn("riders", "riderImage", {
      type: Sequelize.STRING
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn("riders", "riderImage")
  }
};
