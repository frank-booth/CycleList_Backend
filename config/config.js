require('dotenv').config()
module.exports = {
  development: {
    database: 'cycle_list',
    dialect: 'postgres'
  },
  test: {
    database: 'cycle_list_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}