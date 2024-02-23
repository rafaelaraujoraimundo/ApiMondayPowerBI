
export const environment = {
  PORT: process.env.PORT || 3000,
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://user:senha@ip:Porta/Banco_dados?sslmode=disable',
  MONDAY_BASE_URL: process.env.MONDAY_BASE_URL || 'https://api.monday.com/v2',
};
