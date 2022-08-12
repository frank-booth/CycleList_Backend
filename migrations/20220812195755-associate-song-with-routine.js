'use strict';

const { query } = require("express");

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.changeColumn("routines", "songId", {
      type: Sequelize.INTEGER,
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      references: {
        model: "songs",
        key: "id",
      },
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.changeColumn("routines", "songId", { null: true });

  }
};
