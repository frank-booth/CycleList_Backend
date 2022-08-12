module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'riders',
      [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'demo@demo.com',
          userName: 'johnnyD',
          passwordDigest: 'password123',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Bob',
          lastName: 'Smith',
          email: 'bsmsith@dgmail.com',
          userName: 'bobSmith',
          passwordDigest: 'password456',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('riders', null, {})
  }
}
