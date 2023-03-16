module.exports = (sequelize, Sequelize) => {
  const Materi = sequelize.define("materi", {
    bab: {
      type: Sequelize.STRING,
    },
    pasal: {
      type: Sequelize.INTEGER,
    },
    materi: {
      type: Sequelize.TEXT,
    },
    categoryId: {
      type: Sequelize.INTEGER,
    },
  });
  return Materi;
};