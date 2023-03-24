import { config } from 'dotenv';

export const { NODE_ENV } = process.env;
if(!NODE_ENV) {
  console.log(`please define NODE_ENV in the environment to decide the .env file needed`);
  process.exit(0);
}

config({
  path: `./env/${NODE_ENV}.env`
});

export const {
  PORT,
  DB_HOST,
  DB_PASSWORD,
  DB_USER,
  DB_NAME
} = process.env;