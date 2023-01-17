import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('myhouse', '', '', {
    host: 'localhost',
    dialect:'mysql'
  });