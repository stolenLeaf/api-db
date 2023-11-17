import { registerAs } from '@nestjs/config/dist';

export default registerAs('config', () => {
  return {
    postgres: {
      host: process.env.POSTGRES_HOTS,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      database: process.env.POSTGRES_DB,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
  };
});
