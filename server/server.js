import config from './../config/config'
import app from './express'


// Connection URL
const dropDatabaseSync = false;
sequelize.sync({ force: dropDatabaseSync }).then(async () => {
  if (dropDatabaseSync) {
    console.log("Connection to db established...")
  }

  app.listen(process.env.PORT, () =>
  console.info('Server started on port %s.', config.port),
  );
});


/* app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})
 */