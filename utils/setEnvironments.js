module.exports = function setPostgresDefaultsOnHeroku() {
  if (process.env.DATABASE_URL) {
    // Install pg-connection-string
    const { parse } = require('pg-connection-string');

    // Extract the connection information from the Heroku environment variable
    console.log(parse(process.env.DATABASE_URL));
    const { host, database, user, password } = parse(process.env.DATABASE_URL);

    // Set standard environment variables
    process.env.PGHOST = host;
    process.env.PGDATABASE = database;
    process.env.PGUSERNAME = user;
    process.env.PGPASSWORD = password;
  }
};
