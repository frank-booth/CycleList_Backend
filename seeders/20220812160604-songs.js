"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "songs",
      [
        {
          title: "The Way You Are",
          artist: "Eminem",
          genre: "Hip-Hop",
          length: "3:00",
          riderId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Don't Stop 'Til You Get Enough",
          artist: "Michael Jackson",
          genre: "Pop",
          length: "4:34",
          riderId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("songs", null, {});
  },
};
