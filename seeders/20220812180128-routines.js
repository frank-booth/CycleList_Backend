module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "routines",
      [
        {
          content: `Start at a moderate flat road, building resistance, but you’re just getting starte.d, so nothing too crazy.  at 1:18 this song really picks up, just this as a quick sprint (roughly 20 sec).`,
          category: "Flat Road",
          songId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: `Keep that gear heavy from the end of thunder.  this song has an easy beat.  keep that pace quick and steady, but continue to build resistance.`,
          category: "Climb",
          songId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("routines", null, {});
  },
};
