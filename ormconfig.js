module.exports = {
  type: 'postgres',
  host: process.env._DB_HOST_,
  port: process.env._DB_PORT_,
  username: process.env._DB_USER_,
  password: process.env._DB_PASSWORD_,
  database: process.env._DB_NAME_,
  synchronize: true,
  logging: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  entities: ['server/**/*.entity.ts'],
  migrations: ['server/migration/**/*.ts'],
  subscribers: ['server/subscriber/**/*.ts'],
  cli: {
    migrationsDir: 'server/migration',
    subscribersDir: 'server/subscriber',
  },
};
