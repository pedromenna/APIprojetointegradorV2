import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  "railway", "root", "vyr2OWhLj3PxJ4du9Emr", {
  dialect: "mysql",
  host: "containers-us-west-197.railway.app",
  port: 5876
});
