"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("songs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      artist: {
        type: Sequelize.STRING,
      },
      genre: {
        type: Sequelize.STRING,
      },
      length: {
        type: Sequelize.STRING,
      },
      riderId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("songs");
  },
};
