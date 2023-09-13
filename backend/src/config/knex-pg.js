const pgConfig = {
  development: {
    client: "pg",
    connection: {
      host: "dpg-cjeft56nk9qs73afirmg-a.oregon-postgres.render.com",
      user: "andersaurio",
      password: "wmOzUQMWjTuvrRGhvGlZNom1vstpyWpo",
      database: "auxipbdb",
      port: 5432,
      ssl: { rejectUnauthorized: false },
    },
  },
};

module.exports = pgConfig;

/*

postgres://andersaurio:wmOzUQMWjTuvrRGhvGlZNom1vstpyWpo@dpg-cjeft56nk9qs73afirmg-a.oregon-postgres.render.com/auxipbdb

host : dpg-cjeft56nk9qs73afirmg-a.oregon-postgres.render.com
user : andersaurio
password: wmOzUQMWjTuvrRGhvGlZNom1vstpyWpo
database: auxipbdb
port : 5432

*/
