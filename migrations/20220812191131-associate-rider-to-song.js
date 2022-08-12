"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.changeColumn("songs", "riderId", {
      type: Sequelize.INTEGER,
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      references: {
        model: "riders",
        key: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.changeColumn("songs", "riderId", { null: true });
  },
};
