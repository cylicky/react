const config = require("../config/index.js");
const { Server_HOST, APP_RORT } = config;
const initServer = async (app) => {
  return new Promise((resolve, reject) => {
    app
      .listen(APP_RORT, () => {
        console.log(`Server is running on http://${Server_HOST}:${APP_RORT}`);
        resolve();
      })
      .on("error", (error) => {
        console.log(error);
        reject();
      });
  });
};
module.exports = initServer;
