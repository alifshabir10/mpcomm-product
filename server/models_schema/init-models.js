var DataTypes = require("sequelize").DataTypes;
var _account = require("./account");
var _brand = require("./brand");
var _category = require("./category");
var _category_image = require("./category_image");
var _conditions = require("./conditions");
var _product = require("./product");
var _product_images = require("./product_images");
var _product_variant = require("./product_variant");
var _status = require("./status");

function initModels(sequelize) {
  var account = _account(sequelize, DataTypes);
  var brand = _brand(sequelize, DataTypes);
  var category = _category(sequelize, DataTypes);
  var category_image = _category_image(sequelize, DataTypes);
  var conditions = _conditions(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var product_images = _product_images(sequelize, DataTypes);
  var product_variant = _product_variant(sequelize, DataTypes);
  var status = _status(sequelize, DataTypes);

  product.belongsTo(account, { as: "prod_acco", foreignKey: "prod_acco_id"});
  account.hasMany(product, { as: "products", foreignKey: "prod_acco_id"});
  product.belongsTo(brand, { as: "prod_brand", foreignKey: "prod_brand_id"});
  brand.hasMany(product, { as: "products", foreignKey: "prod_brand_id"});
  category.belongsTo(category, { as: "cate_cate", foreignKey: "cate_cate_id"});
  category.hasMany(category, { as: "categories", foreignKey: "cate_cate_id"});
  category_image.belongsTo(category, { as: "caim_cate", foreignKey: "caim_cate_id"});
  category.hasMany(category_image, { as: "category_images", foreignKey: "caim_cate_id"});
  product.belongsTo(category, { as: "prod_cate", foreignKey: "prod_cate_id"});
  category.hasMany(product, { as: "products", foreignKey: "prod_cate_id"});
  product.belongsTo(conditions, { as: "prod_cond_name_condition", foreignKey: "prod_cond_name"});
  conditions.hasMany(product, { as: "products", foreignKey: "prod_cond_name"});
  product_images.belongsTo(product, { as: "prim_prod", foreignKey: "prim_prod_id"});
  product.hasMany(product_images, { as: "product_images", foreignKey: "prim_prod_id"});
  product_variant.belongsTo(product, { as: "prova_prod", foreignKey: "prova_prod_id"});
  product.hasMany(product_variant, { as: "product_variants", foreignKey: "prova_prod_id"});

  return {
    account,
    brand,
    category,
    category_image,
    conditions,
    product,
    product_images,
    product_variant,
    status,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
