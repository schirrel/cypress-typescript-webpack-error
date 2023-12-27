import 'dotenv/config';

const _env = {
  url: process.env.URL,
  adminUrl: process.env.ADMIN,
  username: process.env.AUTH_USERNAME,
  password: process.env.AUTH_PASSWORD,
};

export const env = _env;
