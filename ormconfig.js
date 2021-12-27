module.exports = {
  type: 'postgres',
  host: process.env._DB_HOST_,
  port: process.env._DB_PORT_,
  username: process.env._DB_USER_,
  password: process.env._DB_PASSWORD_,
  database: process.env._DB_NAME_,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  synchronize: true,
  logging: false,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};
