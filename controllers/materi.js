const db = require("../models");
const Materi = db.materis;
//Create

exports.create = async (req, res) => {
  try {
    const data = await Materi.create(req.body);
    res.json({
      massage: "materi created succesfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      massage: error.massage,
      data: null,
    });
  }
};

//Read

exports.getAll = async (req, res) => {
  try {
    const materies = await Materi.findAll();
    res.json({
      message: "materi retrieved succesfully",
      data: materies,
    });
  } catch (error) {
    res.status(500).json({
      massage: error.massage,
      data: null,
    });
  }
};

//Mengubah data

exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const materi = await Materi.findByPk(id, { rejectOnEmpty: true });
    materi.update(req.body, {
      where: { id },
    });
    res.json({
      massage: "Data Telah Berubah",
      data: materi,
    });
  } catch (error) {
    res.status(500).json({
      massage: error.massage || "Some error occurred while retrieving quiz",
      data: null,
    });
  }
};

// Menghapus

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const materi = await Materi.findByPk(id, { rejectOnEmpty: true });

    quiz.destroy();

    res.json({
      massage: "materi deleted succesfull",
    });
  } catch (error) {
    res.status(500).json({
      massage: error.massage || "Some error occurred while retrieving quiz",
      data: null,
    });
  }
};

//mengambil data sesuai id
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const materi = await Materi.findByPk(id, { rejectOnEmpty: true });
    res.json({
      massage: `materi retrieved successfully with id=${id}.`,
      data: materi,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while retrieving quiz",
      data: null,
    });
  }
};

//menampilkan atau mengambil semua data quiz

exports.getByCategoryId = async (req, res) => {
  const id = req.params.id;
  const materies = await Materi.findAll({
    where: {
      categoryId: id,
    },
  });
  res.json({
    massage: `materies retrieved successfully with categoryid=${id}`,
    data: materies,
  });
};