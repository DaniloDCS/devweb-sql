'use strict';
module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    nome: DataTypes.STRING,
    codigo: DataTypes.STRING,
    preco: DataTypes.FLOAT
  }, {});
  Produto.associate = function(models) {
    // belongto = pertnece a
    Produto.Fabricante = Produto.belongsTo(models.Fabricante, {
      foreignKey: 'fabricanteId',
      onDelete: 'CASCADE',
      as: 'fabricante'
    });
  };
  return Produto;
};