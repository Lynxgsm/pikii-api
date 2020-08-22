exports.config = {
  DB: {
    URLPARSER: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    DBCONNECT: function () {
      return `mongodb://${process.env.MONGO}/${process.env.DB_NAME}`;
    },
  },
  HTTP: {
    port: process.env.HTTP_PORT,
    host: process.env.HOST,
  },
  HTTPS: {
    port: process.env.HTTPS_PORT,
    host: process.env.HOST,
  },
  OPTION: {
    origin: process.env.ORIGIN || `http://localhost:3000`,
    optionsSuccessStatus: 200,
  },
};
