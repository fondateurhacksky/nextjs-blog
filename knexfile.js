// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    connection: { 
      host: 'localhost',
      user: 'root',
      password: 'Lfn2.2rast',
      database: 'myhouse'
     }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'myhouse',
      user:     'root',
      password: 'Lfn2.2rast'
    },
    pool: {
      min: 0,
      max: 10
    },

    migrations: {
      tableName: 'myfirst_migration'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
