// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)//?

// Tags belongToMany Products (through ProductTag)
Category.hasMany(Product, {
  foreignKey: "  ",
  onDelete: "CASCADE",
});

Product.belongsTo(Category, {
  foreignKey: "  ",
});

// The association can also be created from the Car side
Product.belongsToMany(Tag, {
  foreignKey: "  ",
});
Tag.belongsToMany(Product, {
  foreignKey: "  ",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
