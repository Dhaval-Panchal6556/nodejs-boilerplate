import { registerAs } from "@nestjs/config";

export default registerAs("database", () => ({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT || 27017,
  name: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  initialUser: {
    firstName: "Demo",
    lastName: "Test",
    gender: "Male",
    email: "inquiry@yopmail.com",
    password: "123456",
  },
  mongo: {
    connectionString: process.env.DATABASE_CONNECTION_URL,
  },
}));
