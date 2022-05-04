// import models
const Category = require("./Category");
const Tag = require("./Tag");
const Product = require("./Product");
const ProductTag = require("./ProductTag");

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)//?

// Tags belongToMany Products (through ProductTag)
Category.hasMany(Product, {
  foreignKey: "category_id",
  //
});

Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE", //When Category get deleted, product deleted too
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
});
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
