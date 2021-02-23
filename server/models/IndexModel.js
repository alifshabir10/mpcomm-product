import Sequelize from 'sequelize'
import config from '../../config/config'


 const sequelize = new Sequelize(
  config.db_name,
  config.db_username,
  config.db_password,
  {
    dialect: 'postgres',
    // Host : 192.168.100.254,
  },
);

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.log(err));

const Op = Sequelize.Op;

const models = {
  // cart : sequelize.import('./cart.model'),
  brand: sequelize.import('./brand.model'),
  category: sequelize.import('./category.model'),
  categoryImg: sequelize.import('./categoryImg.model'),
  condition: sequelize.import('./condition.model'),
  account: sequelize.import('./account.model'),
  product: sequelize.import('./product.model'),
  productImages: sequelize.import('./productImages.model'),
  productVariant: sequelize.import('./productVariant.model'),
  status: sequelize.import('./status.model')
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

// export { sequelize };
export {sequelize, Op };
export default models;
