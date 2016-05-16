module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/pirates'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }

};
