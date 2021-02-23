import Sequelize from 'sequelize'

export const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
      dialect: 'postgres',
    },
  );

const Op = Sequelize.Op;

const models = {
    // cart : sequelize.import('./cart.model'),
    brand : sequelize.import('./brand.model'),
    category : sequelize.import('./category.model'),
    category_img : sequelize.import('./categoryImg.model'),
    condition : sequelize.import('./condition.model')
};

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
      models[key].associate(models);
    }
});

// export { sequelize };
export {Op};
export default models;
